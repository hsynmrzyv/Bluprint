// Icons
import Chevron from "../icons/chevron";

// Hooks
import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../redux/slices/categorySlice";

// Components
import Category from "./Category";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  ul: "text-sm font-medium flex flex-col gap-5 pb-4",
  icon: "duration-200 w-4 h-4",
};

const fakeCategories = [
  {
    id: 1,
    name: "Caps",
  },
  { id: 2, name: "Hoodies" },
  { id: 3, name: "T-Shirts" },
  { id: 4, name: "Jeans" },
];

const Categories = () => {
  const [showCategories, setShowCategories] = useState(false);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const setCategory = (category) => {
    dispatch(categoryActions.addCategory(category));
  };

  return (
    <div className="border-b">
      <button onClick={toggleCategories} className={styles.btn}>
        <span className="font-bold">Category</span>
        <div>
          <Chevron
            className={`${styles.icon} ${!showCategories && "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {showCategories && (
        <ul className={styles.ul}>
          {fakeCategories.map((cat) => (
            <Category
              click={() => setCategory(cat.name)}
              key={cat.id}
              selected={category.includes(cat.name)}
            >
              {cat.name}
            </Category>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
