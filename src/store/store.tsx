import { configureStore } from '@reduxjs/toolkit';
import tileReducer from './tileSlice';
import valueReducer from './letterValueSlice';

export default configureStore({
  reducer: {
    currentTile: tileReducer,
    currentValue: valueReducer,
  },
});
