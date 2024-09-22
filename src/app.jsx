import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
//app.jsx is the container for our router and for our navbarComponent.

import { createBrowserRouter, RouterProvider, BrowserRouter, Router } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
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

function App() {
    return (
        <>
        <NavigationBar/>
        <RouterProvider router={router} />
        </>
    )
}

export default App;