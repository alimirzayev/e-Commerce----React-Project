import React, { useState, useRef } from 'react'
import { MainContext, useContext } from '../Context';
import CategoryMain from '../components/Category/CategoryMain'
import '../components/Category/Category.css'

function Categorypage() {

    const ctx = useContext(MainContext)

    const [newJson, setNewJson] = useState(ctx.JSONDATA)

    const sortingTitle = () => {
        const jd = newJson.slice().sort((item1, item2) => item1.title.localeCompare(item2.title))
        ctx.update(jd)
    }

    const sortingPrice = () => {
        const jd2 = newJson.slice().sort((item1, item2) => item1.price - item2.price)
        ctx.update(jd2)
    }

    const sortingPriceDes = () => {
        const jd3 = newJson.slice().sort((item1, item2) => item2.price - item1.price);
        ctx.update(jd3)
    }

    const sortingId = () => {
        const jd4 = newJson.slice().sort((item1, item2) => item2.id - item1.id);
        ctx.update(jd4)
    }

    const sortingTitleDes = () => {
        const jd5 = newJson.slice().sort((item1, item2) => item2.title.localeCompare(item1.title))
        ctx.update(jd5)
    }

    const [isRightOpen, setIsRightOpen] = useState(true)
    const [isListOpen, setIsListOpen] = useState(false)

    const gridHandler = () => {
        setIsRightOpen(true)
        setIsListOpen(false)
    }
    const listHandler = () => {
        setIsListOpen(true)
        setIsRightOpen(false)
    }


    const selectedFilter = useRef("Selected Filter None")

    const selectedFilterFunction = (event) => {
        selectedFilter.current.textContent = event.target.value
    }

    return (
        <div className="categoryPage">
            <div className="categoryHeading">

                <div className="categoryHeadingLeft">
                    <h1>Fruit and vegetables</h1>
                </div>

                <div className="categoryHeadingRight">

                    <div onClick={gridHandler} className="gridView">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.334 1.33331H2.66732C1.93094 1.33331 1.33398 1.93027 1.33398 2.66665V13.3333C1.33398 14.0697 1.93094 14.6666 2.66732 14.6666H13.334C14.0704 14.6666 14.6673 14.0697 14.6673 13.3333V2.66665C14.6673 1.93027 14.0704 1.33331 13.334 1.33331Z" stroke="#6A983C" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.33398 8H14.6673" stroke="#6A983C" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 1.33331V14.6666" stroke="#6A983C" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p>Grid view</p>
                    </div>

                    <div onClick={listHandler} className="listVie">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.334 1.33331H2.66732C1.93094 1.33331 1.33398 1.93027 1.33398 2.66665V13.3333C1.33398 14.0697 1.93094 14.6666 2.66732 14.6666H13.334C14.0704 14.6666 14.6673 14.0697 14.6673 13.3333V2.66665C14.6673 1.93027 14.0704 1.33331 13.334 1.33331Z" stroke="#A9A9A9" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.33398 4.66663H14.6673" stroke="#A9A9A9" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.33398 8H14.6673" stroke="#A9A9A9" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.33398 11.3333H14.6673" stroke="#A9A9A9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                        <p>List view</p>
                    </div>

                    <div>
                        <span>{newJson.length}</span>
                        <p>Products</p>
                    </div>

                </div>

            </div>

            <div className="filterContainer">

                <div className="firstFilter">
                    <label onClick={selectedFilterFunction}>
                        <input onClick={sortingPrice} value="Price: Low to High" type="radio" name="same" id="" />
                        Price: Low to High
                    </label>
                    <label onClick={selectedFilterFunction}>
                        <input onClick={sortingPriceDes} value="Price: High to Low" type="radio" name="same" id="" />
                        Price: High to Low
                    </label>
                </div>

                <div className="firstFilter">
                    <label onClick={selectedFilterFunction}>
                        <input onClick={sortingTitle} value={"Title: A to Z"} type="radio" name="same" id="" />
                        Title: A to Z
                    </label>
                    <label onClick={selectedFilterFunction}>
                        <input onClick={sortingTitleDes} value={"Title: Z to A"} type="radio" name="same" id="" />
                        Title: Z to A
                    </label>
                </div>

                <div className="secondFilter thirdFilter">
                    <label onClick={selectedFilterFunction}>
                        <input onClick={sortingId} value={"New Arrivals"} type="radio" name="same" id="" />
                        New Arrivals
                    </label>
                </div>

                <div className="secondFilter thirdFilter">
                    <label onClick={selectedFilterFunction}>
                        <input onClick={sortingId} value={"Discounted"} type="radio" name="same" id="" />
                        Discounted
                    </label>
                </div>

            </div>

            <div className="appliedFilters">
                <span ref={selectedFilter}></span>
            </div>


            <CategoryMain
                isRightOpen={isRightOpen}
                filteredJson={newJson} />
        </div >
    )
}

export default Categorypage
