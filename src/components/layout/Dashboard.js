import React, { useState } from "react";
import RequestList from "../requests/viewRequests/RequestList";
import NannyList from "../nanny/NannyList";

const Dashboard = () => {
  const [nannyStatus, setNannyStatus] = useState(false);
  /*currently set to false, which will allow nannylist to display.  When trying to display RequestList, manually change to true for now until */
  const [requests, setRequests] = useState([]);
  const [nannies, setNannies] = useState([]);

  return (
    <div>
      <h1>Dashboard</h1>
      {nannyStatus ? (
        <RequestList requests={requests} />
      ) : (
        <NannyList nannies={nannies} />
      )}
    </div>
  );
};

export default Dashboard;
