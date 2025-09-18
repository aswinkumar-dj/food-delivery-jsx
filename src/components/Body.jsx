import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import RestaurantList, { withPromotedlabel } from "./RestaurantList.jsx";
import Shimmer from "./Shimmer.jsx";
import useRestaurantMenu from "../utils/useRestaurantList.jsx";

const Body = () => {
  const { resData } = useParams();
  const { ListOfRestaurants, filteredRestaurant } = useRestaurantMenu(resData);
  const RestaurantPromoted = withPromotedlabel(RestaurantList);
  const [searchText, setSearchText] = useState("");
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);

  useEffect(() => {
    setDisplayedRestaurants(filteredRestaurant);
  }, [filteredRestaurant]);

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-5 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex space-x-2 w-full md:w-auto">
          <input
            type="text"
            className="flex-grow w-100 p-2 border-2 border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-500 transition"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setDisplayedRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-500 transition"
            onClick={() => {
              const topRatedList = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setDisplayedRestaurants(topRatedList);
            }}
          >
            Top Rated
          </button>

          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400 transition"
            onClick={() => {
              setDisplayedRestaurants(ListOfRestaurants); // Reset full list
              setSearchText("");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="restaurant-list-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedRestaurants.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            {res.info.isOpen ? (
              <RestaurantPromoted resData={res} />
            ) : (
              <RestaurantList resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
