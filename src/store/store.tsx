import { configureStore } from '@reduxjs/toolkit';
import tileReducer from './tileSlice';
import valueReducer from './letterValueSlice';
import userReducer from './userSlice';
import wordReducer from './wordSlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

const store: ToolkitStore = configureStore({
  reducer: {
    currentTile: tileReducer,
    currentValue: valueReducer,
    user: userReducer,
    word: wordReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
