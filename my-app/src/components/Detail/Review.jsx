import React from 'react'
import Avatar from '@mui/material/Avatar';
import Reviews from './Reviews.json'

function Review() {
    return (
        <div className="Review">
            {Reviews.map(review => (
                <div className="userReview">
                    <div className="headingReview">
                        <Avatar style={{ backgroundColor: "#e6724d" }} >{review.author.charAt(0)}</Avatar>

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
