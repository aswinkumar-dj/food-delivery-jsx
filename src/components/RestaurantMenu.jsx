import React from "react";
import { useParams } from "react-router-dom";
import { MENU_IMG } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);

  if (!menuData) return <p>Loading menu...</p>;

  const { name, cuisines, avgRating } =
    menuData?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    (menuData?.data?.cards || [])
      .flatMap((card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards || [])
      .find((c) => Array.isArray(c?.card?.card?.itemCards))?.card?.card
      ?.itemCards || [];

  if (itemCards.length === 0) {
    return (
      <div className="menu">
        <h1>{name || "Unknown Restaurant"}</h1>
        <p>{cuisines?.join(", ") || "No cuisines available"}</p>
        <h5>
          {avgRating || "N/A"} <span>★</span>
        </h5>
        <p>No menu items available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="menu">
      <h1 className="res-name">{name || "Unknown Restaurant"}</h1>
      <p className="res-cuisine">
        {cuisines?.join(", ") || "No cuisines available"}
      </p>
      <h5 className="res-rating">
        {avgRating || "N/A"} <span>★</span> Rating
      </h5>

      <ul className="menu-items">
        {itemCards.map((item) => {
          const info = item.card.info;
          return (
            <li key={info.id} className="menu-item">
              <div className="menu-item-text">
                <h3 className="item-name">{info.name}</h3>
                <p className="item-price">
                  Price: ₹{info.price ? info.price / 100 : "N/A"}
                </p>
                <p className="item-description">
                  {info.description || "No description available."}
                </p>
              </div>
              <img
                className="menu-img"
                src={MENU_IMG + info.imageId}
                alt={info.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
