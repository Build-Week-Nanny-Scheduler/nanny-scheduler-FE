import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { decode } from "punycode";

export const UserTokenContext = createContext();
//this is context api; it's a state management tool that allows us to pass state freely between components without having to prop drill. everything wrapped in <NannyProvider> tags in the app.js will have access to the state held within this file

export const UserTokenProvider = props => {
  const [decodedToken, setDecodedToken] = useState();

  useEffect(() => {
    decodedToken
      ? console.log("User ID: ", decodedToken.split(",")[0].split(":")[1])
      : console.log("no token");
  }, [decodedToken]);

  return (
    <UserTokenContext.Provider value={[decodedToken, setDecodedToken]}>
      {props.children}
    </UserTokenContext.Provider>
  );
};
