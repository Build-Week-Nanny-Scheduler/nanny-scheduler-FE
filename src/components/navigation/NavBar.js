import React from "react";

import { Link } from "react-router-dom";

export const Navigation = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="pageMenu">
      <nav className="navBar">
        <Link to="/https://eager-meninsky-104020.netlify.com/">Home</Link>
        <Link to="/">Dashboard</Link>
        <Link to="/createrequest">Create Request</Link>
        {token ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/register">Sign Up</Link>
        )}
        {token ? (
          <Link to="/logout">Log Out</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <div className="topBanor">
        <img src="https://eager-meninsky-104020.netlify.com/images/nannyLogo.png" />
        <p>Nanny in a Flash</p>
      </div>
    </div>
  );
};
