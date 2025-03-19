import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import all_products from "../Components/Assets/all_product";

// create a context for all the products
export const shopContext = createContext(null);

export const useShopContext = () => {
  return useContext(shopContext);
};

// create the context provider for all the products
const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(all_products);
  }, []);
  return (
    <shopContext.Provider value={{ products }}>{children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
