import React, { useState, useEffect, useContext } from "react";
import RequestList from "../requests/viewRequests/RequestList";
import NannyList from "../nanny/NannyList";

import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { NannyProvider } from "../../contexts/nannyContext";
import { RequestProvider } from "../../contexts/requestContext";

const Dashboard = ({ history }) => {
  const [nannyStatus, setNannyStatus] = useState();

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}`)
      .then(response => {
        if (!response.data.isNanny) {
          setNannyStatus(false);
        } else {
          setNannyStatus(true);
        }
      })
      .catch();
  }, [userID]);

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
