import React, { useState, useEffect } from "react";
import RequestList from "../requests/viewRequests/RequestList";
import NannyList from "../nanny/NannyList";

const Dashboard = () => {
  const [nannyStatus, setNannyStatus] = useState(false);

  return (
    <div>
      <h1>Dashboard</h1>
      {nannyStatus ? <RequestList /> : <NannyList />}
    </div>
  );
};

export default Dashboard;
