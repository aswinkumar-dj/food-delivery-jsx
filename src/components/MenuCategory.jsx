import React from "react";
import { useState } from "react";
import MenuList from "./MenuList.jsx";
const MenuCategory = (data) => {
  const [shownItem, setShownItem] = useState(false);
  const handleClick = () => {
    setShownItem(!shownItem);
  };

  return (
    <div>
      <div
        className="category my-6 py-4 text-sm bg-gray-100 hover:bg-gray-200 shadow-lg text-black font-bold p-2 rounded flex justify-between items-center"
        onClick={handleClick}
      >
        <span>
          {data.data.title} ({data.data.itemCards.length})
        </span>
        <p>⏷</p>
      </div>
      <div>
        {shownItem && (
          <MenuList
            key={data.data?.card?.info?.id}
            items={data.data.itemCards}
          />
        )}
      </div>
    </div>
  );
};
export default MenuCategory;
