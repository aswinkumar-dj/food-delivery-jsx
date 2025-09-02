import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { ResList } from "../utils/mockData.js";
import RestaurantList from "./RestaurantList.jsx";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(ResList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ResList.filter((res) => res.rating > 4);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restaurant-list-container">
        {ListOfRestaurants.map((restaurants) => {
          return <RestaurantList key={restaurants.id} resData={restaurants} />;
        })}
      </div>
    </div>
  );
};

export default Body;
