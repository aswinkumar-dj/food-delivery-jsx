import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MENU_IMG } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + (item.card?.info?.price || 0),
    0
  );

  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>
        {cartItems.length > 0 && (
          <button
            className="bg-red-500 text-white rounded-lg px-5 py-2 font-medium shadow hover:bg-red-600 transition"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty!</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center space-x-5">
                <img
                  className="w-20 h-20 object-cover rounded-xl shadow-sm"
                  src={MENU_IMG + item.card?.info?.imageId}
                  alt={item.card?.info?.name}
                />
                <p className="text-lg font-semibold text-gray-800">
                  {item.card?.info?.name}
                </p>
              </div>

              <span className="text-lg font-bold text-green-600">
                ₹{(item.card?.info?.price || 0) / 100}
              </span>
            </div>
          ))}

          <div className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-700">Total</h2>
            <span className="text-2xl font-bold text-blue-600">
              ₹{total / 100}
            </span>
          </div>

          <div className="text-center">
            <button className="mt-6 w-full md:w-auto px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
