import React, { useContext } from "react";
import UserContext from "../context/userContext";

export default function User() {
  const { user } = useContext(UserContext);
  // console.log(user);

  if (!user) return <div>please login</div>;

  return <div>Welcome {user.userName}</div>;
}
