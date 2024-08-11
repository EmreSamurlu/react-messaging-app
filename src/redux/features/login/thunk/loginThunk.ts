import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase.config';

export const loginThunk = createAsyncThunk('auth/login', async ({ email, password }: { email: string; password: string }) => {
  const response = (await signInWithEmailAndPassword(auth, email, password)).user;
  const token = await response.getIdToken();
  const usermail = response.email;
  const userId = response.uid;

  return { userId, usermail, token};
});
