import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../style/slider.css"
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item className='item'>
                <img
                    className="d-block w-100"
                    src="Images/bg-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='caption text-white'>
                    <Link to="/login" className='btn btn-warning fw-bold py-2 px-4 mb-3'>Join Us</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                    className="d-block w-100"
                    src="Images/bg-2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className='caption text-white'>
                    <Link to="/login" className='btn btn-warning fw-bold py-2 px-4 mb-3'>Join Us</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                    className="d-block w-100"
                    src="Images/bg-3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className='caption text-white'>
                    <Link to="/login" className='btn btn-warning fw-bold py-2 px-4 mb-3'>Join Us</Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider