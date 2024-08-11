import { createAsyncThunk } from '@reduxjs/toolkit';
import { push, ref, set } from 'firebase/database';
import { database } from '../../../../firebase.config';
import moment from 'moment';

export const sendMessageThunk = createAsyncThunk(
  'message/sendMessage',
  async ({
    userId,
    selectedReceiver,
    newMessage,
    user,
  }: {
    userId: string;
    selectedReceiver: string;
    newMessage: string;
    user: string;
  }) => {

    const messagesRef = ref(database, `messages`);
    const newMessageRef = push(messagesRef);
    set(newMessageRef, {
      text: newMessage,
      senderMail: user,
      senderId: userId,
      receiverId: selectedReceiver,
      timestamp: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    });
  },
);
