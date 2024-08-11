import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../../../../firebase.config';
import { push, ref, set } from 'firebase/database';

export const signupThunk = createAsyncThunk('auth/signup', async ({ email, password }: { email: string; password: string }) => {
  const response = (await createUserWithEmailAndPassword(auth, email, password)).user;
  const usersRef = ref(database, 'users/');

  const newUserRef = push(usersRef);

  set(newUserRef, {
    userId: response.uid,
    userMail: email,
  });

  return response.toJSON();
});
