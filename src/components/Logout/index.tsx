import React from "react";
import { logoutRootStyles } from "./style";

function Logout() {
  return (
    <div className={logoutRootStyles}>
      <h1>Logout</h1>
      <p> You're logged out.</p>
    </div>
  );
}

export default Logout;
