import React from 'react'
import { useState } from 'react';
import './Header.css';
import JSONDATA from '../Main/Search.json'

function Search() {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="mainHeaderMiddle">
            <div className="mainHeaderMiddleContainer">

                <div className="mainHeaderMiddleSelect">
                    <select>
                        <option value="0">All Categories:</option>
                        <option value="1">Fruits</option>
                        <option value="2">Vegetables</option>
                        <option value="3">Best Sellers</option>
                        <option value="4">New Comings</option>
                    </select>
                </div>

                <div className="mainHeaderMiddleInput">
                    <input onChange={e => { setSearchTerm(e.target.value) }}
                        type="text" placeholder="Search Products, categories ..." />
                </div>

            </div>

            <div className="searchDrop">
                {JSONDATA.filter((val) => {
                    if (searchTerm == '') {

                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div className="itemSearch" key={key}>
                            <img src={val.img} alt="" />
                            <h3 className="">{val.title}</h3>
                            <h3 className="">{val.price}$</h3>
                            <button id="buynow" className="">Buy Now</button>
                        </div>

                    )
                })}
            </div>

        </div>


    )
}

export default Search
