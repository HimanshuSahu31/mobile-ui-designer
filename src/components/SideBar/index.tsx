import React, { useEffect } from "react";
import {
  bottomNavLinksStyles,
  iconStyles,
  logoutButtonStyles,
  selectedNavLink,
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
          <i
            className={iconStyles}
            data-eva="grid-outline"
            data-eva-fill="#cacad1"
          ></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/customize" className={selectedNavLink}>
          <i
            className={iconStyles}
            data-eva="options-outline"
            data-eva-fill="#484c67"
          ></i>
          <span>Customization</span>
        </Link>
        <Link to="/docs">
          <i
            className={iconStyles}
            data-eva="folder-outline"
            data-eva-fill="#cacad1"
          ></i>
          <span>Documentation</span>
        </Link>
        <Link to="/support">
          <i
            className={iconStyles}
            data-eva="message-circle-outline"
            data-eva-fill="#cacad1"
          ></i>
          <span>Support</span>
        </Link>
      </div>
      <div className={bottomNavLinksStyles}>
        <Link to="/logout" className={logoutButtonStyles}>
          <i
            className={iconStyles}
            data-eva="log-out-outline"
            data-eva-fill="#cacad1"
          ></i>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
