import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx"
import Login from './pages/Login.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import Account from "./pages/Account.jsx";


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
      },
     {
        path: "/account",
        element:

        <Account/>

      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<AuthContextProvider>
<RouterProvider router={router}>
</RouterProvider>
</AuthContextProvider>
</React.StrictMode>
)
