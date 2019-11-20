import React, { useContext, useState, useEffect } from "react";
import { UserInfoContext } from "../../contexts/userInfoContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const Profile = () => {
  const [userInfo, setUserInfo] = useContext(UserInfoContext);
  const [flag, setFlag] = useState(false);

  const userIDDecoded = localStorage.getItem("userID");
  console.log(userIDDecoded);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userIDDecoded}`)
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
      <p>Services offered: {userInfo.services}</p>
    </div>
  );
};

export default Profile;
