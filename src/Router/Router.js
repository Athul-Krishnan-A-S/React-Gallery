import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProfilePage from '../pages/profilePage/ProfilePage';
import ReactPractice from '../pages/reactPractice/ReactPractice';


const router = createBrowserRouter([
  {
    path: '/',
    element: <ReactPractice />, 
  },
  {
    path: 'profile/:id',
    element: <ProfilePage />, 
  },
]);

function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;
