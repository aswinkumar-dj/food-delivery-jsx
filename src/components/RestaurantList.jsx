import React from "react";
import { CDN_URL } from "../utils/constants.js";
const RestaurantList = (props) => {
  const { resData } = props;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt={resData.info.name}
      />
      <div className="restaurant-info">
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <div className="restaurant-rating">
          {resData.info.avgRating} <span>★</span>
        </div>
        <div className="restaurant-id">
          {resData.info.sla.deliveryTime} Minutes
        </div>
      </div>
    </div>
  );
};
export default RestaurantList;
