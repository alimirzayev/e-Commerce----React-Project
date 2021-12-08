import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function CategoryRight(props) {

    let JSONDATA = props.dynamicData

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
        props.dispatch({ type: "Wishlist", action: cart })
    };

    const removeItem = (item) => {

        let cartCopy = [...cart]
        console.log(cartCopy, item)

        cartCopy = cartCopy.filter(salam => salam.id !== item.id);
        console.log(cartCopy)
        setCart(cartCopy);

        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('Eli', cartString)
    }

    // useEffect(() => {
    //     props.dispatch({ type: "Wishlist", action: cart })
    // }, [cart])

    return (
        <div className="categoryRight">

            {JSONDATA.map((item, key) => {

                return (
                    <div className="mainRightCard1 card" id="card" key={key}>
                        <Link to={`/products/${item.id}`}>
                            <img className="card-img"
                                src={item.img} />
                            <h3 className="card-title">{item.title}</h3>
                            <p>{item.desc}</p>
                        </Link>
                        <div className="cardContainer">
                            <h3 className="card-price" >{item.price} USD</h3>
                            <button id="buynow" className="button"
                                onClick={() => addItem(item)} > Add to Cart </button>
                            <button onClick={() => removeItem(item)}>Remove Cart</button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

let mapStateToProps = state => state
export default connect(mapStateToProps)(CategoryRight)
