import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import { RegisterFromFormik } from "./components/auth/Register";
import { LoginFromFormik } from "./components/auth/Login";
import Home from "./components/layout/Home";
import CreateRequest from "./components/requests/CreateRequest";
import Dashboard from "./components/layout/Dashboard";

function App() {
  return (
    <div className="App">
      App
      <Route exact path="/" component={Home} />
      <Route path="/" component={CreateRequest} />
      <Route path="/register" component={RegisterFromFormik} />
      <Route path="/login" component={LoginFromFormik} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

//create request is temporarily located in the requests
export default App;
