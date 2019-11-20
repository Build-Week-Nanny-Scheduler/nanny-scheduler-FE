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
    <div className="profilePage">
      <h1>Your Profile</h1>
      <div className="card2Grid">
        <div>Username:</div><div>{userInfo.username}</div>
        <div>Name:</div><div>{userInfo.firstName} {userInfo.lastName}</div>
        <div>Location:</div><div>{userInfo.city}, {userInfo.state}</div>
        <div>Services offered:</div><div>{userInfo.services}</div>
      </div>
    </div>
  );
};

export default Profile;
