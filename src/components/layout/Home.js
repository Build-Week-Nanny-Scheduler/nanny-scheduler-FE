import React from "react";
import { Link } from "react-router-dom";

const Home = ({ history }) => {
  const token = localStorage.getItem("token");
  if (token) {
    history.push("/dashboard");
  }
  return (
    <div className="homePage">
      <Link to="/login">Log In</Link>
      <Link to="/register">Sign Up</Link>
      <h1>You need an account to use</h1>
      <p>Nanny in a Flash</p>
    </div>
  );
};

export default Home;
