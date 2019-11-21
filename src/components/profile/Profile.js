import React, { useContext, useState, useEffect } from "react";
import { UserInfoContext } from "../../contexts/userInfoContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import NannyProfile from "./NannyProfile";
import ProfileEdit from "./ProfileEdit";
import SubmittedRequests from "../requests/viewRequests/SubmittedRequests";

const Profile = () => {
  const [userInfo, setUserInfo] = useContext(UserInfoContext);
  const [flag, setFlag] = useState(false);
  const [editing, setEditing] = useState(false);

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

  const changeFlag = () => {
    setFlag(!flag);
    setEditing(false);
  };

  return (
    <div className="profilePage">
      <h1>Your Profile</h1>
      {!editing ? (
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
      ) : (
        <ProfileEdit userInfo={userInfo} setFlag={changeFlag} />
      )}
      <button
        onClick={e => {
          e.preventDefault();
          setEditing(!editing);
        }}
      >
        {editing ? <>Cancel Edit</> : <>EditProfile</>}
      </button>
    </div>
  );
};

export default Profile;
