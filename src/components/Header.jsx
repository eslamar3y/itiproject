import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

<<<<<<< HEAD
function Header() {
    const [openLinks, setOpenLinks] = useState(false);
    const [cards, setCards] = useState(0);
=======
function Header({ cards }) {
  const [openLinks, setOpenLinks] = useState(false);
>>>>>>> 3ddb4fca22b79165cff58c4fb247deb724e9afed

    let _navigate = useNavigate();

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

    let user = localStorage.getItem("user");
    if (user) {
        user = JSON.parse(user);
    }

<<<<<<< HEAD
    let Logout = () => {
        localStorage.removeItem("user");
        _navigate("/");
    };
=======
  // Function to update cart count
  // const updateCartCount = () => {
  //   let cart = localStorage.getItem("cart");
  //   cart = JSON.parse(cart);
  //   if (cart) {
  //     setCards(cart.length);
  //   }
  // };

  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }
>>>>>>> 3ddb4fca22b79165cff58c4fb247deb724e9afed

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
