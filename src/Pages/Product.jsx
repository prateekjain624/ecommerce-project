import React, { useEffect, useState } from "react";
import { useShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Productdisplay from "../Components/ProductDisplay/Productdisplay";
const Product = () => {
  const { products } = useShopContext();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [products, productId]);

  return <div>{product && <Productdisplay product={product} />}</div>;
};

export default Product;
