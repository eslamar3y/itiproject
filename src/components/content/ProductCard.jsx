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
}

export default ProductCard;