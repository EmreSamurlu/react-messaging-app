import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage, Login, SignUp } from './screens/Auth';
import { Chat } from './screens/Messaging';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',

      element: <SignUp />,
    },
    {
      path: '/chat',
      element: <Chat />,
    },
  ]);

  return router ? <RouterProvider router={router} /> : <div>Loading</div>;
};

export default App;
