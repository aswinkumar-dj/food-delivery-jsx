import React from "react";
import { MENU_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuList = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <div className="menu-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.card?.info?.id || Math.random()}
          className="menu-item bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col"
        >
          <h3 className="item-name text-lg font-semibold mb-2">
            {item.card.info.name}
          </h3>

          <p className="item-description text-gray-600 text-sm mb-2 flex-1">
            {item.card.info.description || "No description available"}
          </p>

          <div className="item-details mt-2 flex items-center justify-between">
            <span className="item-price text-green-600 font-medium">
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>

            <button
              onClick={() => dispatch(addItem(item))}
              className="bg-purple-600/30 px-6 py-1 rounded-lg text-white hover:bg-purple-600 transition"
            >
              Add
            </button>

            {item.card.info.imageId && (
              <img
                src={MENU_IMG + item.card.info.imageId}
                alt={item.card.info.name}
                className="item-image w-16 h-16 object-cover rounded"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
