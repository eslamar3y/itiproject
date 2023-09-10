import React, { useState } from "react";
import { CardsData } from "../../Data/CardsData";
import ProductCard from "./ProductCard";

function ListOfCards() {
  // const [Products, setProducts] = useState(CardsData)
  // console.log(Products.length);

  return (
    <>
      <h3 className="text-center mt-5 opacity-25">---Our popular dishes---</h3>
      <div
        className="container mt-5 mb-5 pt-4 pb-4 d-flex flex-wrap gap-3 justify-content-center"
        id="order-section"
      >
        {CardsData.map((card, i) => {
          if (i > 5) {
            return null;
          }
          return (
            <div key={card.id}>
              <ProductCard data={card} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListOfCards;
