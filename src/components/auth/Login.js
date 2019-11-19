import React, { useState, useEffect } from "react";

import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useInput } from "../../hooks/useInput";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
<<<<<<< HEAD

const LoginFrom = ({ values, errors, touched, props }) => {
  const [username, setUsername, handleUsername] = useInput();
  const [password, setPassword, handlePassword] = useInput();

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/auth/login", { username, password })
      .then(res => {
        console.log("test");
        localStorage.setItem("token", res.data.token);
        console.log("logged in");
      })
      .then((window.location.href = "/dashboard"))
=======

const LoginFrom = ({ values, errors, touched }) => {
  const [username, setUsername, handleUsername] = useInput();
  const [password, setPassword, handlePassword] = useInput();

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", { username, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard";
      })
>>>>>>> master
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={e => handleSubmit(e)}>
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
          onChange={e => handlePassword(e.target.value)}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit</button>
      </Form>
      <p>Don't Have an Account?</p>
      <Link to="/register">Sign Up</Link>
    </>
  );
};

export const LoginFromFormik = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  })
})(LoginFrom);

/*
to clear things up with regards to the data, we need:
-firstName
-lastName
-username
-password
-city
-state
*/
