import { FC, ReactNode } from 'react';

interface IPageWrapper {
  children: ReactNode;
}

const PageWrapper: FC<IPageWrapper> = ({ children }) => {
  return <div className='grid grid-cols-12 my-24'>{children}</div>;
};

export default PageWrapper;
