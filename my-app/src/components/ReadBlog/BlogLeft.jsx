import React from 'react'
import BlogLeftInner from './BlogLeftInner'

function BlogLeft() {

    let first = {
        tag: "Dinner Tips",
        img: "https://preview.colorlib.com/theme/vegefoods/images/image_3.jpg.webp",
        title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
        author: "Author",
        date: "17. 6. 2021"
    }

    return (
        <div className="readOurBlog1">
            <BlogLeftInner detail={first}/>
        </div>
    )
}

export default BlogLeft
