import React from "react";

const NannyProfile = props => {
  const { services, rates, Available, canDrive } = props.userInfo;
  return (
    <>
      <p>Services offered: {services}</p>
      <p>Rate: {rates}</p>
      <p>Availability: {Available}</p>
      <p>Willing to Drive Children: {canDrive ? "Yes" : "No"}</p>
    </>
  );
};

export default NannyProfile;
