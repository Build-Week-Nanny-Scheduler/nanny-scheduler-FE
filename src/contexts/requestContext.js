import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const RequestContext = createContext();

export const RequestProvider = props => {
  const [requestList, setRequestList] = useState();

  useEffect(() => {
    axiosWithAuth()
<<<<<<< HEAD
      .get("/requests/all")
      .then(async res => {
        await setRequestList(res.data);
        console.log(requestList);
      })
      .catch();
=======
      .get("https://nanny-api.herokuapp.com/api/requests/all")
      .then(response => {
        console.log(response.data);
        setRequestList(response.data);
      })
      .catch(error => {
        console.log("error", error.message);
      });
>>>>>>> master
  }, []);

  return (
    <>
      <RequestContext.Provider value={[requestList, setRequestList]}>
        {props.children}
      </RequestContext.Provider>
    </>
  );
};
