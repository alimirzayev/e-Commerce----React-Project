import React from 'react'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'
import ListView from './ListView'

function CategoryMain(props) {


    return (
        <div className="categoryMain">

            <CategoryLeft />

            {props.isRightOpen && <CategoryRight />}
            {!props.isRightOpen && < ListView />}

        </div>
    )
}

export default CategoryMain
