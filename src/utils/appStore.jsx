import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import cartReducer from "./cartSlice.jsx";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
