import React from 'react'
import './Header.css';

function Category() {
    return (
        <nav className="navbar">
            <ul>
                <li className="dropdown"><a href="">Bakery
                        <div className="dropdown-content">
                            <ul className="dropdown-ul">
                                <li><a href="">Bread</a></li>
                                <li><a href="">Cake</a></li>
                                <li><a href="">Biscuits</a></li>
                                <li><a href="">Bagets</a></li>
                                <li><a href="">Muffins</a></li>
                            </ul>
                        </div>

                    </a></li>

                <li className="dropdown"><a href="">Fruit and Vegetables

                        <div className="dropdown-content">
                            <ul className="dropdown-ul">
                                <li><a href="">Apple</a></li>
                                <li><a href="">Banana</a></li>
                                <li><a href="">Cheery</a></li>
                                <li><a href="">Lemon</a></li>
                                <li><a href="">Vegetables</a></li>
                            </ul>
                        </div>

                    </a></li>

                <li className="dropdown"><a href="">Meat and fish

                        <div className="dropdown-content">
                            <ul className="dropdown-ul">
                                <li><a href="">Beef</a></li>
                                <li><a href="">Goat</a></li>
                                <li><a href="">Lamb</a></li>
                                <li><a href="">Pork</a></li>
                                <li><a href="">Fishs</a></li>
                            </ul>
                        </div>

                    </a></li>

                <li className="dropdown"><a href="">Drinks

                        <div className="dropdown-content">
                            <ul className="dropdown-ul">
                                <li><a href="">Water</a></li>
                                <li><a href="">Milk</a></li>
                                <li><a href="">Juice</a></li>
                                <li><a href="">Beer</a></li>
                                <li><a href="">Wine</a></li>
                                <li><a href="">Soft Drinks</a></li>
                                <li><a href="">Juice Drinks</a></li>
                            </ul>
                        </div>

                    </a></li>

                <li className="dropdown"><a href="">Kitchen

                        <div className="dropdown-content">
                            <ul className="dropdown-ul">
                                <li><a href="">Pizza</a></li>
                                <li><a href="">Hamburger</a></li>
                                <li><a href="">Pancake</a></li>
                                <li><a href="">Sauces</a></li>
                            </ul>
                        </div>

                    </a></li>

                <li className="dropdown"><a href="">Special nutrition

                        <div className="dropdown-content">
                            <ul className="dropdown-ul">
                                <li><a href="">Dark Green Vegetables</a></li>
                                <li><a href="">Berries</a></li>
                                <li><a href="">Seaweed</a></li>
                                <li><a href="">Salmon</a></li>
                                <li><a href="">Potatoes</a></li>
                            </ul>
                        </div>

                    </a></li>

                <li className="dropdown"><a href="">Baby

                        <div className="dropdown-content">
                            <ul className="dropdown-ul">
                                <li><a href="">Beech-Nut</a></li>
                                <li><a href="">Cerebelly</a></li>
                                <li><a href="">Nutella</a></li>
                                <li><a href="">Baby Gourmet</a></li>
                                <li><a href="">Sprout</a></li>
                            </ul>
                        </div>

                    </a></li>

                <li className="dropdown"><a href="">Pharmacy

                        <div className="dropdown-content end">
                            <ul className="dropdown-ul">
                                <li><a href="">Beech-Nut</a></li>
                                <li><a href="">Cerebelly</a></li>
                                <li><a href="">Nutella</a></li>
                                <li><a href="">Baby Gourmet</a></li>
                                <li><a href="">Sprout</a></li>
                            </ul>
                        </div>

                    </a></li>
            </ul>
        </nav>
    )
}

export default Category
