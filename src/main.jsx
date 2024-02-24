import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import Day from './pages/day.jsx'
import Work from './pages/work'
import Shopping from './pages/shopping'
import Family from './pages/family'
import Wishlist from './pages/wishlist'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/day",
    element: <Day/>,
  },
  {
    path: "/work",
    element: <Work/>,
  },
  {
    path: "/shopping",
    element: <Shopping/>,
  },
  {
    path: "/family",
    element: <Family/>,
  },
  {
    path: "/wishlist",
    element: <Wishlist/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
