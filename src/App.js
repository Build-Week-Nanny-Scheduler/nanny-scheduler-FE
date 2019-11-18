import React, { useState } from "react";
import "./App.css";
<<<<<<< HEAD
import { Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/layout/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {!loggedIn ? (
        <Route exact path="/" component={Login} />
      ) : (
        <Route exact path="/" component={Register} />
      )}
      <Route path="/dashboard" component={Dashboard} />
    </>
=======
import { Route, Link } from "react-router-dom";

import { RegisterFromFormik } from "./components/auth/Register";
import { LoginFromFormik } from "./components/auth/Login";
import Home from "./components/layout/Home";
import CreateRequest from "./components/requests/CreateRequest";

function App() {
  return (
    <div className="App">
      App
      <Route exact path="/" component={Home} />
      <Route path="/" component={CreateRequest} />
      <Route path="/register" component={RegisterFromFormik} />
      <Route path="/login" component={LoginFromFormik} />
    </div>
>>>>>>> origin/master
  );
}

//NOTE: Dashboard will become privateroute once login is functional
export default App;
