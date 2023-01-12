import { createSlice, Slice, Draft } from '@reduxjs/toolkit';

type userSlice = Slice<
  {
    userName: string | null;
  },
  {
    signOut: (
      state: Draft<{
        userName: string | null;
      }>
    ) => void;
  },
  'user'
>;

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: localStorage.getItem('userName'),
  },
  reducers: {
    signOut: (state) => {
      localStorage.setItem('userName', '');
      state.userName = '';
    },
    signIn: (state, action) => {
      localStorage.setItem('userName', action.payload);
      state.userName = action.payload;
    },
  },
});

export const { signOut, signIn } = userSlice.actions;
export default userSlice.reducer;
