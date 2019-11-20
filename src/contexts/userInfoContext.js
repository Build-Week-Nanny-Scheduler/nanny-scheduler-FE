import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const UserInfoContext = createContext();
//this is context api; it's a state management tool that allows us to pass state freely between components without having to prop drill. everything wrapped in <NannyProvider> tags in the app.js will have access to the state held within this file

export const UserInfoProvider = props => {
  const [userInfo, setUserInfo] = useState({});

  const userID = localStorage.getItem("userID");
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}`)
      .then(response => {
        console.log(response.data);
      })
      .catch();
  }, [userInfo]);

  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
      {props.children}
    </UserInfoContext.Provider>
  );
};
