import React, { useState } from 'react'
import { connect } from 'react-redux';
import Slider from '@mui/material/Slider';

function Price(props) {

    const [value, setValue] = useState([0, 100]);
    let JSONDATA = props.data

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.dispatch({ type: "PriceBetween", value: newValue })
        const jd11 = JSONDATA.filter((val) => val.price > newValue[0] && val.price < newValue[1]);
    };

    return (
        <div className="price">
            <h2>Price</h2>

            <div className="slidecontainer">
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

        </div>
    )
}
let mapStateToProps = state => state
export default connect(mapStateToProps)(Price)
