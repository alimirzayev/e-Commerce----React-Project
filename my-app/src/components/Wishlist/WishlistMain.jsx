import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

function WishlistMain(props) {
    let JSONDATA = props.data

    return (
        <div className="wishlistmain">
            <div className="mainRightCards">

                {JSONDATA.map((item, key) => {

                    return (
                        <div className="mainRightCard1 card" key={key}>
                            <Link to={`/products/${item.id}`}>
                                <img className="card-img"
                                    src={item.img} />
                                <h3 className="card-title">{item.title}</h3>
                                <p>{item.desc}</p>
                            </Link>
                            <div className="cardContainer">
                                <h3 className="card-price">{item.price + " " + "USD"}</h3>
                                <button id="buynow" className="button">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div >
        </div>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(WishlistMain)
