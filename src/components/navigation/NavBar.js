import React from 'react';

import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <Link to="/">Create Request</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );

};
