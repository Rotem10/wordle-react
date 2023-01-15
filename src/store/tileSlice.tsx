import { createSlice, Slice, Draft } from '@reduxjs/toolkit';

type TileSlice = Slice<
  {
    id: number;
  },
  {
    nextId: (
      state: Draft<{
        id: number;
      }>
    ) =>
      | {
          id: number;
        }
      | undefined;
  },
  'currentTileId'
>;

export const tileSlice: TileSlice = createSlice({
  name: 'currentTileId',
  initialState: {
    id: 0,
  },
  reducers: {
    nextId: (state) => {
      if (state.id < 29) {
        const nextId = state.id + 1;
        return { ...state, id: nextId };
      }
    },
  },
});

export const { nextId } = tileSlice.actions;

export default tileSlice.reducer;
