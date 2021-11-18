import React from 'react'

function MainLeftSelling() {
    return (
        <div>
            <div className="mainLeftBSell">
                <h4>Best Selling Products</h4>
                <ul>
                    <li><a href="">Bakery</a></li>
                    <li><a href="">Fruit and Vegetables</a></li>
                    <li><a href="">Meat and Fish</a></li>
                    <li><a href="">Drinks</a></li>
                    <li><a href="">Kitchen</a></li>
                    <li><a href="">Special nutrition</a></li>
                </ul>
                <button>More Categories <i className="fas fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default MainLeftSelling
