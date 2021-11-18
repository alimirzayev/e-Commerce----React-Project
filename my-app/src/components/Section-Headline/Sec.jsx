import React from 'react'
import './Section.css'
import { CartProvider, useCart } from "react-use-cart";
import JSONDATA from './Section.json'
import { Link } from 'react-router-dom'

function Sec() {

    const { addItem, inCart } = useCart();

    return (
        <div className="headline">

            <div className="sectionHeading">

                <h3>Section Headline</h3>
                <a >Button <i className="fas fa-angle-right"></i></a>

            </div>

            <div className="headlineCards">
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
            </div>

        </div>
    )
}

export default Sec
