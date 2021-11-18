import React from 'react'
import BillingInfo from './BillingInfo'
import BillingMethod from './BillingMethod'
import PaymentMethod from './PaymentMethod'
import CheckoutFooter from './CheckoutFooter'

function CheckoutLeft() {
    return (
        <div className="checkoutLeft">
            <BillingInfo />
            <BillingMethod />
            <PaymentMethod />
            <CheckoutFooter />
        </div>
    )
}

export default CheckoutLeft
