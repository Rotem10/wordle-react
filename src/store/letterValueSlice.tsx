import { createSlice, Slice, Draft } from '@reduxjs/toolkit';

type LetterValueSlice = Slice<
  {
    value: string;
    values: any[];
    index: number;
    valueChanged: boolean;
    game: boolean;
  },
  {
    changeValue: (
      state: Draft<{
        value: string;
        values: any[];
        index: number;
        valueChanged: boolean;
        game: boolean;
      }>,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      value: any;
      values: any[];
      index: number;
      valueChanged: true;
      game: true;
    };
    setValueChanged: (
      state: Draft<{
        value: string;
        values: any[];
        index: number;
        valueChanged: boolean;
        game: boolean;
      }>
    ) => void;
    setGameOver: (
      state: Draft<{
        value: string;
        values: any[];
        index: number;
        valueChanged: boolean;
        game: boolean;
      }>
    ) => void;
  },
  'letterValue'
>;

export const letterValueSlice: LetterValueSlice = createSlice({
  name: 'letterValue',
  initialState: {
    value: '',
    values: Array(30).fill(''),
    index: 0,
    valueChanged: false,
    game: true,
  },
  reducers: {
    changeValue: (state, action) => {
      const newValues = [...state.values];
      if (state.index <= 29) {
        newValues[state.index] = action.payload;
      }
      if (state.value === action.payload) {
        return {
          ...state,
          value: action.payload.toUpperCase(),
          values: newValues,
          index: state.index + 1,
          valueChanged: true,
        };
      }
      return {
        ...state,
        value: action.payload,
        values: newValues,
        index: state.index + 1,
        valueChanged: true,
      };
    },
    setValueChanged: (state) => {
      state.valueChanged = false;
    },
    setGameOver: (state) => {
      state.game = false;
    },
  },
});

export const { changeValue, setValueChanged, setGameOver } =
  letterValueSlice.actions;
export default letterValueSlice.reducer;
