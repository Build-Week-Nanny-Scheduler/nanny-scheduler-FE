import React from "react";

const Logout = ({ history }) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userID");
  history.push("/");
  return <div>Logging out...</div>;
};

export default Logout;
