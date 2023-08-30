import React, { useEffect } from "react";
import Slider from "../components/Slider";
import ListOfCards from "../components/content/ListOfCards";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home({ updateCartCount }) {
  useEffect(() => {
    updateCartCount();
  }, []);
  return (
    <div>
      <Slider />
      <ListOfCards />
      <Footer />
    </div>
  );
}

export default Home;
