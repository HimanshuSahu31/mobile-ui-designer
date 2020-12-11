import React from "react";
import Layout from "./Layout";
import Options from "./Options";
import { customizationRootStyles } from "./style";

function Customization() {
  return (
    <div className={customizationRootStyles}>
      <Layout />
      <Options />
    </div>
  );
}

export default Customization;
