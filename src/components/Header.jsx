import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../style/header.css";
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
    const [openLinks, setOpenLinks] = useState(false);
    const [cards, setCards] = useState(0);
    // console.log(cards);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
        if (openLinks) {
            document.querySelector(".links").classList.add("d-links");
            document.querySelector(".links").classList.remove("d-none");
        }
        else {
            document.querySelector(".links").classList.remove("d-links");
            document.querySelector(".links").classList.add("d-none", "d-sm-flex");
        }
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
                        <Link className='link' to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className='link' to="/about">About</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className='link' to="/contact">Contact Us</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className='link' to="/login">Login</Link>
                    </Nav.Link>
                    <Nav.Link className='position-relative'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className='text-warning position-absolute top-0 end-2'>{cards}</span>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header