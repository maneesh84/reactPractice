import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import User from "./Components/User";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>THIS IS REACT CONTEXT MINI PROJECT</h1>
        <Login />
        <User />
      </UserContextProvider>
    </>
  );
}

export default App;
