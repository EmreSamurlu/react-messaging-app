import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { getAllUsersThunk } from './thunk/getAllUsersThunk';
import { AsyncStatus } from '../../../constants/global-constants';

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    setSelectedReceiver: (state, action) => {
      state.selectedReceiver = action.payload;
    },
    addUser: (state, action) => {
      const users = JSON.parse(JSON.stringify(state.userList));
      if (!users.some((user: { id: string }) => user.id === action.payload.id)) {
        state.userList?.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersThunk.pending, (state) => {
        state.status = AsyncStatus.Loading;
      })
      .addCase(getAllUsersThunk.fulfilled, (state, action) => {
        state.status = AsyncStatus.Success;
        state.userList?.push(...action.payload);
      })
      .addCase(getAllUsersThunk.rejected, (state) => {
        state.status = AsyncStatus.Error;
      });
  },
});
export const { setSelectedReceiver, addUser } = userListSlice.actions;
export default userListSlice.reducer;
