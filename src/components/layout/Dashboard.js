import React, { useState, useEffect, useContext } from "react";
import RequestList from "../requests/viewRequests/RequestList";
import NannyList from "../nanny/NannyList";
import { NannyProvider } from "../../contexts/nannyContext";
import { RequestProvider } from "../../contexts/requestContext";
import { UserTokenContext } from "../../contexts/userTokenContext";
import { UserIDContext } from "../../contexts/userIDContext";
import { Redirect } from "react-router-dom";

const Dashboard = ({ history }) => {
  const [nannyStatus, setNannyStatus] = useState(true);
  const [decodedToken, setDecodedToken] = useContext(UserTokenContext);
  const [userID, setUserID] = useContext(UserIDContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    setNannyStatus(false);
  }, [userID]);

  if (decodedToken === undefined) {
    window.location.href = "/";
  } else {
    setUserID(decodedToken.split(",")[0].split(":")[1]);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {nannyStatus ? (
        <RequestProvider>
          <RequestList />
        </RequestProvider>
      ) : (
        <NannyProvider>
          <NannyList />
        </NannyProvider>
      )}
    </div>
  );
};

export default Dashboard;
