import React, { useContext } from "react";
import { UserInfoContext } from "../../contexts/userInfoContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import YesNo from "../../components/layout/yesno";
import States from "../layout/States";
const ProfileEdit = () => {
  const userInfo = useContext(UserInfoContext);
  console.log(userInfo);

  return (
    <div>
      <form>
        <input type="text" name="firstName" placeholder="First Name" />

        <input type="text" name="LastName" placeholder="Last Name" />

        {userInfo.isNanny ? (
          <>
            <input
              type="text"
              name="services"
              placeholder="Services Offered (ex: childcare, cleaning, cooking)"
            />

            <input type="text" name="rates" placeholder="Rate" />

            <input
              type="text"
              name="Available"
              placeholder="Typical Availability"
            />
            <p>Willing to drive children?</p>
            <select name="canDrive">
              <YesNo />
            </select>
          </>
        ) : null}
        <input type="text" name="city" placeholder="City" />

        <select name="state">
          <States />
        </select>
      </form>
    </div>
  );
};

export default ProfileEdit;
