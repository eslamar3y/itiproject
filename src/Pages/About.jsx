import React, { useEffect } from "react";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

function About({ updateCartCount }) {
  useEffect(() => {
    updateCartCount();
  }, []);
  return (
    <div>
      <AboutSection />
      <Footer />
    </div>
  );
}

export default About;
