import React from 'react';
import './index.css';
import { ScubaLog } from './components/ScubaLog';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';



const router = createBrowserRouter([
{
  path: "*",
  element: <ScubaLog />,
}
]);




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
);

