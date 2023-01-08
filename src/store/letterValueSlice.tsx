import { createSlice, Slice, Draft } from '@reduxjs/toolkit';

type LetterValueSlice = Slice<
  {
    value: string;
  },
  {
    change: (
      state: Draft<{
        value: string;
      }>,
      action: {
        payload: any;
        type: string;
      }
    ) => void;
  },
  'letterValue'
>;

export const letterValueSlice: LetterValueSlice = createSlice({
  name: 'letterValue',
  initialState: {
    value: '',
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = letterValueSlice.actions;
export default letterValueSlice.reducer;
