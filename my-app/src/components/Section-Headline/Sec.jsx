import React, { useRef, useState, useEffect } from 'react'
import './Section.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
function Sec(props) {

    let JSONDATA = props.data

    let [cart, setCart] = useState([]);
    let localCart = localStorage.getItem("Eli");

    useEffect(() => {

        window.scrollTo(0, 0)

        localCart = JSON.parse(localCart);
        if (localCart) setCart(localCart);
    }, []);

    const addItem = (item) => {
        let cartCopy = [...cart];

        let { id } = item;

        let existingItem = cartCopy.find((cartItem) => cartItem.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            item.quantity = 1;
            cartCopy.push(item);
        }

        setCart(cartCopy);

        const replacerFunc = () => {
            const visited = new WeakSet();
            return (key, value) => {
                if (typeof value === "object" && value !== null) {
                    if (visited.has(value)) {
                        return;
                    }
                    visited.add(value);
                }
                return value;
            };
        };

        let stringCart = JSON.stringify(cartCopy, replacerFunc());
        localStorage.setItem("Eli", stringCart);

        window.location.reload();
    };

    return (
        <div className="headline">

            <div className="sectionHeading">

                <h3>Section Headline</h3>
                <Link to="">Button <i className="fas fa-angle-right"></i></Link>

            </div>

            <div className="headlineCards">
                {JSONDATA.slice(4, 8).map((val, key) => {

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
                                <button id="buynow" className="button"
                                    onClick={() => addItem(val)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Sec)
