import React from "react";
import { useState, useEffect } from "react";
const useRestaurantMenu = (resData) => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredrestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0956952&lng=79.6287644&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

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
    setFilteredrestaurant(restaurants);
  };
  return { ListOfRestaurants, filteredRestaurant };
};

export default useRestaurantMenu;
