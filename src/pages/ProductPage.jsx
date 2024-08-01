// Components
import ProductDetail from "../components/ProductDetail";
import ProductImage from "../components/ProductImage";
import ProductFilter from "../components/ProductFilter";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  // Product Id
  const { id } = useParams();

  // Fetch Product
  const getProduct = async () => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-10">
      <ProductDetail product={product} />
      <ProductImage product={product} />
      <ProductFilter product={product} />
    </div>
  );
};

export default ProductPage;
