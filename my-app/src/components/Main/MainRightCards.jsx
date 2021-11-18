import React from 'react'
import { CartProvider, useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import JSONDATA from './Product.json'

function MainRightCards() {

    const { addItem, inCart } = useCart();

    return (
        <div className="mainRightCards">

            {JSONDATA.map((val, key) => {

                const alreadyAdded = inCart(val.id);

                return (
                    <div className="mainRightCard1 card" key={key}>
                        <Link to={`/products/${val.id}`}>
                            <img className="card-img"
                                src={val.img} />
                            <h3 className="card-title">{val.title}</h3>
                            <p>{val.desc}</p>
                        </Link>
                        <div className="cardContainer">
                            <h3 className="card-price">{val.price} USD</h3>
                            <button id="buynow" className="button" onClick={() => addItem(val)} >
                                {alreadyAdded ? "In Cart" : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default MainRightCards
