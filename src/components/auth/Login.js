import React, { useState, useEffect } from "react";

import {withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginFrom = ( { values, errors, touched } ) => {

  const [loginForm, setLoginForm] = useState([]);

  return (
    <Form>
      <Field type="text" name="username" placeholder="Your Username" />
      {touched.username && errors.username && (
        <p>{errors.username}</p>
      )}

      <Field type="password" name="password" placeholder="Your Password" />
      {touched.password && errors.password && (
        <p>{errors.password}</p>
      )}
    </Form>
  );
};

export const LoginFromFormik = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  }),

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
