import { AsyncStatus } from '../../../constants/global-constants';
import { ILoginState } from '../../redux-types/redux-types';

export const initialState: ILoginState = {
  loginStatus: AsyncStatus.Idle,
  user: null,
  userId: null,
  token: null,
};
