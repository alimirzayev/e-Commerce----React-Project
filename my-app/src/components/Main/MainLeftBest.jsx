import React from 'react'
import { Link } from 'react-router-dom'
function MainLeftBest() {
    return (
        <div className="mainLeftBest">
            <h4>Best From Farmers</h4>
            <ul>
                <li><Link to="">Bakery</Link></li>
                <li><Link to="">Fruit and Vegetables</Link></li>
                <li><Link to="">Meat and Fish</Link></li>
                <li><Link to="">Drinks</Link></li>
                <li><Link to="">Kitchen</Link></li>
                <li><Link to="">Pharmacy</Link></li>
            </ul>
            <Link to="/category"><button>More Categories <i className="fas fa-angle-right"></i></button></Link>
        </div>
    )
}

export default MainLeftBest
