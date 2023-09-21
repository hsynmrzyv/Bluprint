// Router
import { Link } from "react-router-dom";

const Product = ({ img, title, price, category }) => {
  return (
    <div className="col-span-4 cursor-pointer">
      <Link to={`/products/${title}`}>
        <div className="mb-4 border border-neutral-200 rounded-lg">
          <img src={img} alt="" className="w-full" />
        </div>
        <div className="flex justify-between font-bold">
          <div>
            <h1 className="text-xl ">{title}</h1>
            <p className=" text-neutral-500">{category}</p>
          </div>
          <h1 className="text-2xl">
            <span>{price} </span>
            AZN
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Product;
