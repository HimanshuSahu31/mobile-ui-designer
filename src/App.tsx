import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customization from "./components/Customization";
import Dashboard from "./components/Dashboard";
import Documentation from "./components/Documentation";
import Logout from "./components/Logout";
import SideBar from "./components/SideBar";
import Support from "./components/Support";
import { appRootStyles } from "./style";

function App() {
  return (
    <div className={appRootStyles}>
      <Router>
        <SideBar />
        <Switch>
          <Route path="/customize">
            <Customization />
          </Route>
          <Route path="/docs">
            <Documentation />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
