import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//main.jsx is the container for our router and it's sole purpose is that and that alone
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/portfolio",
    element: <Portfolio/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/about-me",
    element: <AboutMe/>
  },
  {
    path: "/resume",
    element: <Resume/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
