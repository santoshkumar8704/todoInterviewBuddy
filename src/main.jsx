import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TestApp from "./TestApp";
import { MyContextProvider } from "./TodoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContextProvider>
      <TestApp />
      <App />
    </MyContextProvider>
  </StrictMode>
);
