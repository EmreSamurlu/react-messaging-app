import { AsyncStatus } from '../../../constants/global-constants';
import { ISignupState } from '../../redux-types/redux-types';

export const initialState: ISignupState = {
  signup: null,
  signupStatus: AsyncStatus.Idle,
};
