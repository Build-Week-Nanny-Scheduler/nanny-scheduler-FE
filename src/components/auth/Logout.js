import React from "react";

const Logout = ({ history }) => {
  localStorage.clear();
  history.push("/");
  return <div>Logging out...</div>;
};

export default Logout;
