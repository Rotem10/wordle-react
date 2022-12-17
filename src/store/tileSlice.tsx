import { createSlice } from '@reduxjs/toolkit';

export const tileSlice = createSlice({
  name: 'currentTileId',
  initialState: {
    id: 0,
  },
  reducers: {
    nextId: (state) => {
      if (state.id < 29) {
        state.id++;
      }
    },
  },
});

export const { nextId } = tileSlice.actions;

export default tileSlice.reducer;
