<<<<<<< HEAD
import React from 'react';
import { Card } from 'react-bootstrap';
import "../../style/cards.css";
import { useNavigate } from 'react-router-dom';
// import Popup from '../Popup';


function ProductCard(props) {
    // let [cards, setCards] = useState(0);

    // let AddProduct = () => {
    //     setCards(cards += 1);
    // }
    // let navigate = useNavigate();
    let handelDetails = () => {
        console.log(props.data.id);
        // navigate(`/details/${props.data.id}`);
    }


    return (
        <Card style={{ width: '20rem' }} onClick={handelDetails}>
            <div className="img-container">
                <Card.Img className='card-img w-100' variant="top" src={`/Images/${props.data.image}`} />
            </div>
            <Card.Body className='d-flex justify-content-between'>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text className='text-bold text-warning'>
                    ${props.data.price}
                </Card.Text>
                {/* <div className="btns d-flex justify-content-between">
                    <Popup cardData={props.data} />
                    <Button variant="warning" onClick={AddProduct}>+</Button>
                </div> */}
            </Card.Body>
        </Card>
    )
=======
import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import "../../style/cards.css";
import Popup from "../Popup";
import { Link } from "react-router-dom";

function ProductCard(props) {
  let [cards, setCards] = useState(0);

  let AddProduct = () => {
    setCards((cards += 1));
  };

  return (
    <Card style={{ width: "19rem" }}>
      <div className="img-container">
        <Card.Img
          className="card-img w-100"
          variant="top"
          src={`/Images/${props.data.image}`}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text className="text-bold">${props.data.price}</Card.Text>
        <div className="btns d-flex justify-content-between">
          <Link to={`/product/${props.data.id}`} className="btn btn-warning">
            View
          </Link>
          {/* <Popup cardData={props.data} />
                    <Button variant="warning" onClick={AddProduct}>+</Button> */}
        </div>
      </Card.Body>
    </Card>
  );
>>>>>>> 3ddb4fca22b79165cff58c4fb247deb724e9afed
}

export default ProductCard;
