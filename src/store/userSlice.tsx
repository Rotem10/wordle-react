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
    signIn: (
      state: Draft<{
        userName: string | null;
      }>,
      action: {
        payload: string;
        type: string;
      }
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
      return { ...state, userName: '' };
    },
    signIn: (state, action) => {
      localStorage.setItem('userName', action.payload);
      return { ...state, userName: action.payload };
    },
  },
});

export const { signOut, signIn } = userSlice.actions;
export default userSlice.reducer;
