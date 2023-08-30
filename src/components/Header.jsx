import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header({ cards, updateCartCount }) {
  const [openLinks, setOpenLinks] = useState(false);

<<<<<<< HEAD
  let _navigate = useNavigate();
=======
function Header({ cards, updateCartCount }) {
    const [openLinks, setOpenLinks] = useState(false);
>>>>>>> 54e718f3e354c27ad5d6bc2b245770b535283d3e

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
    if (openLinks) {
      document.querySelector(".links").classList.add("d-links");
      document.querySelector(".links").classList.remove("d-none");
    } else {
      document.querySelector(".links").classList.remove("d-links");
      document.querySelector(".links").classList.add("d-none", "d-sm-flex");
    }
  };

<<<<<<< HEAD
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }
=======
    let Logout = () => {
        localStorage.removeItem("user");
        updateCartCount();
        _navigate("/");
    };
    // Function to update cart count
    // const updateCartCount = () => {
    //   let cart = localStorage.getItem("cart");
    //   cart = JSON.parse(cart);
    //   if (cart) {
    //     setCards(cart.length);
    //   }
    // };
>>>>>>> 54e718f3e354c27ad5d6bc2b245770b535283d3e

  let Logout = () => {
    localStorage.removeItem("user");
    updateCartCount();
    _navigate("/");
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="/Images/pizzaLogo.png" alt="" />
          </Link>
        </Navbar.Brand>
        <button className="togeller d-sm-none" onClick={toggleNavbar}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <Nav className="ms-auto links d-none d-sm-flex fw-bold">
          <Nav.Link>
            <Link className="link" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to="/about">
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </Nav.Link>
          {user ? (
            <Nav.Link>
              <Link className="link" to="#" onClick={Logout}>
                <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link>
              <Link className="link" to="/login">
                Login
              </Link>
            </Nav.Link>
          )}
          <Nav.Link className="position-relative">
            <Link className="link" to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="text-warning position-absolute top-0">
                {cards}
              </span>
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
