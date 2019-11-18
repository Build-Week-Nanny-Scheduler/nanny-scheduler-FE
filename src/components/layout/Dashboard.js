import React, { useState } from "react";
import RequestList from "../requests/viewRequests/RequestList";

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const [nannyList, setNannyList] = useState([]);
  const [nannyStatus, setNannyStatus] = useState(false);
  return (
    <div>
      {!nannyStatus ? (
        <RequestList requests={requests} />
      ) : (
        <NannyList nannies={nannies} />
      )}
    </div>
  );
};

export default Dashboard;
