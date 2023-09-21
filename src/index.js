import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FormPengajuanPage from './components/FormPengajuanPage';
import Homepage from './components/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element:
    <App />,
    children:
    [
      {
        path: "/",
        index:
        true,
        element:
        <Homepage />
      },
      {
        path: "/formpengajuan",
        element:
        <FormPengajuanPage />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
