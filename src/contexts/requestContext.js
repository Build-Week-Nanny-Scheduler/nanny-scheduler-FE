import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const RequestContext = createContext();

export const RequestProvider = props => {
  const [requestList, setRequestList] = useState();

  // const checkRequestMatch = request => {
  //   const userID = localStorage.getItem("userID");
  //   return userID === request.nannyUserID;
  // };

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
  }, []);

  return (
    <>
      <RequestContext.Provider value={[requestList, setRequestList]}>
        {props.children}
      </RequestContext.Provider>
    </>
  );
};
