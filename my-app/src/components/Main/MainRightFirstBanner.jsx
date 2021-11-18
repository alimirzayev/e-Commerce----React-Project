import React from 'react'

function MainRightFirstBanner({detail}) {
    return (
        <div className="mainRightFirst">
            <p>{detail.subTitle}</p>
            <h2>{detail.mainTitle}</h2>
            <button>{detail.btnText} <i className="fas fa-angle-right"></i> </button>
        </div>
    )
}

export default MainRightFirstBanner
