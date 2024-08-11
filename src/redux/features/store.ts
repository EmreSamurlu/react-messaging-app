import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import signupReducer from './signup/slicer';
import loginReducer from './login/slicer';
import messageReducer from './message/slicer';
import userListReducer from './users/slicer';

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  message: messageReducer,
  userList: userListReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
