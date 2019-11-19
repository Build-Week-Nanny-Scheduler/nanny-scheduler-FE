import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const RequestContext = createContext();

export const RequestProvider = props => {
  const [requestList, setRequestList] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("https://nanny-api.herokuapp.com/api/requests/all")
      .then(response => {
        console.log(response.data);
        setRequestList(response.data);
      })
      .catch(error => {
        console.log("error", error.message);
      });
  }, []);

  return (
    <>
      <RequestContext.Provider value={[requestList, setRequestList]}>
        {props.children}
      </RequestContext.Provider>
    </>
  );
};
