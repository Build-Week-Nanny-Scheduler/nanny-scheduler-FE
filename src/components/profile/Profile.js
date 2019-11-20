import React, { useContext, useState, useEffect } from "react";
import { UserInfoContext } from "../../contexts/userInfoContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const Profile = () => {
  const [userInfo, setUserInfo] = useContext(UserInfoContext);
  const [userData, setUserData] = useState(userInfo);

  const userIDDecoded = userInfo.id;

  useEffect(() => {
    setUserData(userInfo);
  }, [userInfo]);

  useEffect(() => {
    const userIDDecoded = userInfo.id;
    axiosWithAuth()
      .get(`/users/${userIDDecoded}`)
      .then(response => {
        console.log(response.data);
      })
      .catch();
  }, [userData]);

  return (
    <div>
      <h1>Profile</h1>
      <h3>{userData.username}</h3>
    </div>
  );
};

export default Profile;
