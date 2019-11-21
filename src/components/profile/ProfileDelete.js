import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const ProfileDelete = () => {
  const deleteProfile = e => {
    e.preventDefault();
    const id = localStorage.getItem("userID");
    axiosWithAuth()
      .delete(`/users/${id}`)
      .then(() => {
        localStorage.removeItem("userID");
        localStorage.removeItem("token");
        window.location.href = "/";
      });
  };

  return (
    <div>
      <h1>Are you sure you want to delete your profile?</h1>

      <button onClick={e => deleteProfile(e)}>Confirm</button>
    </div>
  );
};

export default ProfileDelete;
