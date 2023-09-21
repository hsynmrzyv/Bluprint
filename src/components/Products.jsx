

// Images
import Cap from "../images/cap.png";
import Tshirt from "../images/t-shirt.png";

// Components
import Product from "./Product";

const Products = () => {
  return (
    <div className="col-span-9">
      <div className="mb-4">
        <h1 className="font-medium">Showing 2 results</h1>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <Product img={Cap} category="caps" price="13.99" title="Varsity Cap" />
        <Product
          img={Tshirt}
          category="T-shirts"
          price="24.99"
          title="T-shirt"
        />
      </div>
    </div>
  );
};

export default Products;
