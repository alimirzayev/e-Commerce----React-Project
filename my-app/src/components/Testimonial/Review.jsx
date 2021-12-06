import React from 'react'

function Review({ detail }) {
    return (
        <div className="firstReview" id="firstReview">

            <div className="leftArrow" id="leftarrow">
                <i className="fas fa-chevron-left"></i>
            </div>

            <p>“ {detail.review} “</p>

            <span>{detail.author}</span>

            <div className="reviewCircle"></div>

            <div className="rightArrow" id="rightarrow">
                <i className="fas fa-chevron-right"></i>
            </div>

        </div>
    )
}

export default Review
