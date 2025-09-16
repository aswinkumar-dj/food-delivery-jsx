import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">Oops!!!</h1>
      <h2 className="text-2xl text-gray-700 mb-2">Something went wrong!</h2>
      <h3 className="text-xl text-gray-500">
        {err?.status || "Error"}: {err?.statusText || "Unknown Error"}
      </h3>
      <p className="mt-4 text-gray-600 text-center max-w-md">
        Please check the URL or go back to the homepage.
      </p>
      <button
        className="mt-6 px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-500 transition"
        onClick={() => window.location.replace("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Error;
