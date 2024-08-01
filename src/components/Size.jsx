import React from "react";

// Redux hooks
import { useDispatch, useSelector } from "react-redux";

// Actions
import { selectSize } from "../slices/size.slice";

const Size = ({ children }) => {
  const dispatch = useDispatch();
  const selectedSizes = useSelector((state) => state.size.selectedSizes);

  const selectSizeHandler = () => {
    dispatch(selectSize(children));
  };

  const isSelected = selectedSizes.includes(children);

  return (
    <li
      onClick={selectSizeHandler}
      className={`font-bold uppercase w-9 h-9 flex items-center justify-center cursor-pointer rounded-lg ${
        isSelected ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {children}
    </li>
  );
};

export default Size;
