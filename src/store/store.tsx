import { configureStore } from '@reduxjs/toolkit';
import tileReducer from './tileSlice';
import valueReducer from './letterValueSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    currentTile: tileReducer,
    currentValue: valueReducer,
    user: userReducer,
  },
});
