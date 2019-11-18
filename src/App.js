
import React from "react";
import "./App.scss";
import { Route, Link } from "react-router-dom";

import { RegisterFromFormik } from "./components/auth/Register";
import { LoginFromFormik } from "./components/auth/Login";
import Home from "./components/layout/Home";
import { CreateRequest } from "./components/requests/CreateRequest";
import { Navigation } from "./components/navigation/NavBar";

function App() {
  return (
    <div className="App">
      <Link to="/menu">
        <div className="topBanor">
          Nanny in a Flash
        </div>
      </Link>
      App
      <Route exact path="/menu" component={Navigation} />
      <Route exact path="/" component={Home} />
      <Route path="/" component={CreateRequest} />
      <Route path="/register" component={RegisterFromFormik} />
      <Route path="/login" component={LoginFromFormik} />
    </div>
  );
}

//NOTE: Dashboard will become privateroute once login is functional
export default App;
