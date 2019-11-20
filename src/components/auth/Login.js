import React, { useState, useEffect, useContext } from "react";

import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useInput } from "../../hooks/useInput";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { UserTokenContext } from "../../contexts/userTokenContext";

const LoginFrom = ({ values, errors, touched, status, history }) => {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    status && setCredentials(credentials => [...credentials, status]);
  }, [status]);

  return (
    <>
      <Form>
        <Field type="text" name="username" placeholder="Your Username" />
        {touched.username && <p>{errors.username}</p>}

        <Field type="password" name="password" placeholder="Your Password" />
        {touched.password && <p>{errors.password}</p>}
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
  }),
  handleSubmit(values, { setStatus }) {
    axiosWithAuth()
      .post("/auth/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        const token = res.data.token;
        let base64Url = res.data.token.split(".")[1];
        let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        let jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map(function(c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );
        const userID = jsonPayload.split(",")[0].split(":")[1];
        console.log(userID);
        localStorage.setItem("userID", userID);
      })
      .then(res => {
        window.location.href = "/dashboard";
      })
      .catch(error => {
        console.log(error);
      });
  }
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
