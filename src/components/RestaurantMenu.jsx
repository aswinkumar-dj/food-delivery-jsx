import React from "react";
import { useParams } from "react-router-dom";
import { MENU_IMG } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

      <ul className="menu-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {itemCards.map((item) => {
          const info = item.card.info;
          return (
            <li
              key={info.id}
              className="menu-item bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-purple-400 transition transform hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col"
            >
              <img
                className="menu-img w-full h-40 object-cover"
                src={MENU_IMG + info.imageId}
                alt={info.name}
              />
              <div className="menu-item-text p-4 flex flex-col flex-grow space-y-2">
                <h3 className="item-name text-lg font-semibold text-gray-900">
                  {info.name}
                </h3>
                <p className="item-price text-gray-700">
                  Price: ₹{info.price ? info.price / 100 : "N/A"}
                </p>
                <p className="item-description text-gray-600 text-sm">
                  {info.description || "No description available."}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
