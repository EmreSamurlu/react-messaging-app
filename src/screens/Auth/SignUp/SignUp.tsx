import { useState } from 'react';
import { PageWrapper } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/features/store';
import { signupThunk } from '../../../redux/features/signup/thunk/signupThunk';

function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(signupThunk({ email, password }));
    navigate('/login');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <PageWrapper>
      <div className='grid col-start-4 col-end-10 grid-cols-4 grid-rows-6 row-start-2 bg-neutral-500 rounded-md'>
        <h2 className='col-start-2 col-end-4 row-start-2 text-center text-white'>Sign Up</h2>
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
        <button className='col-start-2 col-end-4 row-start-5 text-white' type='submit' onClick={(e) => handleSignUp(e)}>
          Sign Up
        </button>
        <button className='col-start-2 col-end-4 row-start-6 text-white' type='button' onClick={handleGoBack}>
          Go Back
        </button>
        {error && <p>{error}</p>}
      </div>
    </PageWrapper>
  );
}

export default SignUp;
