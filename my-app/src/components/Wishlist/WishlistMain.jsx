import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
function WishlistMain(props) {

    let localCart = localStorage.getItem("Eli");
    localCart = JSON.parse(localCart)

    let [cart, setCart] = useState(localCart);

    const removeItem = (item) => {

        let cartCopy = [...cart]

        cartCopy = cartCopy.filter(salam => salam.id != item.id);

        setCart(cartCopy);

        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('Eli', cartString)
    }


    return (
        <div className="wishlistmain">
            <div style={{ textAlign: "center" }}>
                <h1>Wishlist</h1>
                <p>{cart.length ? cart.length : 0} Products at Wishlist</p>
            </div>
            <div className="mainRightCards wish">

                {cart.map((item, key) => {

                    return (
                        <div className="mainRightCard1 wish-card" key={key}>
                            <Link to={`/products/${item.id}`}>
                                <img className="card-img"
                                    src={item.img} />
                                <h3 className="card-title">{item.title}</h3>
                                <p>{item.desc}</p>
                            </Link>
                            <div className="cardContainer">
                                <h3 className="card-price">{item.price + " " + "USD"}</h3>
                                <button id="buynow" className="button"
                                    onClick={() => removeItem(item)}>
                                    Add To Cart
                                </button>
                            </div>
                            <div className='wishlistBtn'>
                                <button onClick={() => removeItem(item)}>
                                    <i className="fas fa-trash"></i>
                                    Remove
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
