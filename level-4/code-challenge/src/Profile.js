import React, { useContext } from "react";
import { UserContext } from "./userContext";
import "./styles.css";

function Profile() {
  //import context here
  const { user } = useContext(UserContext);

  return (
    <div className="border">
      <h2>Profile Page</h2>
      <h1> Welcome, {user} </h1>
      <button>Login</button>
    </div>
  );
}

export default Profile;