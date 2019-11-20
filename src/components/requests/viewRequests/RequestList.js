import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "axios";
import { RequestContext } from "../../../contexts/requestContext";

const RequestList = () => {
  // const [requestList, setRequestList] = useContext(RequestContext);

  const [requestList, setRequestList] = useState([
    {
      name: "Mary Jenkins",
      city: "San Francisco",
      state: "California",
      numberOfKids: "3",
      kidsAges: "1, 3, 5",
      timeNeeded: "5:30pm - 8pm monday, wednesday"
    },
    {
      name: "Bob Barker",
      city: "San Francisco",
      state: "California",
      numberOfKids: "3",
      kidsAges: "2, 5, 8",
      timeNeeded: "4:30pm - 8pm monday - friday"
    },
    {
      name: "Chu Lor",
      city: "Chicago",
      state: "Illinois",
      numberOfKids: "1",
      kidsAges: "3",
      timeNeeded: "5:30pm - 9pm monday - friday"
    },
    {
      name: "Robert Robertson",
      city: "Chicago",
      state: "Illinois",
      numberOfKids: "5",
      kidsAges: "3, 5, 7, 8, 9",
      timeNeeded: "2:30pm - 9pm monday - friday"
    }
  ]);

  return (
    <div>
      {requestList.map(item => (
        <div key={item} className="nannyCard">
          <h2>
            {item.name} needs a Nanny
          </h2>
          <div key={item.id} className="card2Grid">
            <div>Number Of Kids:</div><div>{item.numberOfKids ? item.numberOfKids : "Ask Me"}</div>
            <div>Kids Ages:</div><div>{item.kidsAges ? item.kidsAges : "Ask Me"}</div>
            <div>Location:</div><div>{item.city ? item.city : "Ask Me"}, {item.state ? item.state : "Ask Me"}</div>
            <div>Time Needed:</div><div>{item.timeNeeded ? item.timeNeeded : "Ask Me"}</div>
          </div>
          <Link className="otherLink" to="#"><div>Claim</div></Link>
        </div>
      ))}
    </div>
  );
};

export default RequestList;
