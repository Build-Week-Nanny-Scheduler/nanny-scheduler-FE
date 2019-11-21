import React from "react";

const PendingRequests = props => {
  return (
    <div>
      {props.pendingRequests.length < 1 ? (
        <div className="pendingRequests">
          <h1>No Pending Requests</h1>
        </div>
      ) : (
        props.pendingRequests.map(item => (
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
    </div>
  );
};

export default PendingRequests;
