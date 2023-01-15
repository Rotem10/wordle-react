import { createSlice, Slice, Draft } from '@reduxjs/toolkit';

type LetterValueSlice = Slice<
  {
    value: string;
  },
  {
    changeValue: (
      state: Draft<{
        value: string;
      }>,
      action: {
        payload: string;
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
    changeValue: (state, action) => {
      if (state.value === action.payload) {
        return { ...state, value: action.payload.toUpperCase() };
      }
      return { ...state, value: action.payload };
    },
  },
});

export const { changeValue } = letterValueSlice.actions;
export default letterValueSlice.reducer;
