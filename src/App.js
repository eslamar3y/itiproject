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
      <Header cards={cards} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home updateCartCount={updateCartCount} />} />
        <Route
          path="/about"
          element={<About updateCartCount={updateCartCount} />}
        />
        <Route
          path="/contact"
          element={<Contact updateCartCount={updateCartCount} />}
        />
        <Route
          path="/cart"
          element={<Cart updateCartCount={updateCartCount} />}
        />
        <Route
          path="product/:id"
          element={<ProductDetails updateCartCount={updateCartCount} />}
        />
      </Routes>
    </>
  );
}

export default App;
