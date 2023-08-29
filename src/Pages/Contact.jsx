import React, { useEffect } from "react";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Contact({ updateCartCount }) {
  useEffect(() => {
    updateCartCount();
  }, []);
  return (
    <div>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Contact;
