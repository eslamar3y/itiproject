import React, { useDebugValue, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { CardsData } from "../Data/CardsData";
import "../style/product.css"; // Import your custom CSS for additional styling

const ProductDetails = ({ updateCartCount }) => {
  // Get the 'id' parameter from the URL
  const { id } = useParams();

  let _navigate = useNavigate();

  useEffect(() => {
    updateCartCount();
  }, []);

  // Find the product with the matching 'id' in CardsData
  const product = CardsData.find((item) => item.id === parseInt(id, 10));

  // Check if the product exists
  if (!product) {
    return <div className="product-details">Product not found</div>;
  }

  let productimgStart = product.image.split(".")[0];

  let handleplus = () => {
    let quantity = document.querySelector(".quantity");
    quantity.value = parseInt(quantity.value) + 1;
  };
  let handleminus = () => {
    let quantity = document.querySelector(".quantity");
    if (quantity.value > 1) {
      quantity.value = parseInt(quantity.value) - 1;
    }
  };

  // Handle the 'Add to Cart' functionality here
  const addToCart = () => {
    // check id user is logged in
    const user = localStorage.getItem("user");
    if (!user) {
      _navigate("/login");
    } else {
      // Get the existing cart from localStorage, or create a new one
      let cart = localStorage.getItem("cart");
      if (!cart) {
        cart = [];
      } else {
        cart = JSON.parse(cart);
      }

      // Check if the product is already in the cart
      const existingProduct = cart.find((item) => item.id === product.id);
      const userId = JSON.parse(user).id;

      // If the product is already in the cart,
      // update the quantity of the existing product
      // Else, add the product to the cart
      if (existingProduct) {
        let q = parseInt(document.querySelector(".quantity").value);
        existingProduct.quantity = existingProduct.quantity + q;
        // existingProduct.quantity++;
      } else {
        let q = parseInt(document.querySelector(".quantity").value);
        cart.push({ ...product, user_id: userId, quantity: q });
      }

      // Save the cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();

      console.log(`Added ${product.title} to cart`);
    }
  };

  return (
    <>
      <Container className="product-details mt-4 p-4 min-vh-100">
        <Row>
          <Col xs={12} md={6} lg={6} className="mb-4">
            <div className="all-images">
              <div className="side-images">
                <img
                  src={`/Images/${product.image}`}
                  alt={product.name}
                  onClick={() => {
                    document.getElementById(
                      "mainImg"
                    ).src = `/Images/${product.image}`;
                  }}
                />
                <img
                  src={`/Images/${productimgStart}_2.jpg`}
                  alt={product.name}
                  onClick={() => {
                    document.getElementById(
                      "mainImg"
                    ).src = `/Images/${productimgStart}_2.jpg`;
                  }}
                />
                <img
                  src={`/Images/${productimgStart}_3.jpg`}
                  alt={product.name}
                  onClick={() => {
                    document.getElementById(
                      "mainImg"
                    ).src = `/Images/${productimgStart}_3.jpg`;
                  }}
                />
                <img
                  src={`/Images/${productimgStart}_4.jpg`}
                  alt={product.name}
                  onClick={() => {
                    document.getElementById(
                      "mainImg"
                    ).src = `/Images/${productimgStart}_4.jpg`;
                  }}
                />
              </div>
              <div className="product-image">
                <Image
                  src={`/Images/${product.image}`}
                  alt={product.name}
                  id="mainImg"
                  fluid
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <div className="add-card d-flex justify-content-between align-items-center mt-5">
                <div className="func-inc-dec">
                  <div className="btn btn-dark but" onClick={handleminus}>
                    <i className="fa fa-minus text-light"></i>
                  </div>
                  <input type="text" className="quantity text-warning fw-bold" value="1" readOnly />
                  <div className=" btn btn-dark but" onClick={handleplus}>
                    <i className="fa fa-plus text-light"></i>
                  </div>
                </div>
                <Button onClick={addToCart} variant="primary">
                  Add to Cart
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetails;
