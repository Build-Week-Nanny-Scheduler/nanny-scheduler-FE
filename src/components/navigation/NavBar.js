import React from 'react';

import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="pageMenu">
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/">Create Request</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <div className="topBanor">
        <img src="https://eager-meninsky-104020.netlify.com/images/nannyLogo.png" />
        <p>Nanny in a Flash</p>
      </div>
    </div>
  );

};
