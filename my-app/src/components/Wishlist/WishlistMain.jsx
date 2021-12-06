import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

function WishlistMain(props) {
    let JSONDATA = props.data

    return (
        <div className="wishlistmain">
            <div className="mainRightCards">

                {JSONDATA.map((val, key) => {

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
                                <button id="buynow" className="button" >
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
