import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Layout
import Public from './LayoutPages/Public';
import PLCPublic from './LayoutPages/PLCPublic';
//pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import BangoPage from './pages/PLCPage/BangoPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Public />,
    children: [
      {path: "/", element: <HomePage/>},
      {path: "/about", element: <AboutPage/>},
    ]
  },
  {
    path: "/Login",
    element: <LoginPage />
  },
  {
    path: "/PLC",
    element: <PLCPublic />,
    children: [
      {path: "/PLC", element: <BangoPage/>},
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}></RouterProvider>);

