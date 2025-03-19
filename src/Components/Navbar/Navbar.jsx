import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" style={{ textDecoration: "none", color: "#626262" }}>
            Men
          </Link>{" "}
          {menu === "mens" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link
            to="/womens"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            Women
          </Link>{" "}
          {menu === "womens" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>

      {/* Search Box */}
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button">Search</button>
      </div>

      <div className="nav-login-cart">
        <Link to="/signup">
          <button type="button">Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
