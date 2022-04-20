import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb() {
    return (
        <div className="bread">
            <ul className="breadcrumb">
                <li><Link to="/" id="homepage">Home</Link></li>
                <li>Checkout Page</li>
            </ul>
        </div>
    )
}

export default Breadcrumb
