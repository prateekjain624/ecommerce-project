import React from "react";
import "../ProductDisplay/Productdisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
const Productdisplay = ({ product }) => {
  console.log(product);
  return (
    <div className="productdisplay">
      <div class="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="product-image"
          />
        </div>
      </div>
      <div class="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_dull_icon} alt="star-dull-icon" />
          <p>{122}</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-old">${product.old_price}</div>
          <div className="productdisplay-right-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
          blanditiis saepe dolor ipsum ea, eos quisquam nemo laborum corporis,
          iusto fuga error voluptatem autem quibusdam ab non dolore numquam
          enim!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-container">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button className="add-to-cart" type="button">
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          Category : <span>Women , T-Shirt Crop Top</span>{" "}
        </p>
        <p className="productdisplay-right-tag">
          Tags : <span>Modern, Latest</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
