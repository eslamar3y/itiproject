import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Products from "./Pages/Admin/products";
import Users from "./Pages/Admin/users";

function App() {
  // Define the cards state variable and its setter
  const [cards, setCards] = useState(0);

  // Define the updateCartCount function
  const updateCartCount = () => {
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    if (cart) {
      let user = localStorage.getItem("user");
      if (!user) {
        setCards(0);
      } else {
        user = JSON.parse(user);
        const currentCart = cart.filter((item) => item.user_id === user.id);
        setCards(currentCart.length);
      }
    }
  };

  // Call updateCartCount once when the component mounts
  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <>
      {/* <Header cards={cards} updateCartCount={updateCartCount} /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header cards={cards} updateCartCount={updateCartCount} />
              <Home updateCartCount={updateCartCount} />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header cards={cards} updateCartCount={updateCartCount} />
              <About updateCartCount={updateCartCount} />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header cards={cards} updateCartCount={updateCartCount} />
              <Contact updateCartCount={updateCartCount} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header cards={cards} updateCartCount={updateCartCount} />
              <Cart updateCartCount={updateCartCount} />
            </>
          }
        />
        <Route
          path="product/:id"
          element={
            <>
              <Header cards={cards} updateCartCount={updateCartCount} />
              <ProductDetails updateCartCount={updateCartCount} />
            </>
          }
        />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/users" element={<Users />} />

        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>
    </>
  );
}

export default App;
