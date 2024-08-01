// Router
import { Route, Routes } from "react-router-dom";

// Components
import Container from "./components/Container";
import Header from "./components/Header";

// Pages
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartItems } from "./slices/cart.slice";

// Custom Hooks
import useFetch from "./hooks/useFetch";

const App = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const userId = JSON.parse(localStorage.getItem("userId"));

  // Custom Hooks
  const [specifitCart, setSpecificCart] = useFetch(
    `http://localhost:3000/carts?userId=${userId}`
  );

  dispatch(setCartItems(specifitCart));

  return (
    <Container>
      {pathname === "/sign-in" || pathname === "/sign-up" ? null : <Header />}
      <main className="my-20 font-satoshi">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </main>
    </Container>
  );
};

export default App;
