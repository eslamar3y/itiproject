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
      <Container className="product-details mt-4">
        <Row>
          <Col xs={12} md={6} lg={6} className="mb-4">
            <div className="all-images">
              <div className="side-images">
                <img
                  src={`/Images/${product.image}`}
                  className="small-imgs"
                  alt={product.name}
                  onClick={() => {
                    document.getElementById(
                      "mainImg"
                    ).src = `/Images/${product.image}`;
                  }}
                />
                <img
                  src={`/Images/${productimgStart}_2.jpg`}
                  className="small-imgs"
                  alt={product.name}
                  onClick={() => {
                    document.getElementById(
                      "mainImg"
                    ).src = `/Images/${productimgStart}_2.jpg`;
                  }}
                />
                <img
                  src={`/Images/${productimgStart}_3.jpg`}
                  className="small-imgs"
                  alt={product.name}
                  onClick={() => {
                    document.getElementById(
                      "mainImg"
                    ).src = `/Images/${productimgStart}_3.jpg`;
                  }}
                />
                <img
                  src={`/Images/${productimgStart}_4.jpg`}
                  className="small-imgs"
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
              <p className="btn btn-dark me-2 but" onClick={handleminus}>
                <i className="fa fa-minus text-light"></i>
              </p>
              <input type="text" className="quantity" value="1" readOnly />
              <p className=" btn btn-dark me-2 but" onClick={handleplus}>
                <i className="fa fa-plus text-light"></i>
              </p>
              <br />
              <Button onClick={addToCart} variant="primary" className="mt-3">
                Add to Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetails;
