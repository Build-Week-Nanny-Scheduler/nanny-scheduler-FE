import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const NannyContext = createContext();
//this is context api; it's a state management tool that allows us to pass state freely between components without having to prop drill. everything wrapped in <NannyProvider> tags in the app.js will have access to the state held within this file.

export const NannyProvider = props => {
  const [nannyList, setNannyList] = useState([]);

  useEffect(() => {
    /*axiosWithAuth is an axios hook that allows us to set a base route,
    in this case https://nanny-api.herokuapp.com/api,
    as well as save a JSON web token to the user's local storage
    so it can tell the backend that the user is logged in.
    You'll use this all the time in unit 3.
    All you have to do for your request is add the last portion of the api endpoint
    inside your get request. I.E. ('/users').*/
    axiosWithAuth()
      .get('https://nanny-api.herokuapp.com/api/users')
      .then(response => {
        console.log(response.data)
        setNannyList(response.data)
      })
      .catch( error => {
        console.log("error", error.message)
      })
  }, []);

  console.log(nannyList);

  return (
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



    <NannyContext.Provider value={[nannyList, setNannyList]}>
      {props.children}
    </NannyContext.Provider>



    </>
  );
};


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
