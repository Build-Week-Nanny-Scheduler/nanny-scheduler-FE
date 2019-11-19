import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import history from "./history";

ReactDOM.render(
  <Router>
    <App history={history} />
  </Router>,
  document.getElementById("root")
);
