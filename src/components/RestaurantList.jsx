import React from "react";
const RestaurantList = (props) => {
  const { resData } = props;

  return (
    <div className="restaurant-list">
      <div className="restaurant-card">
        <img
          className="restaurant-logo"
          src={resData.image}
          alt="restaurant-logo"
        />
        <h3>{resData.name}</h3>
        <h4>{resData.cuisine}</h4>
        <h4>{resData.rating} Star rating</h4>
        <h5>{resData.deliveryTime}</h5>
      </div>
    </div>
  );
};
export default RestaurantList;
