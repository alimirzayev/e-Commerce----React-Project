import React from 'react'
import BlogLeftInner from './BlogLeftInner'

function BlogLeft() {

    let first = {
        tag: "Dinner Tips",
        img: "https://cdn.shopify.com/s/files/1/0417/7710/3008/articles/blog-1_545x.jpg?v=1592887054",
        title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
        author: "Author",
        date: "17. 6. 2021"
    }

    return (
        <div className="readOurBlog1">
            <BlogLeftInner detail={first} />
        </div>
    )
}

export default BlogLeft
