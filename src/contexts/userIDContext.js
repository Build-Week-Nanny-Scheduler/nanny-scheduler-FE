import React, { useState, useEffect, createContext } from "react";

export const UserIDContext = createContext();
//this is context api; it's a state management tool that allows us to pass state freely between components without having to prop drill. everything wrapped in <NannyProvider> tags in the app.js will have access to the state held within this file

export const UserIDProvider = props => {
  const [userID, setUserID] = useState();

  return (
    <UserIDContext.Provider value={[userID, setUserID]}>
      {props.children}
    </UserIDContext.Provider>
  );
};
