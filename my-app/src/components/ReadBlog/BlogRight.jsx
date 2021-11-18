import React from 'react'
import BlogRightInner from './BlogRightInner'

function BlogRight() {

    let first = {
        title: "Salat is kinda good start to your morning routines",
        author: "Author",
        date: "14.1.2020",
        img:"https://technext.github.io/vegefoods/images/image_1.jpg"
    }

    let second = {
        title: "Salat is kinda good start to your morning routines",
        author: "Author",
        date: "15.6.2020",
        img:"https://technext.github.io/vegefoods/images/image_6.jpg"
    }

    let third = {
        title: "Salat is kinda good start to your morning routines",
        author: "Author",
        date: "21.3.2021",
        img:"https://technext.github.io/vegefoods/images/image_5.jpg"
    }

    return (
        <div class="readOurBlog3">

            <BlogRightInner detail={first}/>
            <BlogRightInner detail={second}/>
            <BlogRightInner detail={third}/>

        </div>
    )
}

export default BlogRight
