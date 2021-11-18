import React from 'react'

function MainLeftCategory() {
    return (
        <div className="mainLeftCategory">
                <h4>Category Menu</h4>
                <ul>
                    <li><a href="">Bakery</a></li>
                    <li><a href="">Fruit and Vegetables</a></li>
                    <li><a href="">Meat and Fish</a></li>
                    <li><a href="">Drinks</a></li>
                    <li><a href="">Kitchen</a></li>
                </ul>
                <button>More Categories <i className="fas fa-angle-right"></i> </button>
            </div>
    )
}

export default MainLeftCategory
