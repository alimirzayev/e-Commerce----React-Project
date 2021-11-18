import React from 'react'
import './Main.css';

import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main() {
    return (
        <div className="main">
            <MainLeft />
            <MainRight />
        </div>
    )
}

export default Main
