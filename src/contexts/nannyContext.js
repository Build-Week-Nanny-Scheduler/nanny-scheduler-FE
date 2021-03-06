import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Dashboard from "../components/layout/Dashboard";

export const NannyContext = createContext();
//this is context api; it's a state management tool that allows us to pass state freely between components without having to prop drill. everything wrapped in <NannyProvider> tags in the app.js will have access to the state held within this file

export const NannyProvider = props => {
  const [nannyList, setNannyList] = useState([]);

  const checkNanny = user => {
    return user.isNanny === true;
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then(response => {
        const nannies = response.data.filter(checkNanny);
        console.log(response.data.forEach(nanny => console.log(nanny.city)));
        setNannyList(nannies);
        console.log(nannyList);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(nannyList);

  return (
    <NannyContext.Provider value={[nannyList, setNannyList]}>
      {props.children}
    </NannyContext.Provider>
  );
};
