import React, { useState, useEffect, useContext } from "react";

import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useInput } from "../../hooks/useInput";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { UserTokenContext } from "../../contexts/userTokenContext";

const LoginFrom = ({ values, errors, touched, history }) => {
  const [username, setUsername, handleUsername] = useInput();
  const [password, setPassword, handlePassword] = useInput();
  const [decodedToken, setDecodedToken] = useContext(UserTokenContext);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", { username, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        handleToken(res.data.token);
      })
      .then(res => {
        history.push("/dashboard");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleToken = token => {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    setDecodedToken(jsonPayload);
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
      <Link className="otherLink" to="/login"><div>Sign Up</div></Link>
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
