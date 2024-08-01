import { configureStore } from "@reduxjs/toolkit";

// Slices
import categoriesSlice from "./slices/categories.slice";
import colorSlice from "./slices/colors.slice";
import sizeSlice from "./slices/size.slice";
import cartSlice from "./slices/cart.slice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    colors: colorSlice.reducer,
    size: sizeSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
