import React, { useState } from 'react'
import './Header.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


function Cart(props) {
    const [display, setDisplay] = useState(true)

    const showCart = () => {
        if (display) {
            setDisplay(false)
            props.dispatch({ type: "BLUR", value: display })
        } else {
            setDisplay(true)
            props.dispatch({ type: "BLUR", value: display })
        }
    }

    let localCart = localStorage.getItem("Eli");
    localCart = JSON.parse(localCart)

    let [cart, setCart] = useState(localCart);

    const removeItem = (item) => {

        let cartCopy = [...cart]

        cartCopy = cartCopy.filter(salam => salam.id != item.id);

        setCart(cartCopy);

        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('Eli', cartString)

        window.location.reload();
    }


    return (
        <div className="mainHeaderRight">
            <div className="mainHeaderUser">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21.9999L3.79 19.1199C6.4 9.6199 17.6 9.6199 20.21 19.1199L21 21.9999"
                        stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M12 11.98C14.7614 11.98 17 9.74141 17 6.97998C17 4.21856 14.7614 1.97998 12 1.97998C9.23858 1.97998 7 4.21856 7 6.97998C7 9.74141 9.23858 11.98 12 11.98Z"
                        stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                </svg>

            </div>

            <div onClick={showCart} className="mainHeaderBasket">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.8896 20.8499H6.10955C5.79187 20.8501 5.48326 20.7439 5.23309 20.5481C4.98291 20.3523 4.80562 20.0783 4.72955 19.7699L2.07955 9.15986C2.05369 9.05657 2.05174 8.94874 2.07383 8.84458C2.09593 8.74042 2.1415 8.64267 2.20707 8.55878C2.27264 8.47489 2.35649 8.40706 2.45223 8.36046C2.54797 8.31386 2.65307 8.28971 2.75955 8.28986H21.2396C21.346 8.28971 21.4511 8.31386 21.5469 8.36046C21.6426 8.40706 21.7265 8.47489 21.792 8.55878C21.8576 8.64267 21.9032 8.74042 21.9253 8.84458C21.9474 8.94874 21.9454 9.05657 21.9196 9.15986L19.2696 19.7699C19.1935 20.0783 19.0162 20.3523 18.766 20.5481C18.5158 20.7439 18.2072 20.8501 17.8896 20.8499V20.8499Z"
                        stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.79941 3.14993L6.89941 8.28993" stroke="#151515" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8799 3.14993L16.7899 8.28993" stroke="#151515" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="mainHeaderBasketCount">
                    <span id="count">{cart && cart.length}</span>
                </div>
            </div>


            <div className={display ? "shopping-cart" : "shopping-cart active"}>
                <div>
                    <h2>Shopping Cart</h2>
                </div>

                <div className='shopping-cart-inner'>
                    {cart && cart.map((item, key) => {
                        return (
                            <div className='cart-product-list' key={item.id}>

                                <div className="open-cart-image-div">
                                    <img src={item.img} alt="" />
                                </div>

                                <div className='open-cart-title'>
                                    <p>{item.title}</p>
                                </div>

                                <div className="open-cart-price">
                                    <p>{item.price}$</p>
                                </div>

                                <div className='btn-trash'>
                                    <i className='fas fa-trash'
                                        onClick={() => removeItem(item)}
                                    ></i>
                                </div>

                            </div>
                        )
                    })}
                </div>


                <div>
                    <Link to="/checkout">
                        <button id="ordernowbtn">
                            Order Now
                        </button>
                    </Link>
                </div>
            </div >

        </div >
    )
}

let mapStateToProps = state => state
export default connect(mapStateToProps)(Cart)
