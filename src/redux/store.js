import { configureStore } from "@reduxjs/toolkit";

// Slices
import categorySlice from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
  },
});

export default store;
