import React from 'react'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'
import ListView from './ListView'

function CategoryMain(props) {


    return (
        <div className="categoryMain">

            <CategoryLeft

                filteredJson={props.filteredJson} />

            {props.isRightOpen && <CategoryRight filteredJson={props.filteredJson} />}
            {!props.isRightOpen && < ListView filteredJson={props.filteredJson} />}

        </div>
    )
}

export default CategoryMain
