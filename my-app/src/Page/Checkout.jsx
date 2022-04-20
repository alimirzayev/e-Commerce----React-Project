import React, { useRef, useEffect } from 'react'
import '../assets/Checkout.css'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import CheckoutMain from '../components/Checkout/CheckoutMain'
import { connect } from 'react-redux'

function Checkout(props) {
    const parent = useRef();

    useEffect(() => {
        if (props.blur) {
            parent.current.style.zIndex = "-50";
        } else {
            parent.current.style.zIndex = "50";
        }

    }, [props.blur])

    useEffect(() => {
        if (props.toggle) {
            parent.current.style.zIndex = "-50";
            parent.current.style.filter = "blur(20px)";
        } else {
            parent.current.style.zIndex = "50";
            parent.current.style.filter = "blur(0px)";
        }

    }, [props.toggle])


    return (
        <div ref={parent} className="checkout">
            <Breadcrumb />
            <CheckoutMain />
        </div>
    )
}

let mapStateToProps = state => state
export default connect(mapStateToProps)(Checkout)
