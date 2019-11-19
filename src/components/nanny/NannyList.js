import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "axios";
import { NannyContext } from "../../contexts/nannyContext";

const NannyList = () => {
  const [nannyList, setNannyList] = useContext(NannyContext);
  //NannyContext will set nannylist to whatever was returned from your axiosWithAuthCall
<<<<<<< HEAD
  useEffect(() => {
    console.log(nannyList);
  }, [nannyList]);
  return <div></div>;
=======
  return (
    <div>
      {nannyList.map(item => (
        <div key={item.id} className="nannyCard">
          <h2>
            Nanny {item.firstName} {item.lastName}
          </h2>
          <ul key={item.id}>
            <li>Available: {item.Available ? item.Available : "Ask Me"}</li>
            <li>
              Willing to Drive Children:
              {item.canDrive ? item.canDrive : "Ask Me"}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
>>>>>>> master
};

export default NannyList;
