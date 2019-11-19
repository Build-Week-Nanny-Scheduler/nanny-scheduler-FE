import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const NannyContext = createContext();
<<<<<<< HEAD
//this is context api; it's a state management tool that allows us to pass state freely between components without having to prop drill. everything wrapped in <NannyProvider> tags in the app.js will have access to the state held within this file
=======
>>>>>>> master

export const NannyProvider = props => {
  const [nannyList, setNannyList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
<<<<<<< HEAD
      .get("/users")
      .then(response => {
        setNannyList(response.data);
        console.log(nannyList);
      })
      .catch();
=======
      .get("https://nanny-api.herokuapp.com/api/users")
      .then(response => {
        console.log(response.data);
        setNannyList(response.data);
      })
      .catch(error => {
        console.log("error", error.message);
      });
>>>>>>> master
  }, []);

  console.log(nannyList);

  return (
    <NannyContext.Provider value={[nannyList, setNannyList]}>
      {props.children}
    </NannyContext.Provider>
  );
};
