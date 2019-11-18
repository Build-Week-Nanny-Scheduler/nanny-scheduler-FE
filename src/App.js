import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import { RegisterFromFormik } from "./components/auth/Register";
import { LoginFromFormik } from "./components/auth/Login";
import Home from "./components/layout/Home";

function App() {
  return (
    <div className="App">
      App
      <Route exact path="/" component={Home} />
      <Route path="/register" component={RegisterFromFormik} />
      <Route path="/login" component={LoginFromFormik} />
    </div>
  );
}

export default App;
