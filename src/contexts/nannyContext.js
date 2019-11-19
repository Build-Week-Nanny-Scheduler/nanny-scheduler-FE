import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const NannyContext = createContext();

export const NannyProvider = props => {
  const [nannyList, setNannyList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://nanny-api.herokuapp.com/api/users")
      .then(response => {
        console.log(response.data);
        setNannyList(response.data);
      })
      .catch(error => {
        console.log("error", error.message);
      });
  }, []);

  console.log(nannyList);

  return (
    <NannyContext.Provider value={[nannyList, setNannyList]}>
      {props.children}
    </NannyContext.Provider>
  );
};
