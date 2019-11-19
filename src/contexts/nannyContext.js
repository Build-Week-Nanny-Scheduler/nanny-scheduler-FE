import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const NannyContext = createContext();

export const NannyProvider = props => {
  const [nannyList, setNannyList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then(res => {
        setNannyList(res.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);
  return (
    <div>
      <NannyContext.Provider value={[nannyList, setNannyList]}>
        {props.children}
      </NannyContext.Provider>
    </div>
  );
};
