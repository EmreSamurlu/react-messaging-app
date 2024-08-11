import { createAsyncThunk } from '@reduxjs/toolkit';
import { onValue, ref } from 'firebase/database';
import { database } from '../../../../firebase.config';
import { addNewMessage } from '../slicer';

export const getMessagesThunk = createAsyncThunk(
  'message/chat',
  async (_, { dispatch }) => {
    const messagesRef = ref(database, `/messages`);

    try {
      onValue(messagesRef, (snapshot) => {
        const messages = snapshot.val();

        console.log('MESSAGES',messages)

        for (const key in messages) {
          dispatch(
            addNewMessage({
              id: key,
              text: messages[key].text,
              senderMail: messages[key].senderMail,
              senderId: messages[key].senderId,
              receiverId: messages[key].receiverId,
              timestamp: messages[key].timeStamp,
            }),
          );
        }
      });

      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  },
);
