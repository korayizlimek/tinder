import React from "react";
import { Login } from "../views";

function Profile() {
  const user = false;

  return (
    <div className="profile">
      {user ? <h1>Oturum acildi</h1> : <Login />}
    </div>
  );
}

export default Profile;
