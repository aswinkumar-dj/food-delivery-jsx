import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

import RestaurantList from "./RestaurantList.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantList.jsx";

const Body = () => {
  const { resData } = useParams();
  const { ListOfRestaurants, filteredRestaurant } = useRestaurantMenu(resData);
  const [searchText, setSearchText] = useState("");

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-5">
      <div className="filter">
        <div className="search ">
          <input
            type="text"
            className="search-box border-2 border-purple-700 rounded-lg"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredrestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn border-2 border-purple-700 rounded-lg p-1 bg-purple-700 text-white font-semibold hover:bg-purple-500"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restaurant-list-container">
        {filteredRestaurant.map((res) => {
          return (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              <RestaurantList key={res.info.id} resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
