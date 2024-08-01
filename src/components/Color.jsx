import React from "react";

import { selectColors } from "../slices/colors.slice";

import { useDispatch, useSelector } from "react-redux";

const Color = ({ color }) => {
  const selectColor = () => {
    dispatch(selectColors(color));
  };

  const selectedColors = useSelector((state) => state.colors.selectedColors);

  const isSelected = selectedColors.includes(color);

  const dispatch = useDispatch();

  return (
    <li
      onClick={selectColor}
      style={{ backgroundColor: `#${color}` }}
      className={`h-8 w-8 border flex items-center justify-center rounded-full cursor-pointer`}
    >
      {isSelected && <span className="h-3 w-3 rounded-full bg-gray-200"></span>}
    </li>
  );
};

export default Color;
