import React from "react";
import { Carousel } from "react-bootstrap";
import "../style/slider.css";
import { Link } from "react-router-dom";

function Slider() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }

  // Function to scroll to the order section
  const scrollToOrderSection = () => {
    const orderSection = document.getElementById("order-section");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="Images/bg-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption text-white">
          {user ? (
            <button
              className="btn btn-warning fw-bold py-2 px-4 mb-3 btn-order"
              onClick={scrollToOrderSection}
            >
              order now
            </button>
          ) : (
            <Link
              to="/login"
              className="btn btn-warning fw-bold py-2 px-4 mb-3 btn-order"
            >
              Join Us
            </Link>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="Images/bg-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="caption text-white">
          {user ? (
            <button
              className="btn btn-warning fw-bold py-2 px-4 mb-3 btn-order"
              onClick={scrollToOrderSection}
            >
              order now
            </button>
          ) : (
            <Link
              to="/login"
              className="btn btn-warning fw-bold py-2 px-4 mb-3 btn-order"
            >
              Join Us
            </Link>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="Images/bg-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="caption text-white">
          {user ? (
            <button
              className="btn btn-warning fw-bold py-2 px-4 mb-3 btn-order"
              onClick={scrollToOrderSection}
            >
              order now
            </button>
          ) : (
            <Link
              to="/login"
              className="btn btn-warning fw-bold py-2 px-4 mb-3 btn-order"
            >
              Join Us
            </Link>
          )}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
