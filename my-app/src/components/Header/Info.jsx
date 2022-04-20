import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Info() {
    return (
        <div className="topHeader">

            <div className="topHeaderLeft">
                <ul>
                    <li><Link to="">Chat with us</Link></li>
                    <li><Link to="">+420 336 775 664</Link></li>
                    <li><Link to="">info@freshnesecom.com</Link></li>
                </ul>
            </div>

            <div className="topHeaderRight">
                <ul>
                    <li><Link to="/blogpage">Blog</Link></li>
                    <li><a>About Us</a></li>
                    <li><a>Careers</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Info
