import React from 'react'
import { Link } from 'react-router-dom'

function FooterInner() {
    return (
        <div className="footer1">
            <ul>
                <h5>Get in touch</h5>
                <Link to="">
                    <li>About Us</li>
                </Link>
                <Link to="">
                    <li>Careers</li>
                </Link>
                <Link to="">
                    <li>Press Releases</li>
                </Link>
                <Link to="">
                    <li>Blog</li>
                </Link>
            </ul>
        </div>
    )
}

export default FooterInner
