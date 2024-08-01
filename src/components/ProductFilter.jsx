// Components
import Size from "./Size";

// UUID
import { v4 as uuidv4 } from "uuid";

// Axios
import axios from "axios";

// Images
import Cart from "../images/cart.png";

// Hooks
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { addToCart } from "../slices/cart.slice";

const ProductFilter = (props) => {
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const sizes = useSelector((state) => state.size.sizes);
  const dispatch = useDispatch();

  const userId = JSON.parse(localStorage.getItem("userId"));

  // Size
  const selectSizeHandler = (size) => {
    setSelectedSize(size);
  };

  // Counter
  const incrementHandler = () => {
    if (count < 100) {
      setCount(+count + 1);
    }
  };

  const decrementHandler = () => {
    if (count > 1) {
      setCount(+count - 1);
    }
  };

  const changeCount = (e) => {
    setCount(e.target.value);
  };

  // Add To Cart
  const addToCartHandler = async () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    if (count < 1 || count > 100) {
      alert("You are not allowed to buy invalid amount of product");
      return;
    }

    const selectedProduct = {
      quantity: +count,
      size: selectedSize,
      product: props.product,
      id: uuidv4(),
      userId: userId,
    };

    const { data } = await axios.post(
      "http://localhost:3000/carts",
      selectedProduct
    );

    console.log(data);

    dispatch(addToCart(selectedProduct));
  };

  return (
    <div className="col-span-4">
      {/* Color */}
      <div className="mb-10">
        <h3 className="text-xs font-bold mb-3">Product color</h3>
        <div
          style={{
            backgroundColor: `#${props.product.color}`,
          }}
          className="h-8 w-8 border rounded-full"
        ></div>
      </div>
      {/* Size */}
      <div className="mb-28">
        <h3 className="text-xs font-bold mb-3">Choose your size</h3>
        <ul className="flex flex-wrap gap-2">
          {sizes.map((size) => {
            const isAvailable = props.product.size?.includes(
              size.toUpperCase()
            );
            return (
              <li
                key={size}
                onClick={() => isAvailable && selectSizeHandler(size)}
                className={`font-bold uppercase w-9 h-9 flex items-center justify-center cursor-pointer rounded-lg ${
                  !isAvailable && "opacity-50 bg-red-500"
                } ${
                  size === selectedSize
                    ? "bg-gray-900 text-white"
                    : " bg-gray-200 text-black"
                }`}
              >
                {size}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Counter */}
      <div className="flex items-center gap-6 font-black mb-8">
        <button onClick={decrementHandler} className="text-3xl">
          -
        </button>
        <input
          onChange={changeCount}
          type="number"
          value={count}
          min="1"
          max="100"
          className="border h-14 text-2xl text-center rounded-md"
        />
        <button onClick={incrementHandler} className="text-3xl">
          +
        </button>
      </div>
      {/* Add To Cart */}
      <button
        onClick={addToCartHandler}
        className="w-full  flex rounded-lg font-black uppercase duration-200 justify-between items-center bg-[#1d1d1d] hover:bg-[#0075ff] text-white text-xl px-8 py-6"
      >
        Add To Cart
        <span>
          <img src={Cart} alt="cart" />
        </span>
      </button>
    </div>
  );
};

export default ProductFilter;
