import * as React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./app.jsx";
import "../styles/AboutMe.css"
import "../styles/NavigationBar.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
