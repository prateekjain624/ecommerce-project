import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { CartContextProvider } from "./Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ShopContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ShopContextProvider>
  </AuthProvider>
);
