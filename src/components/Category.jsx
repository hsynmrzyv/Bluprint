import React from "react";

const Category = ({ children, click, selected }) => {
  return (
    <li
      onClick={click}
      className={`cursor-pointer  text-black  ${selected && "font-black"}`}
    >
      {children}
    </li>
  );
};

export default Category;
