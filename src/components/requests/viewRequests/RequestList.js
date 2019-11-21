import React, { useState, useEffect, useContext } from "react";

import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import { Link } from "react-router-dom";

import { RequestContext } from "../../../contexts/requestContext";

const RequestList = () => {
  const [requestList, setRequestList] = useContext(RequestContext);
  const [loadingText, setLoadingText] = useState("Loading...");
  const [pendingRequests, setPendingRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (requestList && requestList.length > 0) {
      const pending = requestList.filter(request => !request.accepted);
      const accepted = requestList.filter(request => request.accepted);
      setPendingRequests(pending);
      setAcceptedRequests(accepted);
    }
  }, [requestList]);

  useEffect(() => {
    axiosWithAuth()
      .get("/requests/all")
      .then(res => {
        const requests = res.data;
        const id = localStorage.getItem("userID");
        const filteredRequests = requests.filter(
          request => request.nannyUserID == id
        );
        setRequestList(filteredRequests);
      })
      .catch();
  }, [flag]);

  setTimeout(() => {
    setLoadingText("No Requests");
  }, 1000);

  const toPending = item => {
    const id = item.id;
    axiosWithAuth()
      .put(`/requests/${id}`, { ...item, accepted: false })
      .then(res => {
        console.log(res);
        setFlag(!flag);
      });
  };

  const acceptRequest = item => {
    const id = item.id;
    axiosWithAuth()
      .put(`/requests/${id}`, { ...item, accepted: true })
      .then(res => {
        console.log(res);
        setFlag(!flag);
      });
  };

  const cancelRequest = item => {
    const id = item.id;
    axiosWithAuth()
      .delete(`/requests/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const getNannyName = id => {
    axiosWithAuth()
      .get(`/users/${id}`)
      .then(res => {
        return res.data.firstName;
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
            <button onClick={() => acceptRequest(item)}>Accept</button>
          </div>
        ))
      )}
      {!requestList || requestList.length < 1 ? null : acceptedRequests.length <
        1 ? (
        <h1>No Accepted Requests</h1>
      ) : (
        acceptedRequests.map(item => (
          <div key={item} className="nannyCard">
            <h2>You have scheduled this job with {item.name}</h2>
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
