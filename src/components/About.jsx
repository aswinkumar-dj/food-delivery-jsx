import React from "react";
import AboutProfile from "./AboutProfile.jsx";

const About = () => {
  return (
    <div className="about-page max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">About</h1>
      <h2 className="text-lg text-gray-700">This is a Swiggy clone project</h2>
      <AboutProfile />
    </div>
  );
};

export default About;
