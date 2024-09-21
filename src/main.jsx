import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

//import all of our pages
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Error from "../pages/Error"
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

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
  },
  {
    path: "/error",
    element: <Error/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
