import { useContext, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/TButton";
import ThemeContext from "../context/ThemeContext";
import ThemeContextProvider from "../context/ThemeContextProvider";

function App() {
  const { Theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(Theme);
    console.log(Theme);
  }, [Theme]);
  return (
    <ThemeContextProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
