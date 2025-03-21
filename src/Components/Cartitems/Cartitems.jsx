import React from "react";
import "./Cartitems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import p1_img from "../Assets/product_1.png";
const Cartitems = ({ cart, totalprice, updateQuantity }) => {
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {cart.map((item) => (
          <div key={item.id} className="cartitems-format cartitems-format-main">
            <img src={item.image} alt="" className="carticon-product-icon" />
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <div className="cartitems-btn-controls">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                type="submit"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                {" "}
                +{" "}
              </button>
            </div>
            <p>${item.quantity * item.new_price}</p>
            <img className="cartitems-remove-icon" src={remove_icon} alt="" />
          </div>
        ))}

        <hr />
      </div>
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${totalprice}</p>
            </div>
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="cartitems-total-item">
              <p>Total Discount</p>
              <p>0</p>
            </div>
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${totalprice}</p>
            </div>
          </div>
          <button className="cartitems-checkout-btn">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it Here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Enter promo code" />
            <button>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
