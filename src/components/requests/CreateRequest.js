import React, { useState, useEffect } from "react";

import { withFormik, Form, Field } from "formik";
import { Link, Redirect } from "react-router-dom";
import * as Yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const CreateRequestFrom = ({ history }) => {
  const [nannyInfo, setNannyInfo] = useState({});
  const [flag, setFlag] = useState(false);

  const [credentials, setCredentials] = useState({
    nannyUserID: nannyInfo.id,
    accepted: false,
    name: "",
    city: "",
    state: "",
    numberOfKids: "",
    kidsAges: "",
    timeNeeded: ""
  });

  const userID = localStorage.getItem("userID");

  const link = window.location.href;
  let nannyUserID = link.match(/\/\b\d+\/\b/g);
  nannyUserID = nannyUserID[0].split("/")[1];

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${nannyUserID}`)
      .then(response => {
        setNannyInfo(response.data);
        setCredentials({ ...credentials, nannyUserID: response.data.id });
      })
      .catch(err => {
        console.log(err);
      });
  }, [flag]);

  const changeHandler = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/requests", credentials)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="createRequestPage">
      <h1>Schedule {nannyInfo.firstName}</h1>
      <form onSubmit={e => submitHandler(e)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={credentials.name}
          onChange={e => changeHandler(e)}
          required
        />
        <input
          type="text"
          name="numberOfKids"
          placeholder="Number of Kids"
          value={credentials.numberOfKids}
          onChange={e => changeHandler(e)}
          required
        />
        <input
          type="text"
          name="kidsAges"
          placeholder="Kids' Ages"
          value={credentials.kidsAges}
          onChange={e => changeHandler(e)}
          required
        />
        <input
          type="text"
          name="timeNeeded"
          placeholder="Time Needed"
          value={credentials.timeNeeded}
          onChange={e => changeHandler(e)}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="city"
          value={credentials.city}
          onChange={e => changeHandler(e)}
          required
        />

        <select
          name="state"
          value={credentials.state}
          onChange={e => changeHandler(e)}
          required
        >
          <option>Please Choose Your State</option>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
        <div
          onClick={
            (() => setTimeout(() => (window.location.href = "/submitted")), 500)
          }
        >
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateRequestFrom;
/*
data needed for creating a request:
city
state
numberOfKids
kidsAge
timeNeeded
*/
