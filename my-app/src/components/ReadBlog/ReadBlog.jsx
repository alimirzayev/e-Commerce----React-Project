import React from 'react'
import './Blog.css'
import BlogLeft from './BlogLeft'
import BlogMiddle from './BlogMiddle'
import BlogRight from './BlogRight'

function ReadBlog() {
    return (
        <div className="readOur">
            
            <div className="sectionHeading">
                <h3>Read our blog</h3>
                <a href="#">Go To Blog <i className="fas fa-angle-right"></i></a>
            </div>

            <div className="readOurBlog">
                <BlogLeft />
                <BlogMiddle />
                <BlogRight />
            </div>

        </div>
    )
}

export default ReadBlog
