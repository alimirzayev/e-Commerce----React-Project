import React, { useState, useEffect } from 'react'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'
import ListView from './ListView'

function CategoryMain(props) {


    return (
        <div className="categoryMain">

            <CategoryLeft
                filteredRating5={props.filteredRating5}
                filteredRating4={props.filteredRating4}
                filteredRating3={props.filteredRating3}
                filteredJson={props.filteredJson} />

            {props.isRightOpen && <CategoryRight filteredJson={props.filteredJson} />}
            {!props.isRightOpen && < ListView filteredJson={props.filteredJson} />}

        </div>
    )
}

export default CategoryMain
