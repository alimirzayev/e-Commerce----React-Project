import React, { useState } from 'react'
import { Transition } from 'react-transition-group';
import Description from './Description'
import Review from './Review'

function DetailDescBottom() {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(true)
    const [isReviewOpen, setIsReviewOpen] = useState(false)

    const descHandler = () => {
        setIsDescriptionOpen(true)
        setIsReviewOpen(false)
    }
    const reviewHandler = () => {
        setIsReviewOpen(true)
        setIsDescriptionOpen(false)
    }

    return (
        <div className="detailDescBottom">

            <div className="descBottomHeading">

                <h3 onClick={descHandler}>Description</h3>
                <h3 onClick={reviewHandler}>Reviews</h3>
                <h3>Questions</h3>

            </div>

            {isDescriptionOpen && <Description />}
            {!isDescriptionOpen && < Review />}

        </div>
    )
}

export default DetailDescBottom
