import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";

import * as Yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";
import history from "../../history";

const RegisterFrom = ({ values, errors, touched, status, history }) => {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    status && setCredentials(credentials => [...credentials, status]);
  }, [status]);

  return (
    <div>
      <Form>
        <Field type="text" name="firstName" placeholder="First Name" />
        {touched.firstName && <p>{errors.firstName}</p>}

        <Field type="text" name="lastName" placeholder="Last Name" />
        {touched.lastName && <p>{errors.lastName}</p>}

        <Field type="text" name="username" placeholder="Your Username" />
        {touched.username && <p>{errors.username}</p>}

        <Field type="password" name="password" placeholder="Your Password" />
        {touched.password && <p>{errors.password}</p>}

        <Field type="text" name="city" placeholder="Your City" />
        {touched.city && <p>{errors.city}</p>}

        <Field as="select" name="state">
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
        {touched.state && <p>{errors.state}</p>}
        <h3>Are you a Nanny?</h3>
        <Field as="select" name="isNanny">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </Field>
        {touched.isNanny && <p>{errors.isNanny}</p>}

        <button type="submit">Submit</button>
      </Form>

      <p>Already have an account?</p>
      <Link className="otherLink" to="/login">
        <div>Log In</div>
      </Link>
    </div>
  );
};

export const RegisterFromFormik = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    username,
    password,
    city,
    state,
    isNanny
  }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      password: password || "",
      city: city || "",
      state: state || "",
      isNanny: isNanny || false
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    isNanny: Yup.bool().required()
  }),
  handleSubmit(values, { setStatus }) {
    axiosWithAuth()
      .post("/auth/register", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        const userID = res.data.id;
        localStorage.setItem("userID", userID);
        window.location.href = "/dashboard";
      })
      .catch(error => {
        console.log(error);
      });
  }
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
