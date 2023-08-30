import React, { useState } from 'react'
import { CardsData } from "../../Data/CardsData";
import ProductCard from './ProductCard';

function ListOfCards() {
    // const [Products, setProducts] = useState(CardsData)
    // console.log(Products.length);

    return (
        <div className='container mt-5 mb-5 pt-4 pb-4 d-flex flex-wrap gap-3 justify-content-center'>
            {CardsData.map(card => {
                return (
                    <div key={card.id}>
                        <ProductCard data={card} />
                    </div>
                )
            })}
        </div>
    )
}

export default ListOfCards;