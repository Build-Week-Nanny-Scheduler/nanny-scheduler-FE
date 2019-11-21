import React, { useState, useEffect, useContext } from "react";

import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const LoginFrom = ({ values, errors, touched, status }) => {
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
      <Link className="otherLink" to="/register">
        <div>Sign Up</div>
      </Link>
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
        const userID = res.data.user.id;
        localStorage.setItem("userID", userID);
        window.location.href = "/dashboard";
      })
      .catch(error => {
        console.log(error);
      });
  }
})(LoginFrom);
