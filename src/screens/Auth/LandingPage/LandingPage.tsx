import { PageWrapper } from '../../../components';

const LandingPage = () => {
  return (
    <PageWrapper>
      <div className='grid col-start-4 col-end-10 grid-cols-4 grid-rows-6 row-start-2 bg-neutral-500 rounded-md'>
        <div className='col-start-2 col-end-4 text-center row-start-2 text-white'>Landing Page</div>
        <div className='col-start-2 col-end-4 text-center row-start-4'>
          <div>
            <a className='text-white' href={`/login`}>
              Login
            </a>
          </div>
          <div>
            <a className='col-start-2 text-white' href={`/signup`}>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LandingPage;
