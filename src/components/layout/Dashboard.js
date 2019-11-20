import React, { useState, useEffect, useContext } from "react";
import RequestList from "../requests/viewRequests/RequestList";
import NannyList from "../nanny/NannyList";
import { UserInfoContext } from "../../contexts/userInfoContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { NannyProvider } from "../../contexts/nannyContext";
import { RequestProvider } from "../../contexts/requestContext";

const Dashboard = ({ history }) => {
  const [nannyStatus, setNannyStatus] = useState(false);
  const [userInfo, setUserInfo] = useContext(UserInfoContext);

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}`)
      .then(response => {
        console.log(response.data);
      })
      .catch();
  }, [userID]);

  return (
    <div className="dashboardPage">
      <h1>Dashboard</h1>
      <div className="cardBox">
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
    </div>
  );
};

export default Dashboard;
