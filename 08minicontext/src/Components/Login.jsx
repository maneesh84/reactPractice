import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

export default function Login() {
  const [userName, setUsername] = useState("");
  const [userPass, setPass] = useState("");

  const { setUser } = useContext(UserContext);
  // console.log("yes");
  const handelSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, userPass });
  };
  return (
    <>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="password"
        value={userPass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <br />
      <button onClick={handelSubmit}>submit</button>
      <br />
    </>
  );
}
