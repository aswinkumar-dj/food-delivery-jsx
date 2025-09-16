import React from "react";
const Shimmer = () => {
  return (
    <div className="shimmer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-4 shadow animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="bg-gray-300 h-32 rounded-md mb-4"></div>

          {/* Text Line Placeholders */}
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};
export default Shimmer;
