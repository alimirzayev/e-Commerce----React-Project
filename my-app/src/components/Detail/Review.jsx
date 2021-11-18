import React from 'react'
import Reviews from './Reviews.json'

function Review() {
    return (
        <div className="Review">
            {Reviews.map(review => (
                <div className="userReview">
                    <div className="headingReview">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#F9F9F9" />
                        </svg>

                        <div>
                            <h4>{review.author}</h4>
                            <p>{review.date}</p>
                        </div>
                    </div>

                    <div className="reviewContent">
                        <p>{review.review}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Review
