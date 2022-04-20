import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {


    return (
        <footer>

            <div className="footer1">
                <ul>
                    <h5>Get in touch</h5>
                    <Link to="/">
                        <li>About Us</li>
                    </Link>
                    <Link to="/">
                        <li>Careers</li>
                    </Link>
                    <Link to="/">
                        <li>Press Releases</li>
                    </Link>
                    <Link to="/">
                        <li>Blog</li>
                    </Link>
                </ul>
            </div>

            <div className="footer2">
                <ul>
                    <h5>Connections</h5>
                    <Link to="/">
                        <li>Facebook</li>
                    </Link>
                    <Link to="/">
                        <li>Twitter</li>
                    </Link>
                    <Link to="/">
                        <li>Instagram</li>
                    </Link>
                    <Link to="/">
                        <li>Youtube</li>
                    </Link>
                    <Link to="/">
                        <li>linkedin</li>
                    </Link>
                </ul>
            </div>

            <div className="footer3">
                <ul>
                    <h5>Get in touch</h5>
                    <Link to="/">
                        <li>Become an Affiliate</li>
                    </Link>
                    <Link to="/">
                        <li>Advertise your product</li>
                    </Link>
                    <Link to="/">
                        <li>Sell on Market</li>
                    </Link>
                </ul>
            </div>

            <div className="footer4">
                <ul>
                    <h5>Account</h5>
                    <Link to="/">
                        <li>Your Account</li>
                    </Link>
                    <Link to="/">
                        <li>Returns Centre</li>
                    </Link>
                    <Link to="/">
                        <li>100 % purchase protection</li>
                    </Link>
                    <Link to="/">
                        <li>Chat with us</li>
                    </Link>
                    <Link to="/">
                        <li>Help</li>
                    </Link>
                </ul>
            </div>

        </footer>
    )
}

export default Footer
