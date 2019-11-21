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

    <div className="profilePage">
      <h1>Your Profile</h1>
    <div className="card2Grid">
      <div>Username: {userInfo.username}</div>
      <div>
        Name: {userInfo.firstName} {userInfo.lastName}
      </div>
      <div>

          Location: {userInfo.city}, {userInfo.state}

      </div>
      {userInfo.isNanny ? <NannyProfile userInfo={userInfo} /> : null}

    </div>
    </div>
  );
};

export default Profile;
