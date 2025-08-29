import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      <div className="restaurant-card">
        <img
          className="restaurant-logo"
          src="https://tse3.mm.bing.net/th/id/OIP.ZoD3AyqhENWSedWwk-7QjwHaE8?pid=Api&P=0&h=180"
          alt="restaurant-logo"
        />
        <h3>Restaurant Name</h3>
        <h4>American-cusine</h4>
        <h4>4.5 stars</h4>
        <h4>30 mins</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <input type="text" placeholder="Search for restaurants and food" />
      <div className="restaurant-list-container">
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
