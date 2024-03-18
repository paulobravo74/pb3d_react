import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Album from './pages/album';
import Main from './pages/main';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/album',
    element: <Album />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


