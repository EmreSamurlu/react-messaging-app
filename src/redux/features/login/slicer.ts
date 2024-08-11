import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { loginThunk } from './thunk/loginThunk';
import { AsyncStatus } from '../../../constants/global-constants';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.config';
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      signOut(auth);
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loginStatus = AsyncStatus.Loading;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loginStatus = AsyncStatus.Success;
        const { userId, usermail, token } = action.payload;
        state.user = usermail;
        state.userId = userId;
        state.token = token;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loginStatus = AsyncStatus.Error;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
