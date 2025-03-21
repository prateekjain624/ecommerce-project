import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { db } from "../Firebase";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  updateDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
const CartContext = createContext(null);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { currentUser } = useAuthContext();

  //   Here is am fetching the cart items from the Firestore database when the component mounts.
  const fetchCartItems = async () => {
    if (!currentUser) {
      setCart([]);
      return;
    }
    try {
      const cartRef = collection(db, "cart");
      const q = query(cartRef, where("userId", "==", currentUser.uid));
      const anapshot = onSnapshot(q, (snapshot) => {
        const cartItems = [];
        snapshot.forEach((doc) => {
          cartItems.push({ ...doc.data(), id: doc.id });
        });
        setCart(cartItems);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [currentUser]);

  //   This function will add a new item to the cart or update the quantity of an existing item.
  const addToCart = async (product) => {
    if (!currentUser) return;
    try {
      const userCartRef = collection(db, "cart");
      const q = query(
        userCartRef,
        where("userId", "==", currentUser.uid),
        where("productId", "==", product.id)
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const existingItem = snapshot.docs[0];
        const existingProduct = existingItem.data();
        const newQuantity = existingProduct.quantity + (product.quantity || 1);

        await updateDoc(existingItem.ref, {
          quantity: newQuantity,
        });
      } else {
        const newCartItem = {
          userId: currentUser.uid,
          quantity: 1,
          productId: product.id,
          ...product,
        };
        const newDocRef = doc(collection(db, "cart"));
        await setDoc(newDocRef, newCartItem);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const totalprice = cart.reduce(
    (total, item) => total + item.new_price * item.quantity,
    0
  );

  const getTotatCartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const updateQuantity = async (cartItemId, quantity) => {
    try {
      const docRef = doc(db, "cart", cartItemId);
      await updateDoc(docRef, {
        quantity,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, totalprice, getTotatCartItems, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
