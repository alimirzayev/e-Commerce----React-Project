import React from 'react'
import '../assets/Checkout.css'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import CheckoutMain from '../components/Checkout/CheckoutMain'

function Checkout() {
    return (
        <div className="checkout">
            <Breadcrumb />
            <CheckoutMain />
        </div>
    )
}

export default Checkout
