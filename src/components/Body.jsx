import React from "react";
import ReactDOM from "react-dom/client";
import { ResList } from "../utils/mockData.js";
import RestaurantList from "./RestaurantList.jsx";
const Body = () => {
  return (
    <div className="body">
      <input type="text" placeholder="Search for restaurants and food" />
      <div className="restaurant-list-container">
        {ResList.map((restaurants) => {
          return <RestaurantList key={restaurants.id} resData={restaurants} />;
        })}
      </div>
    </div>
  );
};

export default Body;
