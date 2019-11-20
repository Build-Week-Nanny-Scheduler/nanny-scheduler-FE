import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const RequestContext = createContext();

export const RequestProvider = props => {
  const [requestList, setRequestList] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/requests/all")
      .then(res => {
        setRequestList(res.data);
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
