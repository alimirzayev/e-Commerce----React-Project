import React from 'react'
import BlogRightInner from './BlogRightInner'

function BlogRight() {

    let first = {
        title: "Salat is kinda good start to your morning routines",
        author: "Author",
        date: "14.1.2020",
        img: "https://cdn.shopify.com/s/files/1/0417/7710/3008/articles/blog-2_545x.jpg?v=1592894144"
    }

    let second = {
        title: "Salat is kinda good start to your morning routines",
        author: "Author",
        date: "15.6.2020",
        img: "https://cdn.shopify.com/s/files/1/0417/7710/3008/articles/blog-2_545x.jpg?v=1592894144"
    }

    let third = {
        title: "Salat is kinda good start to your morning routines",
        author: "Author",
        date: "21.3.2021",
        img: "https://cdn.shopify.com/s/files/1/0417/7710/3008/articles/blog-2_545x.jpg?v=1592894144"
    }

    return (
        <div className="readOurBlog3">

            <BlogRightInner detail={first} />
            <BlogRightInner detail={second} />
            <BlogRightInner detail={third} />

        </div>
    )
}

export default BlogRight
