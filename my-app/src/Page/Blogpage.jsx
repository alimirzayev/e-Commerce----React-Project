import React from 'react'
import '../components/Blog/Blog.css'
import { Link } from 'react-router-dom'
import Blog from '../components/Blog/Blog'
function Blogpage() {
    return (
        <div className="blogPage">

            <div className="bread">
                <ul className="breadcrumb">
                    <li><Link to="#" id="homepage">Home</Link></li>
                    <li>Blog Page</li>
                </ul>
            </div>

            <Blog />

        </div>
    )
}

export default Blogpage
