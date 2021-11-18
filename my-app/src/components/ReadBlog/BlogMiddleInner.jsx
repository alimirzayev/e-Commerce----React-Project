import React from 'react'

function BlogMiddleInner({detail}) {
    return (
        <div>
            <img src={detail.img} alt=""/>
                <div className="blogDetails2">
                    <span>{detail.tag}</span>

                    <h3>{detail.title}</h3>

                    <pre>{detail.author}   {detail.date}</pre>
                </div>
        </div>
    )
}

export default BlogMiddleInner
