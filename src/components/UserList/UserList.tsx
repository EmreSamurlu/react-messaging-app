import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../redux/features/store';
import { setSelectedReceiver } from '../../redux/features/users/slicer';
import { getAllUsersThunk } from '../../redux/features/users/thunk/getAllUsersThunk';

interface IUserList {
  users:
    | {
        id: string;
        userId: string;
        userMail: string;
      }[]
    | null;
}

const UserList: FC<IUserList> = ({ users }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  const handleSelectedReceiver = (selectedUser: string) => {
    dispatch(setSelectedReceiver(selectedUser));
  };

  return (
    <div>
      <h2 className='text-center'>UserList</h2>
      <ul className=''>
        {users?.map((user) => (
          <li key={user.id}>
            <button
              onClick={(e) => handleSelectedReceiver((e.target as HTMLButtonElement).value)}
              type='submit'
              value={user.userId}>
              {user.userMail}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
