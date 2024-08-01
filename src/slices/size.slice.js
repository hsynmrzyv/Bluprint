import { createSlice } from "@reduxjs/toolkit";

const sizeSlice = createSlice({
  name: "size",
  initialState: {
    sizes: ["xs", "s", "m", "l", "xl"],
    selectedSizes: [],
  },
  reducers: {
    selectSize: (state, action) => {
      const size = action.payload;

      const isSelected = state.selectedSizes.includes(size);

      if (!isSelected) {
        state.selectedSizes.push(size);
      } else {
        state.selectedSizes = state.selectedSizes.filter(
          (selectedSize) => selectedSize !== size
        );
      }
    },
  },
});

export const { selectSize } = sizeSlice.actions;

export default sizeSlice;
