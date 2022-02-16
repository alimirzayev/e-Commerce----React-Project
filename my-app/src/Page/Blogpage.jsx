import React from 'react'
import '../components/Blog/Blog.css'
import { Link } from 'react-router-dom'
function Blogpage() {
    return (
        <div className="blogPage">

            <div className="bread">
                <ul className="breadcrumb">
                    <li><Link to="#" id="homepage">Home</Link></li>
                    <li>Blog Page</li>
                </ul>
            </div>

        </div>
    )
}

export default Blogpage
