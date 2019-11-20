import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import { useInput } from "../../hooks/useInput";
import * as Yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";
import history from "../../history";
import { UserTokenContext } from "../../contexts/userTokenContext";

const RegisterFrom = ({ values, errors, touched, history }) => {
  const [decodedToken, setDecodedToken] = useContext(UserTokenContext);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    city: "",
    state: "",
    services: "",
    rates: "",
    Available: "",
    canDrive: false,
    isNanny: false
  });

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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userInfo);
    axiosWithAuth()
      .post("/auth/register", userInfo)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        handleToken(res.data.token);
      })
      .then(res => {
        history.push("/dashboard");
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  return (
    <div className="registerPage">
      <Form onSubmit={e => handleSubmit(e)}>
        <Field
          type="text"
          name="firstName"
          placeholder="First Name"
          value={userInfo.firstName}
          onChange={e =>
            setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
        />
        {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}

        <Field
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userInfo.lastName}
          onChange={e =>
            setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
        />
        {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}

        <Field
          type="text"
          name="username"
          placeholder="Your Username"
          value={userInfo.username}
          onChange={e =>
            setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
        />
        {touched.username && errors.username && <p>{errors.username}</p>}

        <Field
          type="password"
          name="password"
          placeholder="Your Password"
          value={userInfo.password}
          onChange={e =>
            setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
        />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <Field
          type="text"
          name="city"
          placeholder="Your City"
          value={userInfo.city}
          onChange={e =>
            setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
        />
        {touched.city && errors.city && <p>{errors.city}</p>}

        <Field
          as="select"
          name="state"
          value={userInfo.state}
          onChange={e =>
            setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
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

        <button>Sign Up</button>
      </Form>

      <p>Already have an account?</p>
      <Link className="otherLink" to="/login"><div>Log In</div></Link>
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
