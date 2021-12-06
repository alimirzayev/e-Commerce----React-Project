import React from 'react'
import Logo from './Logo'
import Cart from './Cart'
import Search from './Search'

function HeadingMiddle() {

    return (
        <div className="mainHeader">
            <Logo />
            <Search />
            <Cart />
        </div>
    )
}

export default HeadingMiddle
