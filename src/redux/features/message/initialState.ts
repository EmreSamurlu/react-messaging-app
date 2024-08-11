import { AsyncStatus } from '../../../constants/global-constants';
import { IMessageState } from '../../redux-types/redux-types';

export const initialState: IMessageState = {
  status: AsyncStatus.Idle,
  messages: [],
};
