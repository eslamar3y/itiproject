import React, { useEffect } from "react";
import Slider from "../components/Slider";
import ListOfCards from "../components/content/ListOfCards";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

function Home({ updateCartCount }) {
  useEffect(() => {
    updateCartCount();
  }, []);
  return (
    <div>
      <Slider />
      <ListOfCards />
      <h1 className="text-center opacity-25">---About us---</h1>
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
