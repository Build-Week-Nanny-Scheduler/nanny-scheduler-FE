import React, { useState, useEffect, createContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export const NannyContext = createContext();

export const nannyContext = () => {
  const [nannyList, setNannyList] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get()
      .then()
      .catch();
  });
  return (
    <NannyContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </NannyContext.Provider>
  );
};
