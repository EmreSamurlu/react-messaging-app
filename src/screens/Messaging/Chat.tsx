import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/features/store';
import { getMessagesThunk } from '../../redux/features/message/thunk/getMessagesThunk';
import { useNavigate } from 'react-router-dom';
import { UserList } from '../../components';
import { sendMessageThunk } from '../../redux/features/message/thunk/sendMessageThunk';
import { logout } from '../../redux/features/login/slicer';

const Chat = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, token, userId } = useAppSelector((state) => state.login);
  const { messages } = useAppSelector((state) => state.message);
  const { userList, selectedReceiver } = useAppSelector((state) => state.userList);

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!token || !user) {
      navigate('/login');
    }
  }, [navigate, token, user]);

  useEffect(() => {
    if (userId) {
      dispatch(getMessagesThunk());
    }
  }, [dispatch, userId]);

  const sendMessage = () => {
    if (userId && user && selectedReceiver) {
      dispatch(sendMessageThunk({ userId, user, selectedReceiver, newMessage }));
    }
    setNewMessage('');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='grid col-start-3 col-end-9 grid-cols-12 row-auto mt-24'>
      <div className='grid row-auto col-start-1'>
        <div className='col-start-1 col-end-4 row-start-1'>
          CURRENT USER: {user} - {userId}
        </div>
        <div className='col-start-1 col-end-4 row-start-2 row-end-2'>
          <UserList users={userList} />
        </div>
      </div>

      <ul className='col-start-4 col-end-10 border-4'>
        {messages?.map((message) => (
          <li key={message.id}>
            <div>{message.senderMail}</div>
            <div>{message.timestamp}</div>
            <div>{message.text}</div>
          </li>
        ))}
      </ul>
      <input
        className='border-2 col-start-4 col-end-10 row-start-3 row-end-4'
        type='text'
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button className='col-start-11 row-start-3 text-center' onClick={() => sendMessage()}>
        Send Message
      </button>
      <div className='row-start-1 col-start-11 text-center'>
        <button type='submit' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
export default Chat;
