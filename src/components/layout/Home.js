import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Nanny in a Flash</h1>
      <Link to="/register">Log In</Link>
      <Link to="/login">Sign Up</Link>
    </div>
  );
};

export default Home;
