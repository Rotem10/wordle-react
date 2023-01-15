import { createSlice, Slice, Draft } from '@reduxjs/toolkit';

enum ValuesCompare {
  None = '',
  Green = 'green',
  Yellow = 'yellow',
  Grey = 'grey',
}

type WordSlice = Slice<
  {
    word: string;
    compares: any[];
  },
  {
    compareValues: (
      state: Draft<{
        word: string;
        compares: any[];
      }>,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      compares: ValuesCompare[];
      word: string;
    };
  },
  'word'
>;

export const wordSlice: WordSlice = createSlice({
  name: 'word',
  initialState: {
    word: 'apple',
    compares: Array(30).fill(ValuesCompare.None),
  },
  reducers: {
    compareValues: (state, action) => {
      const { currentValue, wordIndex, currentTile } = action.payload;
      const newCompares = [...state.compares];

      const wordLetters = state.word.split('');
      if (currentValue === wordLetters[wordIndex]) {
        newCompares[currentTile] = ValuesCompare.Green;
      } else if (wordLetters.includes(currentValue)) {
        newCompares[currentTile] = ValuesCompare.Yellow;
      } else {
        newCompares[currentTile] = ValuesCompare.Grey;
      }
      return { ...state, compares: newCompares };
    },
  },
});

export const { compareValues } = wordSlice.actions;
export default wordSlice.reducer;
