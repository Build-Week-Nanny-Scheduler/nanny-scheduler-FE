import React, { useState } from "react";
import { UserInfoContext } from "../../contexts/userInfoContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import YesNo from "../../components/layout/yesno";
import States from "../layout/States";
const ProfileEdit = props => {
  const { userInfo, setFlag } = props;
  const [editInfo, setEditInfo] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    services: userInfo.services,
    rates: userInfo.rates,
    Available: userInfo.Available,
    canDrive: userInfo.canDrive,
    city: userInfo.city,
    state: userInfo.state
  });

  const changeHandler = e => {
    setEditInfo({ ...editInfo, [e.target.name]: e.target.value });
    console.log(editInfo.canDrive);
  };

  const userID = localStorage.getItem("userID");

  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/users/${userID}`, editInfo)
      .then(() => {
        console.log("success");
        setFlag();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={editInfo.firstName}
          onChange={e => changeHandler(e)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={editInfo.lastName}
          onChange={e => changeHandler(e)}
        />
        {userInfo.isNanny ? (
          <>
            <input
              type="text"
              name="services"
              placeholder="Services Offered (ex: childcare, cleaning, cooking)"
              value={editInfo.services}
              onChange={e => changeHandler(e)}
            />

            <input
              type="text"
              name="rates"
              placeholder="Rate"
              value={editInfo.rates}
              onChange={e => changeHandler(e)}
            />

            <input
              type="text"
              name="Available"
              placeholder="Typical Availability"
              value={editInfo.Available}
              onChange={e => changeHandler(e)}
            />
            <p>Willing to drive children?</p>
            <select
              name="canDrive"
              value={editInfo.canDrive}
              onChange={e => changeHandler(e)}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </>
        ) : null}
        <input
          type="text"
          name="city"
          placeholder="City"
          value={editInfo.city}
          onChange={e => changeHandler(e)}
        />

        <select
          name="state"
          value={editInfo.state}
          onChange={e => changeHandler(e)}
        >
          <States />
        </select>
        <button type="submit">Save Edit</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
