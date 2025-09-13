import React, { useState, useEffect } from "react";

const AboutProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        "https://api.github.com/users/aswinkumar-dj"
      );
      const data = await response.json();
      setUserData(data);
    }

    fetchUser();
  }, []);

  if (!userData) return <div className="profile-card"></div>;

  return (
    <div
      className="profile-card"
      onClick={() => {
        window.open(userData.html_url, "_blank");
      }}
    >
      <img
        src={userData.avatar_url}
        alt="Profile Avatar"
        className="profile-avatar"
      />
      <h1 className="profile-name">{userData.name || userData.login}</h1>
      <p className="profile-bio">{userData.bio || "No bio available"}</p>
    </div>
  );
};

export default AboutProfile;
