import React from "react";
import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setMenuData(json);
      console.log(json);
    };

    fetchMenu();
  }, []);

  return menuData;
};

export default useRestaurantMenu;
