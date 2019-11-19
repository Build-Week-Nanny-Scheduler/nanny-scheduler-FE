import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "axios";
import { RequestContext } from "../../../contexts/requestContext";

const RequestList = () => {
  const [requestList, setRequestList] = useContext(RequestContext);
  //NannyContext will set nannylist to whatever was returned from your axiosWithAuthCall
  console.log(requestList);
  return <div></div>;
};

export default RequestList;
