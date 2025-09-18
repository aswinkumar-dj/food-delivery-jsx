import React from "react";
import { useParams } from "react-router-dom";
import { MENU_IMG } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  if (!menuData) return <p className="text-center mt-10">Loading menu...</p>;

  const { name, cuisines, avgRating } =
    menuData?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    (menuData?.data?.cards || [])
      .flatMap((card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards || [])
      .find((c) => Array.isArray(c?.card?.card?.itemCards))?.card?.card
      ?.itemCards || [];

  const itemCategories =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(itemCategories);

  if (itemCards.length === 0) {
    return (
      <div className="menu p-4 text-center">
        <h1 className="text-2xl font-semibold mb-2">
          {name || "Unknown Restaurant"}
        </h1>
        <p className="text-gray-600 mb-2">
          {cuisines?.join(", ") || "No cuisines available"}
        </p>
        <h5 className="text-green-600 font-medium mb-4">
          {avgRating || "N/A"} <span>★</span>
        </h5>
        <p className="text-gray-500">No menu items available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="menu p-4">
      <div className="mb-6">
        <h1 className="res-name text-2xl font-bold mb-1">
          {name || "Unknown Restaurant"}
        </h1>
        <p className="res-cuisine text-gray-600 mb-2">
          {cuisines?.join(", ") || "No cuisines available"}
        </p>
        <h5 className="res-rating text-green-600 font-medium">
          {avgRating || "N/A"} <span>★</span> Rating
        </h5>
      </div>

      {itemCategories.map((category) => (
        <MenuCategory key={Math.random()} data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
