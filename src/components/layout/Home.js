import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Nanny in a Flash</h1>
      <Link to="/login">Log In</Link>
      <Link to="/register">Sign Up</Link>
    </div>
  );
};

export default Home;
