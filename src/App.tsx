import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
          <Route path="/customize/:id">
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
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Redirect to="/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
