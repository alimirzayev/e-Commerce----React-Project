import React from 'react'
import { useCart } from "react-use-cart";

function Summary() {

    const {
        isEmpty,
        cartTotal,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    const refresh = () => {
        window.location.href = "http://localhost:3000/category"
    }

    if (isEmpty) return <p>Your cart is empty</p>;

    return (
        <div>
            <h1>
                Cart ({totalUniqueItems} - {cartTotal} $)
                {!isEmpty && <button onClick={emptyCart}>Empty cart</button>}
            </h1>


            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.quantity} x {item.title}
                        <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                            -
                        </button>
                        <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                            +
                        </button>
                        <button onClick={() => removeItem(item.id)}>Remove &times;</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Summary
