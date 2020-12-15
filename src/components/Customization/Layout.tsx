import React from "react";
import MobileLayout from "./MobileLayout";
import Options from "./Options";
import { layoutRootStyles } from "./style";

function Layout() {
  return (
    <div className={layoutRootStyles}>
      <MobileLayout />
      <Options />
    </div>
  );
}

export default Layout;
