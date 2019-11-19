import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const RequestContext = createContext();

export const RequestProvider = props => {
  const [requestList, setRequestList] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/requests/all")
      .then(async res => {
        await setRequestList(res.data);
        console.log(requestList);
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
