import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-purple-700 shadow-lg p-5 m-1 ">
      <div className="flex">
        <img className="w-30" src={LOGO_URL} alt="logo" />
        <p>{onlineStatus ? "✅" : "❗"}</p>
      </div>

      <div className="flex items-center">
        <ul className="flex  space-x-10 font-bold text-white ">
          <li className="hover:text-purple-500 ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-purple-500 ">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-purple-500 ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-purple-500 ">Cart ({cartItem.length})</li>
          <button
            className="bg-white text-purple-700 px-3 py-1 rounded-lg font-semibold hover:bg-gray-200"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
