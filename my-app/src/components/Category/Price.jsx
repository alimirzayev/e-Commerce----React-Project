import React from 'react'

function Price() {

    return (
        <div className="price">
            <h2>Price</h2>

            <div class="slidecontainer">
                <input type="range" min="1" max="100" class="slider" id="myRange" />
            </div>

            <div className="priceBetween">
                <label htmlFor="">Min
                    <input type="number" />
                </label>

                <p>-</p>

                <label htmlFor="">Max
                    <input type="number" />
                </label>
            </div>

            <div className="btn-group">
                <button>Apply</button>
                <a href="">Reset</a>
            </div>

        </div>
    )
}

export default Price
