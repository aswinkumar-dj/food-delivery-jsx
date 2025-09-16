import React from "react";
import { CDN_URL } from "../utils/constants.js";

const RestaurantList = (props) => {
  const { resData } = props;

  return (
    <div className="restaurant-card bg-white rounded-xl shadow-md hover:shadow-xl hover: shadow-purple-400 transition transform hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col">
      <img
        className="restaurant-logo w-full h-48 object-cover"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt={resData.info.name}
      />
      <div className="restaurant-info p-4 flex flex-col space-y-2 flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {resData.info.name}
        </h3>
        <h4 className="text-sm text-gray-600 truncate">
          {resData.info.cuisines.join(", ")}
        </h4>
        <div className="flex items-center justify-between mt-auto">
          <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
            {resData.info.avgRating} ★
          </span>
          <span className="text-gray-500 text-sm">
            {resData.info.sla.deliveryTime} mins
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
