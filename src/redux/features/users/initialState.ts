import { AsyncStatus } from '../../../constants/global-constants';
import { IUserListState } from '../../redux-types/redux-types';

export const initialState: IUserListState = {
  userList: [],
  status: AsyncStatus.Idle,

  selectedReceiver: null,
};
