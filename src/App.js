import React from "react";
import "./App.css";

import { Route, Link } from 'react-router-dom';

import { RegisterFromFormik } from './components/Register';

function App() {

  return (
    <div className="App">App

    {/*SCRATCH LINKS SO I CAN WORK ON AND SEE WHAT I AM BUILDING*/}
    <Link to="/register">Register</Link>

    <Route path="/register" component={RegisterFromFormik} />

    </div>

  );
}

export default App;
