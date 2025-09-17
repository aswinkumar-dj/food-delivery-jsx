import React, { useState, useEffect } from "react";
import { GIT_ICON, LINKEDIN_ICON } from "../utils/constants";

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

  if (!userData)
    return (
      <div className="profile-card animate-pulse bg-gray-200 rounded-2xl h-96 w-full max-w-md mx-auto mt-10"></div>
    );

  return (
    <div className="profile-card bg-white rounded-2xl shadow-lg hover:shadow-2xl hover: shadow-purple-400 transition transform hover:-translate-y-2 cursor-pointer p-8 max-w-md mx-auto flex flex-col items-center space-y-6 text-center mt-10">
      <img
        src={userData.avatar_url}
        alt="Profile Avatar"
        className="profile-avatar w-36 h-36 rounded-full object-cover border-3 border-purple-700"
      />
      <h1 className="profile-name text-2xl font-bold text-gray-900 mb-2">
        {userData.name || userData.login}
      </h1>
      <p className="profile-bio text-gray-700 text-base ">
        {userData.bio || "No bio available"}
      </p>
      <div className="social-icons flex space-x-6">
        <img
          src={LINKEDIN_ICON}
          alt="LinkeIn Icon"
          className="w-8 h-8 mt-0.5 flex hover:animate-pulse"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/aswinkumar-dj-5a50ba226",
              "_blank"
            );
          }}
        />
        <img
          src={GIT_ICON}
          alt="GitHub Icon"
          className="w-8 h-8 mt-0.5 flex hover:animate-pulse"
          onClick={() => {
            window.open(userData.html_url, "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default AboutProfile;
