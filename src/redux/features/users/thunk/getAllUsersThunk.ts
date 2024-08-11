import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../../../../firebase.config';
import { onValue, ref } from 'firebase/database';
import { addUser } from '../slicer';

export const getAllUsersThunk = createAsyncThunk('users/userList', async (_, { dispatch, getState }) => {
  const usersRef = ref(database, 'users/');

  onValue(usersRef, (snapshot) => {
    const users = snapshot.val();

    for (const key in users) {
      dispatch(
        addUser({
          id: key,
          userId: users[key].userId,
          userMail: users[key].userMail,
        }),
      );
    }
  });
  return [];
});
