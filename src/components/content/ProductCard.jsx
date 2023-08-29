import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import "../../style/cards.css";
import Popup from '../Popup';


function ProductCard(props) {
    let [cards, setCards] = useState(0);

    let AddProduct = () => {
        setCards(cards += 1);
    }


    return (
        <Card style={{ width: '19rem' }}>
            <div className="img-container">
                <Card.Img className='card-img w-100' variant="top" src={`/Images/${props.data.image}`} />
            </div>
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text className='text-bold'>
                    ${props.data.price}
                </Card.Text>
                <div className="btns d-flex justify-content-between">
                    <Popup cardData={props.data} />
                    <Button variant="warning" onClick={AddProduct}>+</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;