import { createSlice } from '@reduxjs/toolkit';

export const tileSlice = createSlice({
  name: 'currentTileId',
  initialState: {
    id: 0,
  },
  reducers: {
    nextId: (state) => {
      state.id++;
      console.log(state.id);
    },
  },
});

export const { nextId } = tileSlice.actions;

export default tileSlice.reducer;
