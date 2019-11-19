import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "axios";
import { NannyContext } from "../../contexts/nannyContext";

const NannyList = () => {
  const [nannyList, setNannyList] = useContext(NannyContext);
  //NannyContext will set nannylist to whatever was returned from your axiosWithAuthCall
  useEffect(() => {
    console.log(nannyList);
  }, [nannyList]);
  return <div></div>;
};

export default NannyList;
