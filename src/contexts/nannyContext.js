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
<<<<<<< HEAD
=======
    <>
    {nannyList.map(item => (
        <>
        <div key={item.id} className="nannyCard">
          <h2>Nanny {item.firstName} {item.lastName}</h2>
          <div key={item.id} className="card2Grid">
            <div>Available:</div><div>{item.Available}</div>
            <div>Can Drive:</div><div>{item.canDrive}</div>
            <div>Location:</div><div>{item.city}, {item.state}</div>
            <div>Rate:</div><div>{item.rates}</div>
            <div>Services:</div><div>{item.services}</div>
          </div>
        </div>
        </>
      ))}



>>>>>>> ba21102cfb5aea7cbff8d2f5a31d675d3b13f3dd
    <NannyContext.Provider value={[nannyList, setNannyList]}>
      {props.children}
    </NannyContext.Provider>
  );
};
<<<<<<< HEAD
=======


/*
  Available: null
​   canDrive: null
​​  city: null
  ​​firstName: "Amberly"
​​id: 1
​​isNanny: null
​​  lastName: "Soren"
​​password: "$2a$10$7VBuCeGOUh6.SYut5AtPvOasz6KpEwQ3pDZU9vyenlfoU9bxTXi.a"
​​  rates: null
​​services: null
​​state: null
​​username: "Amberly"
*/
>>>>>>> ba21102cfb5aea7cbff8d2f5a31d675d3b13f3dd
