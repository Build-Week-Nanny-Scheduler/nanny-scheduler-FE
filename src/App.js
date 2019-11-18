import React, { useState } from "react";
import "./App.css";
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
  );
}

//NOTE: Dashboard will become privateroute once login is functional
export default App;
