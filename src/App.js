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
          <img src="https://eager-meninsky-104020.netlify.com/images/nannyLogo.png" />
          <p>Nanny in a Flash</p>
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

export default App;
