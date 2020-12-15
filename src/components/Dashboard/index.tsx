import React from "react";
import { dashboardRootStyles } from "./style";
import Templates from "./Templates";

function Dashboard() {
  return (
    <div className={dashboardRootStyles}>
      <Templates />
    </div>
  );
}

export default Dashboard;
