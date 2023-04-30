import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import RegisterRBs from './RegisterRBs/RegisterRBs';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBs from './RegisterBs/RegisterBs';
import Login__1 from './Login__1/Login__1';
import Register__1 from './Register__1/Register__1';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/register-rbs',
        element:<RegisterRBs></RegisterRBs>
      },
      {
        path:'/register-bs',
        element:<RegisterBs></RegisterBs>
      },
      {
        path:'/login__1',
        element:<Login__1></Login__1>
      },
      {
        path:'/register__1',
        element:<Register__1></Register__1>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
