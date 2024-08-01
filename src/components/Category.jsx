import React from "react";

// Hooks
import { useDispatch, useSelector } from "react-redux";

// Actions
import { selectCategory as selectCategoryAction } from "../slices/categories.slice";

const Category = (props) => {
  const dispatch = useDispatch();

  const selectedCategories = useSelector(
    (state) => state.categories.selectedCategories
  );

  const isSelected = selectedCategories.includes(props.children);

  const selectCategory = () => {
    dispatch(selectCategoryAction(props.children));
  };

  return (
    <li
      onClick={selectCategory}
      className={`cursor-pointer text-black ${isSelected && "font-black"} `}
    >
      {props.children.replaceAll("_", " & ")}
    </li>
  );
};

export default Category;
