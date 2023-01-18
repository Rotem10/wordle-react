import { createSlice, Slice, Draft } from '@reduxjs/toolkit';

type TileSlice = Slice<
  {
    id: number;
    isLastTileInRow: boolean;
  },
  {
    nextId: (
      state: Draft<{
        id: number;
        isLastTileInRow: boolean;
      }>
    ) =>
      | {
          id: number;
          isLastTileInRow: boolean;
        }
      | undefined;
    checkLastTileInRow: (
      state: Draft<{
        id: number;
        isLastTileInRow: boolean;
      }>,
      action: {
        payload: any;
        type: string;
      }
    ) =>
      | {
          isLastTileInRow: true;
          id: number;
        }
      | {
          isLastTileInRow: false;
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
    isLastTileInRow: false,
  },
  reducers: {
    nextId: (state) => {
      if (state.id < 29) {
        const nextId = state.id + 1;
        return { ...state, id: nextId };
      }
    },
    checkLastTileInRow: (state, action) => {
      const lastTiles = [4, 9, 14, 19, 24, 29];
      if (action.payload) {
        if (lastTiles.includes(state.id - 1)) {
          return { ...state, isLastTileInRow: true };
        }
      } else {
        return { ...state, isLastTileInRow: false };
      }
    },
  },
});

export const { nextId, checkLastTileInRow } = tileSlice.actions;

export default tileSlice.reducer;
