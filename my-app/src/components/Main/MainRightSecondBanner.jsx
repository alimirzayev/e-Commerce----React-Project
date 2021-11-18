import React from 'react'

function MainRightSecondBanner({detail}) {
    return (
        <div className="mainRightSecond">
            <p>{detail.subTitle}</p>
            <h2>{detail.mainTitle}</h2>
            <button>{detail.btnText} <i className="fas fa-angle-right"></i> </button>
        </div>
    )
}

export default MainRightSecondBanner
