import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "axios";
import { NannyContext } from "../../contexts/nannyContext";

const NannyList = () => {
  const [nannyList, setNannyList] = useContext(NannyContext);
  //NannyContext will set nannylist to whatever was returned from your axiosWithAuthCall
  return (
    <div>
      {nannyList.map(item => (
        <div key={item.id} className="nannyCard">
          <h2>
            Nanny {item.firstName} {item.lastName}
          </h2>
          <div key={item.id} className="card2Grid">
            <div>Available:</div><div>{item.Available ? item.Available : "Ask Me"}</div>
            <div>Can Drive:</div><div>{item.canDrive ? item.canDrive : "Ask Me"}</div>
            <div>Location:</div><div>{item.city ? item.city : "Ask Me"}, {item.state ? item.state : "Ask Me"}</div>
            <div>Rate:</div><div>{item.rates ? item.rates : "Ask Me"}</div>
            <div>Services:</div><div>{item.services ? item.services : "Ask Me"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NannyList;
