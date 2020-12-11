import React, { useEffect } from "react";
import {
  bottomNavLinksStyles,
  logoutButtonStyles,
  sidebarRootStyles,
  topNavLinksStyles,
} from "./style";
import { Link } from "react-router-dom";
import * as eva from "eva-icons";

function SideBar() {
  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <div className={sidebarRootStyles}>
      <div className={topNavLinksStyles}>
        <Link to="/">
          <i data-eva="grid-outline"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/customize">
          <i data-eva="options-outline"></i>
          <span>Customization</span>
        </Link>
        <Link to="/docs">
          <i data-eva="folder-outline"></i>
          <span>Documentation</span>
        </Link>
        <Link to="/support">
          <i data-eva="message-circle-outline"></i>
          <span>Support</span>
        </Link>
      </div>
      <div className={bottomNavLinksStyles}>
        <Link to="/logout" className={logoutButtonStyles}>
          <i data-eva="log-out-outline"></i>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
