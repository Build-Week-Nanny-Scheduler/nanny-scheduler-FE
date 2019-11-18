import React from "react";
import "./App.scss";

import { Route, Link } from 'react-router-dom';

import { RegisterFromFormik } from './components/auth/Register';
import {LoginFromFormik } from './components/auth/Login';

function App() {

  return (
    <div className="App">App

    {/*SCRATCH LINKS SO I CAN WORK ON AND SEE WHAT I AM BUILDING*/}
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>

    <Route path="/register" component={RegisterFromFormik} />
    <Route path="/login" component={LoginFromFormik} />

    </div>

  );
}

export default App;
