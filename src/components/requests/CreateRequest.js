import React, { useState, useEffect } from "react";

import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const CreateRequestFrom = ({ history }) => {
  const [requestForm, setRequestForm] = useState([]);
  const [nannyInfo, setNannyInfo] = useState({});
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState();

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

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/users/${userID}`)
  //     .then(response => {
  //       setName(`${response.data.firstName} ${response.data.lastName}`);
  //     });
  // }, []);

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
  return (
    <div className="createRequestPage">
      <h1>Schedule {nannyInfo.firstName}</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={credentials.name}
        onChange={e => changeHandler(e)}
      />
      <input
        type="text"
        name="numberOfKids"
        placeholder="Number of Kids"
        value={credentials.numberOfKids}
        onChange={e => changeHandler(e)}
      />
      <input
        type="text"
        name="kidsAges"
        placeholder="Kids' Ages"
        value={credentials.kidsAges}
        onChange={e => changeHandler(e)}
      />
      <input
        type="text"
        name="timeNeeded"
        placeholder="Time Needed"
        value={credentials.timeNeeded}
        onChange={e => changeHandler(e)}
      />
      <input
        type="text"
        name="city"
        placeholder="city"
        value={credentials.city}
        onChange={e => changeHandler(e)}
      />
      <form>
        <select
          name="state"
          value={credentials.state}
          onChange={e => changeHandler(e)}
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export const CreateRequest = withFormik({
  mapPropsToValues({
    city,
    state,
    numberOfKids,
    kidsAges,
    timeNeeded,
    nannyUserID,
    accepted,
    name
  }) {
    return {
      accepted: accepted || false,
      nannyUserID: nannyUserID || "",
      city: city || "",
      state: state || "",
      numberOfKids: numberOfKids || "",
      kidsAges: kidsAges || "",
      timeNeeded: timeNeeded || "",
      name: name || ""
    };
  },
  validationSchema: Yup.object().shape({
    accepted: Yup.bool().required(),
    nannyUserID: Yup.number().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    numberOfKids: Yup.string().required(),
    kidsAges: Yup.string().required(),
    timeNeeded: Yup.string().required(),
    name: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    console.log("submit");
    axiosWithAuth()
      .post("/requests", values)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
})(CreateRequestFrom);

/*
data needed for creating a request:
city
state
numberOfKids
kidsAge
timeNeeded
*/
