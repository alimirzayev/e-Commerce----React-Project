import React from 'react'
import BlogMiddleInner from './BlogMiddleInner'

function BlogMiddle() {

    let first = {
        img: "https://cdn.shopify.com/s/files/1/0417/7710/3008/articles/blog-3_545x.jpg?v=1592905411",
        tag: "Vegetable",
        title: "Which vegetable your family will love and want’s eat each day",
        author: "Author",
        date: "15.6.2020"
    }

    return (
        <div className="readOurBlog2">
            <BlogMiddleInner detail={first} />
        </div>
    )
}

export default BlogMiddle
