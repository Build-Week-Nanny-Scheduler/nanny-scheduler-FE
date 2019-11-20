import React, { useState, useEffect, useContext } from "react";
import RequestList from "../requests/viewRequests/RequestList";
import NannyList from "../nanny/NannyList";
import { NannyProvider } from "../../contexts/nannyContext";
import { RequestProvider } from "../../contexts/requestContext";
import { UserTokenContext } from "../../contexts/userTokenContext";
import { UserIDContext } from "../../contexts/userIDContext";

const Dashboard = ({ history }) => {
  const [nannyStatus, setNannyStatus] = useState(false);
  const [decodedToken, setDecodedToken] = useContext(UserTokenContext);
  const [userID, setUserID] = useContext(UserIDContext);

  const token = localStorage.getItem("token");

  if (decodedToken === undefined) {
    localStorage.clear();
    console.log("yass");
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
