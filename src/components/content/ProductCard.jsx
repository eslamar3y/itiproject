// import React from "react";
// import { Card } from "react-bootstrap";
// import "../../style/cards.css";
// import { Link } from "react-router-dom";

// function ProductCard(props) {
//   return (
//     <Link to={`/product/${props.data.id}`} className="text-decoration-none">
//       <Card style={{ width: "20rem" }}>
//         <div className="img-container">
//           <Card.Img
//             className="card-img w-100"
//             variant="top"
//             src={`/Images/${props.data.image}`}
//           />
//         </div>
//         <Card.Body className="d-flex justify-content-between">
//           <Card.Title>{props.data.title}</Card.Title>
//           <Card.Text className="text-bold text-warning">
//             ${props.data.price}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Link>
//   );
// }

// export default ProductCard;

import React from "react";
import { Card } from "react-bootstrap";
import "../../style/cards.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  // get style from props
  let cardStyle = props.style;

  if (!cardStyle) {
    cardStyle = {
      width: "20rem",
    };
  }

  let imgStyle = props.imgStyle;

  if (!imgStyle) {
    imgStyle = {
      height: "15rem",
    };
  }

  // apply style to card

  return (
    <Link to={`/product/${props.data.id}`} className="text-decoration-none">
      <Card style={cardStyle}>
        <div className="img-container">
          <Card.Img
            className="card-img w-100"
            style={imgStyle}
            variant="top"
            src={`/Images/${props.data.image}`}
          />
        </div>
        <Card.Body className="d-flex justify-content-between">
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text className="text-bold text-warning">
            ${props.data.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ProductCard;
