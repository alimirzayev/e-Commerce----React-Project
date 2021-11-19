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
            <Rating
                filteredRating5={props.filteredRating5}
                filteredRating4={props.filteredRating4}
                filteredRating3={props.filteredRating3}
                filteredRating2={props.filteredRating2}
                filteredRating1={props.filteredRating1}
            />
            <Price />
        </div>
    )
}

export default CategoryLeft
