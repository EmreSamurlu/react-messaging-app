import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../redux/features/store';
import { loginThunk } from '../../../redux/features/login/thunk/loginThunk';

function SignIn() {
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState(null);

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      dispatch(loginThunk({ email, password }));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  useEffect(() => {
    if (token && user) {
      navigate('/chat');
    }
  }, [navigate, token, user]);

  return (
    <PageWrapper>
      <div className='grid col-start-4 col-end-10 grid-cols-4 grid-rows-6 row-start-2 bg-neutral-500 rounded-md'>
        <h2 className='col-start-2 col-end-4 row-start-2 text-center text-white'>Login</h2>
        <form className='col-start-2 col-end-4 row-start-4 row-end-4'>
          <input
            className='w-full mb-4'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <input
            className='w-full'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </form>

        <button className='col-start-2 col-end-4 row-start-5 text-white' type='submit' onClick={(e) => handleLogin(e)}>
          Login
        </button>
        <button className='col-start-2 col-end-4 row-start-6 text-white' type='button' onClick={handleGoBack}>
          Go Back
        </button>
        {error && <p>{error}</p>}
      </div>
    </PageWrapper>
  );
}

export default SignIn;
