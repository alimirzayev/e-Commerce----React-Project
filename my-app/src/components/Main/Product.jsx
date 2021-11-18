import React from 'react'

function Product({detail}) {
    return (
        <div className="mainRightCard1 card">
                    <img className="card-img"
                        src={detail.img}/>
                    <h3 className="card-title">{detail.title}</h3>
                    <p>{detail.desc}</p>
                    <div className="cardContainer">
                        <h3 className="card-price">{detail.price}</h3>
                        <button id="buynow" className="button">Buy Now</button>
                    </div>
        </div>
    )
}

export default Product
