import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import { useInput } from "../../hooks/useInput";
import * as Yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";
const RegisterFrom = ({ values, errors, touched }, props) => {
  const [registerForm, setRegisterForm] = useState([]);
  const [firstName, setFirstName, handleFirstName] = useInput("");
  const [lastName, setLastName, handleLastName] = useInput("");
  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassWord] = useInput("");
  const [city, setCity, handleCity] = useInput("");
  const [state, setState, handleState] = useInput("");

  const handleSubmit = e => {
    console.log(firstName);
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", [
        { firstName, lastName, username, password, city, state }
      ])
      .then(res => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard";
      });
  };
  return (
    <div>
      <Form onSubmit={e => handleSubmit(e)}>
        <Field
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={e => handleFirstName(e.target.value)}
        />
        {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}

        <Field
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={e => handleLastName(e.target.value)}
        />
        {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}

        <Field
          type="text"
          name="username"
          placeholder="Your Username"
          value={username}
          onChange={e => handleUsername(e.target.value)}
        />
        {touched.username && errors.username && <p>{errors.username}</p>}

        <Field
          type="password"
          name="password"
          placeholder="Your Password"
          value={password}
          onChange={e => handlePassWord(e.target.value)}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <Field
          type="text"
          name="city"
          placeholder="Your City"
          value={city}
          onChange={e => handleCity(e.target.value)}
        />
        {touched.city && errors.city && <p>{errors.city}</p>}

        <Field
          as="select"
          name="state"
          value={state}
          onChange={e => handleState(e.target.value)}
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
        </Field>
        {touched.state && errors.state && <p>{errors.state}</p>}

        <button type="submit">Submit</button>
      </Form>

      <p>Already have an account?</p>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export const RegisterFromFormik = withFormik({
  mapPropsToValues({ firstName, lastName, username, password, city, state }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      password: password || "",
      city: city || "",
      state: state || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required()
  })
})(RegisterFrom);

/*
to clear things up with regards to the data, we need:
-firstName
-lastName
-username
-password
-city
-state
*/
