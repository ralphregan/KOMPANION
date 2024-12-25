import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App';
import App2 from './Week/App2';
import App3 from './Day/App3';

import ClientLandingPage from './LandingPage/ClientLandingPage';


const router = createBrowserRouter([{
  path: '/month',
  element: <App/>,
},
{path: '/week',
  element: <App2/>,

},
{path: '/day',
  element: <App3/>
},
{path: '/',
  element: <ClientLandingPage/>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <RouterProvider router={router} />
  </React.StrictMode>
);


