import React from "react";
import Cartitems from "../Components/Cartitems/Cartitems";
import { useAuthContext } from "../Context/AuthContext";
import { useCartContext } from "../Context/CartContext";
const Cart = () => {
  const { cart, totalprice, updateQuantity } = useCartContext();
  console.log(cart);
  return (
    <div>
      <Cartitems
        cart={cart}
        totalprice={totalprice}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default Cart;
