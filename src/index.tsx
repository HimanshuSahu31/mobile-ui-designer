import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as API from "./data/api";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

API.initialize();
