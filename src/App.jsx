import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import ScrollToTop from "./Components/Scrolltotop";
import Signin from "./Pages/Signin";
import Protectedroutes from "./Components/Protected/Protectedroutes";
import { useAuthContext } from "./Context/AuthContext";

function App() {
  const { currentUser } = useAuthContext();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />

        {/* Shop Categories */}
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />

        {/* Product */}
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />

        {/* Protected Routes */}
        <Route element={<Protectedroutes />}>
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* Authentication Routes */}
        <Route
          path="/signup"
          element={currentUser ? <Navigate to="/" /> : <LoginSignup />}
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Signin />}
        />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
