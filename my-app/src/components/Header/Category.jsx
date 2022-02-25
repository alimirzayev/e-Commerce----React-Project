import React, { useRef, useEffect } from 'react'
import './Header.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Category(props) {
    const parent = useRef();

    useEffect(() => {
        if (props.blur) {
            parent.current.style.zIndex = "-50";
        } else {
            parent.current.style.zIndex = "51";
        }

    }, [props.blur])

    return (
        <nav ref={parent} className="navbar">
            <ul>
                <li className="dropdown">
                    Bakery
                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li>Bread</li>
                            <li>Cake</li>
                            <li>Biscuits</li>
                            <li>Bagets</li>
                            <li>Muffins</li>
                        </ul>
                    </div>

                </li>

                <li className="dropdown">
                    Fruit and Vegetables
                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li>Apple</li>
                            <li>Banana</li>
                            <li>Cheery</li>
                            <li>Lemon</li>
                            <li>Vegetables</li>
                        </ul>
                    </div>

                </li>

                <li className="dropdown">Meat and fish

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li>Beef</li>
                            <li>Goat</li>
                            <li>Lamb</li>
                            <li>Pork</li>
                            <li>Fishs</li>
                        </ul>
                    </div>

                </li>

                <li className="dropdown">Drinks

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li>Water</li>
                            <li>Milk</li>
                            <li>Juice</li>
                            <li>Beer</li>
                            <li>Wine</li>
                            <li>Soft Drinks</li>
                            <li>Juice Drinks</li>
                        </ul>
                    </div>

                </li>

                <li className="dropdown">Kitchen

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li>Pizza</li>
                            <li>Hamburger</li>
                            <li>Pancake</li>
                            <li>Sauces</li>
                        </ul>
                    </div>

                </li>

                <li className="dropdown">Special nutrition

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li>Dark Green Vegetables</li>
                            <li>Berries</li>
                            <li>Seaweed</li>
                            <li>Salmon</li>
                            <li>Potatoes</li>
                        </ul>
                    </div>

                </li>

                <li className="dropdown">Baby

                    <div className="dropdown-content">
                        <ul className="dropdown-ul">
                            <li>Beech-Nut</li>
                            <li>Cerebelly</li>
                            <li>Nutella</li>
                            <li>Baby Gourmet</li>
                            <li>Sprout</li>
                        </ul>
                    </div>

                </li>

                <li className="dropdown">
                    Pharmacy
                    <div className="dropdown-content end">
                        <ul className="dropdown-ul">
                            <li>Beech-Nut</li>
                            <li>Cerebelly</li>
                            <li>Nutella</li>
                            <li>Baby Gourmet</li>
                            <li>Sprout</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav >
    )
}

let mapStateToProps = state => state
export default connect(mapStateToProps)(Category)
