import React, { useContext, useState, useEffect } from "react";
import { UserInfoContext } from "../../contexts/userInfoContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import NannyProfile from "./NannyProfile";

const Profile = () => {
  const [userInfo, setUserInfo] = useContext(UserInfoContext);
  const [flag, setFlag] = useState(false);

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}`)
      .then(
        response => {
          console.log(response.data);
          setUserInfo(response.data);
        },
        [flag]
      )
      .catch(err => {
        console.log(err);
      });
  }, [flag]);

  return (
    <div>
      <h1>Profile</h1>
      <h3>{userInfo.username}</h3>
      <p>
        {userInfo.firstName} {userInfo.lastName}
      </p>
      <p>
        <em>
          {userInfo.city}, {userInfo.state}
        </em>
      </p>
      {userInfo.isNanny ? <NannyProfile userInfo={userInfo} /> : null}
    </div>
  );
};

export default Profile;
