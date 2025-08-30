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

const thirdImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/200px-Dominos_pizza_logo.svg.png";

const ResList = [
  {
    id: 1,
    name: "Burger King",
    cuisine: "American",
    rating: 4.2,
    deliveryTime: "30 mins",
    image: thirdImage,
  },
  {
    id: 2,
    name: "Pizza Hut",
    cuisine: "Italian",
    rating: 4.0,
    deliveryTime: "35 mins",
    image: thirdImage,
  },
  {
    id: 3,
    name: "Domino's Pizza",
    cuisine: "Italian",
    rating: 4.1,
    deliveryTime: "32 mins",
    image: thirdImage,
  },
  {
    id: 4,
    name: "KFC",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "28 mins",
    image: thirdImage,
  },
  {
    id: 5,
    name: "Subway",
    cuisine: "Healthy",
    rating: 4.0,
    deliveryTime: "25 mins",
    image: thirdImage,
  },
  {
    id: 6,
    name: "McDonald's",
    cuisine: "American",
    rating: 4.2,
    deliveryTime: "27 mins",
    image: thirdImage,
  },
  {
    id: 7,
    name: "Biryani Blues",
    cuisine: "Indian",
    rating: 4.4,
    deliveryTime: "40 mins",
    image: thirdImage,
  },
  {
    id: 8,
    name: "Haldiram's",
    cuisine: "Indian",
    rating: 4.3,
    deliveryTime: "33 mins",
    image: thirdImage,
  },
  {
    id: 9,
    name: "Faasos",
    cuisine: "Wraps & Rolls",
    rating: 4.1,
    deliveryTime: "29 mins",
    image: thirdImage,
  },
  {
    id: 10,
    name: "Behrouz Biryani",
    cuisine: "Biryani",
    rating: 4.5,
    deliveryTime: "38 mins",
    image: thirdImage,
  },
];

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
const Body = () => {
  return (
    <div className="body">
      <input type="text" placeholder="Search for restaurants and food" />
      <div className="restaurant-list-container">
        {ResList.map((restaurants) => {
          return <RestaurantList key={restaurants.id} resData={restaurants} />;
        })}
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
