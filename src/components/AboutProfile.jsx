import React from "react";
const AboutProfile = ({ name, status }) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <p>status:{status}</p>
    </div>
  );
};
export default AboutProfile;
