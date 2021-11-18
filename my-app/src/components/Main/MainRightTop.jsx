import React from 'react'
import MainRightFirstBanner from './MainRightFirstBanner'
import MainRightSecondBanner from './MainRightSecondBanner'

function MainRightTop() {

    let first = {
        subTitle: 'Banner subfocus',
        mainTitle: 'Space for heading',
        btnText: 'Read Receipes'
    }

    let second = {
        subTitle: 'Banner subfocus',
        mainTitle: 'Space for heading',
        btnText: 'Read Receipes'
    }


    return (
        <div className="mainRightTop">

        <MainRightFirstBanner detail={first} />
        <MainRightSecondBanner detail={second} />

        </div>
    )
}

export default MainRightTop
