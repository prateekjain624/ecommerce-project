import React, { useEffect, useState } from "react";
import { useShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Productdisplay from "../Components/ProductDisplay/Productdisplay";
const Product = () => {
  const { products } = useShopContext();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      const storedProducts = JSON.parse(localStorage.getItem("products"));
      if (storedProducts) {
        const foundProduct = storedProducts.find(
          (p) => p.id === Number(productId)
        );
        if (foundProduct) {
          console.log(foundProduct);
          setProduct(foundProduct);
        } else {
          console.log("Product not found in local storage");
        }
      }
    }
  }, [productId, products]);
  console.log(product);
  return <div>{<Productdisplay product={product} />}</div>;
};

export default Product;
