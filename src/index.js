import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeContextProvider from "./context/ThemeContext";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
