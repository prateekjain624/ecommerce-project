import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCartContext } from "../../Context/CartContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const { currentUser, signout } = useAuthContext();
  const navigate = useNavigate();
  const { getTotatCartItems } = useCartContext();

  const handleLogout = async () => {
    try {
      await signout();
      navigate("/");
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  const btnToggle = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu" ref={menuRef}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link> {menu === "mens" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Women</Link> {menu === "womens" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : ""}
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
        {currentUser ? (
          <>
            <Link>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </Link>
            <Link to="/cart">
              <img src={cart_icon} alt="cart-icon" />
            </Link>
            <div className="nav-cart-count">{getTotatCartItems}</div>
          </>
        ) : (
          <Link to="/signup">
            <button type="button">Login/Signup</button>
          </Link>
        )}
      </div>
      <div className="nav-hamburger">
        <button onClick={btnToggle} type="button">
          <GiHamburgerMenu size="25" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
