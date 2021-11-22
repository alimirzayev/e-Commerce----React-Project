import React, { useState } from 'react'
import { MainContext, useContext } from '../../Context';
import Slider from '@mui/material/Slider';

function Price() {

    const ctx = useContext(MainContext)

    const [value, setValue] = useState([0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const jd11 = ctx.JSONDATA.filter((val) => val.price > newValue[0] && val.price < newValue[1]);
        ctx.update(jd11);
    };

    return (
        <div className="price">
            <h2>Price</h2>

            <div class="slidecontainer">
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"

                />
            </div>

            <div className="priceBetween">
                <label htmlFor="">Min
                    <input disabled type="number" value={value[0]} />
                </label>

                <p>-</p>

                <label htmlFor="">Max
                    <input disabled type="number" value={value[1]} />
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
