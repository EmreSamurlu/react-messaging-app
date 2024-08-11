import { User } from 'firebase/auth';
import { AsyncStatus } from '../../constants/global-constants';

export interface ISignupState {
  signup: Partial<User> | null;
  signupStatus: AsyncStatus;
}

export interface ILoginState {
  user: string | null;
  userId: string | null;
  token: string | null;
  loginStatus: AsyncStatus;
}

export interface IMessageState {
  messages:
    | {
        id: string;
        senderMail: string;
        text: string;
        timestamp: string;
      }[]
    | null;
  status: AsyncStatus;
}

export interface IUserListState {
  userList:
    | {
        id: string;
        userId: string;
        userMail: string;
      }[]
    | null;

  selectedReceiver: string | null;
  status: AsyncStatus;
}
