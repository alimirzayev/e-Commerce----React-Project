import React from 'react'
import { Link } from 'react-router-dom'
function MainLeftCategory() {
    return (
        <div className="mainLeftCategory">
            <h4>Category Menu</h4>
            <ul>
                <li><Link to="">Bakery</Link></li>
                <li><Link to="">Fruit and Vegetables</Link></li>
                <li><Link to="">Meat and Fish</Link></li>
                <li><Link to="">Drinks</Link></li>
                <li><Link to="">Kitchen</Link></li>
            </ul>
            <Link to="/category"><button>More Categories <i className="fas fa-angle-right"></i></button></Link>
        </div>
    )
}

export default MainLeftCategory
