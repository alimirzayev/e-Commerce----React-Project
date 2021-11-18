import React from 'react'
import BlogMiddleInner from './BlogMiddleInner'

function BlogMiddle() {

    let first = {
        img: "https://preview.colorlib.com/theme/vegefoods/images/xcategory-3.jpg.pagespeed.ic.IebYHvpTTo.webp",
        tag: "Vegetable",
        title: "Which vegetable your family will love and want’s eat each day",
        author: "Author",
        date: "15.6.2020"
    }

    return (
        <div className="readOurBlog2">
            <BlogMiddleInner detail={first}/>
        </div>
    )
}

export default BlogMiddle
