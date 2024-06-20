import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx"
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    element: <Navbar/>,

    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
       path: "/log",
       element: <Login/>
      },
      {
        path:"/sign",
        element: <SignUp/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<RouterProvider router={router}>
</RouterProvider>
</React.StrictMode>

)
