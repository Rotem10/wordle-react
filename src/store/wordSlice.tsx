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
    userWord: any[];
    compares: any[];
    isSuccess: boolean;
  },
  {
    setWord: (
      state: Draft<{
        word: string;
        userWord: any[];
        compares: any[];
        isSuccess: boolean;
      }>,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      compares: any[];
      word: string;
      userWord: any[];
      isSuccess: boolean;
    };
    compareValues: (
      state: Draft<{
        word: string;
        userWord: any[];
        compares: any[];
        isSuccess: boolean;
      }>,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      compares: any[];
      word: string;
      userWord: any[];
      isSuccess: boolean;
    };
    updateUserWord: (
      state: Draft<{
        word: string;
        userWord: any[];
        compares: any[];
        isSuccess: boolean;
      }>,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      compares: any[];
      word: string;
      userWord: any[];
      isSuccess: boolean;
    };
    checkRow: (
      state: Draft<{
        word: string;
        userWord: any[];
        compares: any[];
        isSuccess: boolean;
      }>
    ) => void;
  },
  'word'
>;

export const wordSlice: WordSlice = createSlice({
  name: 'word',
  initialState: {
    word: '',
    userWord: Array(),
    compares: Array(30).fill(ValuesCompare.None),
    isSuccess: false,
  },
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload;
    },
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
    updateUserWord: (state, action) => {
      let newUserWord = [...state.userWord];
      if (state.userWord.length === 5) {
        newUserWord = [];
        newUserWord.push(action.payload);
      } else {
        newUserWord.push(action.payload);
      }
      return { ...state, userWord: newUserWord };
    },
    checkRow: (state) => {
      const newIsSuccess =
        JSON.stringify(state.userWord) === JSON.stringify(state.word.split(''));
      state.isSuccess = newIsSuccess;
    },
  },
});

export const { compareValues, updateUserWord, checkRow, setWord } =
  wordSlice.actions;
export default wordSlice.reducer;
