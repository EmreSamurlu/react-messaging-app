import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getMessagesThunk } from './thunk/getMessagesThunk';
import { AsyncStatus } from '../../../constants/global-constants';

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addNewMessage: (state, action) => {
      if (!state.messages?.some((message: { id: string }) => message.id === action.payload.id)) {
        state.messages?.push(action.payload);
      }
    },
    clearMessageState: (state) => {
      state.messages = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessagesThunk.pending, (state) => {
        state.status = AsyncStatus.Loading;
      })
      .addCase(getMessagesThunk.fulfilled, (state, action) => {
        state.status = AsyncStatus.Success;
        state.messages?.push(...action.payload);
      })
      .addCase(getMessagesThunk.rejected, (state) => {
        state.status = AsyncStatus.Error;
      });
  },
});
export const { addNewMessage, clearMessageState } = messageSlice.actions;
export default messageSlice.reducer;
