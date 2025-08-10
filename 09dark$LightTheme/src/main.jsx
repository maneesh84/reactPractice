import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContextProvider from "../context/ThemeContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
