import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "axios";
import { Link } from "react-router-dom";

import { NannyContext } from "../../contexts/nannyContext";
import SearchForm from "../SearchForm";

const NannyList = () => {
  const [nannyList, setNannyList] = useContext(NannyContext);
  //NannyContext will set nannylist to whatever was returned from your axiosWithAuthCall
  return (
    <>
      <SearchForm state={nannyList} setState={setNannyList} slash="/users" />

      {nannyList.map(item => (
        <div key={item.id} className="nannyCard">
          <h2>
            Nanny {item.firstName} {item.lastName}
          </h2>
          <div key={item.id} className="card2Grid">
            <div>Available:</div>
            <div>{item.Available ? item.Available : "Ask Me"}</div>
            <div>Can Drive:</div>
            <div>{item.canDrive ? item.canDrive : "Ask Me"}</div>
            <div>Location:</div>
            <div>
              {item.city ? item.city : "Ask Me"},{" "}
              {item.state ? item.state : "Ask Me"}
            </div>
            <div>Rate:</div>
            <div>{item.rates ? item.rates : "Ask Me"}</div>
            <div>Services:</div>
            <div>{item.services ? item.services : "Ask Me"}</div>
          </div>
          <Link className="otherLink" to={`/${item.id}/requestnanny`}>
            <div className="invert">Send {item.firstName} a request</div>
          </Link>
          {/*}<button className="otherLink" to="#">
            Request
          </button>*/}
        </div>
      ))}
    </>
  );
};

export default NannyList;
