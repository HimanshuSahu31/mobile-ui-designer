import React from "react";
import { useParams } from "react-router-dom";
import MobileLayout from "./MobileLayout";
import { layoutRootStyles } from "./style";

function Layout() {
  // @ts-ignore
  let { id } = useParams();
  return (
    <div className={layoutRootStyles}>
      <MobileLayout id={id} />
    </div>
  );
}

export default Layout;
