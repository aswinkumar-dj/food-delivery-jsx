import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

import RestaurantList from "./RestaurantList.jsx";
import Shimmer from "./Shimmer.jsx";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://pastebin.com/raw/0QcdEDBL");

    const json = await data.json();
    console.log(json);
    console.log(json.data.cards);

    const cards = json?.data?.cards || [];

    const restaurantsCard = cards.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    console.log(restaurants);

    setListOfRestaurants(restaurants);
  };

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurant"
          />
          <button className="search-btn">Search</button>
        </div>
        <button
          className="filter-btn"
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
        {ListOfRestaurants.map((res) => {
          return <RestaurantList key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
