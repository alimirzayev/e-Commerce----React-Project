import React from 'react'
import HeadingTop from './HeadingTop';
import HeadingMiddle from './HeadingMiddle';
import HeadingBottom from './HeadingBottom';
import './Header.css';

function Header() {
    return (
        <div className="headerReact">
            <HeadingTop />
            <hr />
            <HeadingMiddle />
            <HeadingBottom />
        </div>
    )
}

export default Header
