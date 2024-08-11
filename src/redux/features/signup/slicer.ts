import { createSlice } from '@reduxjs/toolkit';
import { signupThunk } from './thunk/signupThunk';
import { initialState } from './initialState';
import { AsyncStatus } from '../../../constants/global-constants';

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.pending, (state) => {
        state.signupStatus = AsyncStatus.Loading;
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.signupStatus = AsyncStatus.Success;
        state.signup = action.payload;
      })
      .addCase(signupThunk.rejected, (state) => {
        state.signupStatus = AsyncStatus.Error;
      });
  },
});

export default signupSlice.reducer;
