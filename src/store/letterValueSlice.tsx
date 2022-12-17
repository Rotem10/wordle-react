import { createSlice } from '@reduxjs/toolkit';

export const letterValueSlice = createSlice({
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
