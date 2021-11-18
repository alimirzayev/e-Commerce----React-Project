import React from 'react'
import './Header.css';

function Info() {
    return (
        <div className="topHeader">
            
            <div className="topHeaderLeft">
                <ul>
                    <li><a>Chat with us</a></li>
                    <li><a>+420 336 775 664</a></li>
                    <li><a>info@freshnesecom.com</a></li>
                </ul>
            </div>

            <div className="topHeaderRight">
                <ul>
                    <li><a>Blog</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Careers</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Info
