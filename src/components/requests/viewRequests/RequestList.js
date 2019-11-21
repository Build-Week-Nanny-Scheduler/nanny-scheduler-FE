import React, { useState, useEffect, useContext } from "react";

import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import { Link } from "react-router-dom";

import { RequestContext } from "../../../contexts/requestContext";

const RequestList = () => {
  const [requestList, setRequestList] = useContext(RequestContext);
  const [loadingText, setLoadingText] = useState("Loading...");
  const [pendingRequests, setPendingRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);

  useEffect(() => {
    if (requestList && requestList.length > 0) {
      const pending = requestList.filter(request => !request.accepted);
      const accepted = requestList.filter(request => request.accepted);
      setPendingRequests(pending);
      setAcceptedRequests(accepted);
    }
  }, [requestList]);

  setTimeout(() => {
    setLoadingText("No Requests");
  }, 1000);

  const toPending = item => {
    const id = item.id;
    axiosWithAuth()
      .put(`/requests/${id}`, { ...item, accepted: false })
      .then(res => {
        console.log(res);
      });
  };

  return (
    <div>
      {!requestList || requestList.length < 1 ? (
        <h1>{loadingText}</h1>
      ) : pendingRequests.length < 1 ? (
        <div className="pendingRequests">
          <h1>No Pending Requests</h1>
        </div>
      ) : (
        pendingRequests.map(item => (
          <div key={item} className="nannyCard">
            <h2>{item.name} wants to hire you!</h2>
            <div key={item.id} className="card2Grid">
              <div>Number Of Kids:</div>
              <div>{item.numberOfKids ? item.numberOfKids : "Ask Me"}</div>
              <div>Kids Ages:</div>
              <div>{item.kidsAges ? item.kidsAges : "Ask Me"}</div>
              <div>Location:</div>
              <div>
                {item.city ? item.city : "Ask Me"},{" "}
                {item.state ? item.state : "Ask Me"}
              </div>
              <div>Time Needed:</div>
              <div>{item.timeNeeded ? item.timeNeeded : "Ask Me"}</div>
            </div>
          </div>
        ))
      )}
      {!requestList || requestList.length < 1 ? null : acceptedRequests.length <
        1 ? (
        <h1>No Accepted Requests</h1>
      ) : (
        acceptedRequests.map(item => (
          <div key={item} className="nannyCard">
            <h2>{item.name} is scheduled for this request</h2>
            <div key={item.id} className="card2Grid">
              <div>Number Of Kids:</div>
              <div>{item.numberOfKids ? item.numberOfKids : "Ask Me"}</div>
              <div>Kids Ages:</div>
              <div>{item.kidsAges ? item.kidsAges : "Ask Me"}</div>
              <div>Location:</div>
              <div>
                {item.city ? item.city : "Ask Me"},{" "}
                {item.state ? item.state : "Ask Me"}
              </div>
              <div>Time Needed:</div>
              <div>{item.timeNeeded ? item.timeNeeded : "Ask Me"}</div>
            </div>
            <button onClick={() => toPending(item)}>Move to Pending</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RequestList;
