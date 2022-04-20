import React from 'react'

function BlogLeftInner({ detail }) {
    return (
        <div>
            <span className="topSpan">{detail.tag}</span>
            <img src={detail.img} alt="" />
            <div className="blogDetails">
                <h3>{detail.title}</h3>
                <div className="blogDetailsInner">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16.5" r="16" fill="#F9F9F9" />
                    </svg>
                    <p>{detail.author}</p>
                    <p>{detail.date}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogLeftInner
