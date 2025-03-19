import React from "react";
import "./Css/Shopcategory.css";
import { useShopContext } from "../Context/ShopContext";
import dropdown_menu from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategory = ({ banner, category }) => {
  const { products } = useShopContext();

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="banner" />
      <div className="shopcategory-indexsort">
        <div>
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            sort by <img src={dropdown_menu} alt="dropdown-menu" />
          </div>
        </div>
        <div className="shopcategory-products">
          {products.map((item) => {
            if (item.category === category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          <button type="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
