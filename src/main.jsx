import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import HeroRegister from './Components/HeroRegister/HeroRegister.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children:[
      {
        path:"/",
        element: <Home></Home>,
      },
      {
       path:"/login",
       element:<Login></Login> 
      },
      {
        path:"/rigister",
        element:<Register></Register>
      },
      {
        path:"/herorigister",
        element:<HeroRegister></HeroRegister>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
