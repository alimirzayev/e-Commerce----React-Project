import React from 'react'
import './Main.css';
import MainRightTop from './MainRightTop';
import MainRightCards from './MainRightCards';
import MainRightCards2 from './MainRightCards2';

function MainRight() {
    return (
        <div className="mainRight">
            <MainRightTop />
            <MainRightCards />
            <MainRightCards2 />
        </div>
    )
}

export default MainRight
