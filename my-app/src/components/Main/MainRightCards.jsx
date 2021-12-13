import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import swal from 'sweetalert';


function MainRightCards(props) {

    let JSONDATA = props.data

    let [cart, setCart] = useState([]);
    let localCart = localStorage.getItem("Eli");

    useEffect(() => {
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

        swal("Good job!", "Item added to cart!", "success");

        window.location.reload();
    };


    return (
        <div className="mainRightCards">

            {JSONDATA.slice(0, 6).map((val, key) => {

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
                                Add To Cart
                            </button>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(MainRightCards)
