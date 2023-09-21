import { createSlice } from "@reduxjs/toolkit";

const categoryReducer = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      const category = action.payload;

      if (state.includes(category)) {
        const index = state.findIndex((c) => c === category);
        state.splice(index, 1);
      } else {
        state.push(category);
      }
    },
  },
});

export const categoryActions = categoryReducer.actions;

export default categoryReducer.reducer;
