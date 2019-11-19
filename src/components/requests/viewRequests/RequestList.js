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
      <h1>Current Listings</h1>
    </div>
  );
};

export default RequestList;
