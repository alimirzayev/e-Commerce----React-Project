import React from 'react'
import Categories from './Categories'
import Brands from './Brands'
import Rating from './Rating'
import Price from './Price'

function CategoryLeft(props) {

    return (
        <div className="categoryLeft">

            <Categories />
            <Brands />
            <Rating />
            <Price />
        </div>
    )
}

export default CategoryLeft
