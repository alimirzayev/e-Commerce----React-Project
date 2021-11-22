import React, { useState, useEffect } from 'react'

import { MainContext, useContext } from '../../Context';

import Slider from '@mui/material/Slider';
function Price() {

    const { appendMethods } = useContext(MainContext)

    const [value, setValue] = useState([0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valuetext(value) {
        return `${value}`;
    }

    useEffect(() => {
        // if (frs !== 1) {
        //     int1 = setInterval(() => {
        //         appendMethods({ value })
        //         console.log(value)
        //     }, 2000);
        // }
        // frs = 0;
        // return () => {
        //     clearInterval(int1)
        // };
        appendMethods({ value })
        console.log('appended')
    }, [value])

    return (
        <div className="price">
            <h2>Price</h2>

            <div class="slidecontainer">
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </div>

            <div className="priceBetween">
                <label htmlFor="">Min
                    <input type="number" value={value[0]} />
                </label>

                <p>-</p>

                <label htmlFor="">Max
                    <input type="number" value={value[1]} />
                </label>
            </div>

            {/* <div className="btn-group">
                <button>Apply</button>
                <a href="">Reset</a>
            </div> */}

        </div>
    )
}

export default Price
