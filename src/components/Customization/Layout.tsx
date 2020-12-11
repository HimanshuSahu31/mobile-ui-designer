import React from "react";
import MobileLayout from "./MobileLayout";
import { layoutRootStyles } from "./style";

function Layout() {
  return (
    <div className={layoutRootStyles}>
      <MobileLayout />
    </div>
  );
}

export default Layout;
