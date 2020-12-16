import React, { useEffect } from "react";
import {
  bottomNavLinksStyles,
  iconStyles,
  navigationLinkStyles,
  selectedNavLink,
  sidebarRootStyles,
  topNavLinksStyles,
} from "./style";
import { Link, useLocation } from "react-router-dom";
import * as eva from "eva-icons";
import c from "classnames";

function SideBar() {
  useEffect(() => {
    eva.replace();
  }, []);

  let location = useLocation();

  return (
    <div className={sidebarRootStyles}>
      <div className={topNavLinksStyles}>
        <Link
          to="/"
          className={c(navigationLinkStyles, selectedNavLink, {
            selectedNavLink: location.pathname === "/dashboard" ? true : false,
          })}
        >
          <i
            className={iconStyles}
            data-eva="grid-outline"
            data-eva-fill="#cacad1"
          ></i>
          <span>Dashboard</span>
        </Link>
        <Link
          to="/customize/new"
          className={c(navigationLinkStyles, selectedNavLink, {
            selectedNavLink: location.pathname === "/customize" ? true : false,
          })}
        >
          <i
            className={iconStyles}
            data-eva="options-outline"
            data-eva-fill="#484c67"
          ></i>
          <span>Customization</span>
        </Link>
        <Link
          to="/docs"
          className={c(navigationLinkStyles, selectedNavLink, {
            selectedNavLink: location.pathname === "/docs" ? true : false,
          })}
        >
          <i
            className={iconStyles}
            data-eva="folder-outline"
            data-eva-fill="#cacad1"
          ></i>
          <span>Documentation</span>
        </Link>
        <Link
          to="/support"
          className={c(navigationLinkStyles, selectedNavLink, {
            selectedNavLink: location.pathname === "/support" ? true : false,
          })}
        >
          <i
            className={iconStyles}
            data-eva="message-circle-outline"
            data-eva-fill="#cacad1"
          ></i>
          <span>Support</span>
        </Link>
      </div>
      <div className={bottomNavLinksStyles}>
        <Link
          to="/logout"
          className={c(navigationLinkStyles, selectedNavLink, {
            selectedNavLink: location.pathname === "/logout" ? true : false,
          })}
        >
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
