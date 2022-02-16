import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

function Category() {
    return (
        <nav className="navbar">
            <ul>
                <li className="dropdown"><Link to="">Bakery
                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li><Link to="">Bread</Link></li>
                            <li><Link to="">Cake</Link></li>
                            <li><Link to="">Biscuits</Link></li>
                            <li><Link to="">Bagets</Link></li>
                            <li><Link to="">Muffins</Link></li>
                        </ul>
                    </div>

                </Link></li>

                <li className="dropdown"><Link to="">Fruit and Vegetables

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li><Link to="">Apple</Link></li>
                            <li><Link to="">Banana</Link></li>
                            <li><Link to="">Cheery</Link></li>
                            <li><Link to="">Lemon</Link></li>
                            <li><Link to="">Vegetables</Link></li>
                        </ul>
                    </div>

                </Link></li>

                <li className="dropdown"><Link to="">Meat and fish

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li><Link to="">Beef</Link></li>
                            <li><Link to="">Goat</Link></li>
                            <li><Link to="">Lamb</Link></li>
                            <li><Link to="">Pork</Link></li>
                            <li><Link to="">Fishs</Link></li>
                        </ul>
                    </div>

                </Link></li>

                <li className="dropdown"><Link to="">Drinks

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li><Link to="">Water</Link></li>
                            <li><Link to="">Milk</Link></li>
                            <li><Link to="">Juice</Link></li>
                            <li><Link to="">Beer</Link></li>
                            <li><Link to="">Wine</Link></li>
                            <li><Link to="">Soft Drinks</Link></li>
                            <li><Link to="">Juice Drinks</Link></li>
                        </ul>
                    </div>

                </Link></li>

                <li className="dropdown"><Link to="">Kitchen

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li><Link to="">Pizza</Link></li>
                            <li><Link to="">Hamburger</Link></li>
                            <li><Link to="">Pancake</Link></li>
                            <li><Link to="">Sauces</Link></li>
                        </ul>
                    </div>

                </Link></li>

                <li className="dropdown"><Link to="">Special nutrition

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li><Link to="">Dark Green Vegetables</Link></li>
                            <li><Link to="">Berries</Link></li>
                            <li><Link to="">Seaweed</Link></li>
                            <li><Link to="">Salmon</Link></li>
                            <li><Link to="">Potatoes</Link></li>
                        </ul>
                    </div>

                </Link></li>

                <li className="dropdown"><Link to="">Baby

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li><Link to="">Beech-Nut</Link></li>
                            <li><Link to="">Cerebelly</Link></li>
                            <li><Link to="">Nutella</Link></li>
                            <li><Link to="">Baby Gourmet</Link></li>
                            <li><Link to="">Sprout</Link></li>
                        </ul>
                    </div>

                </Link></li>

                <li className="dropdown"><Link to="">Pharmacy

                    <div className="dropdown-content end">
                        <ul className="dropdown-ul">
                            <li><Link to="">Beech-Nut</Link></li>
                            <li><Link to="">Cerebelly</Link></li>
                            <li><Link to="">Nutella</Link></li>
                            <li><Link to="">Baby Gourmet</Link></li>
                            <li><Link to="">Sprout</Link></li>
                        </ul>
                    </div>

                </Link></li>
            </ul>
        </nav>
    )
}

export default Category
