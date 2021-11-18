import React from 'react'

function BillingInfo() {
    return (
        <div className="billingInfo">

            <div className="billingInfoHeading">
                <h2>Billing info</h2>

                <div>
                    <p>Please enter your billing information</p>
                    <p>Step 1 of 5</p>
                </div>
            </div>

            <div className="billingInfoContainer">
                <div>
                    <label htmlFor="">First Name <br />
                        <input type="text" name="" placeholder="First Name" /> <br />
                    </label>

                    <label htmlFor="">Last Name <br />
                        <input type="text" name="" placeholder="Last Name" /> <br />
                    </label>
                </div>

                <div>
                    <label htmlFor="">Email <br />
                        <input type="email" name="" placeholder="Email" /> <br />
                    </label>

                    <label htmlFor="">Phone Number <br />
                        <input type="number" name="" placeholder="Phone Number" /> <br />
                    </label>
                </div>

                <div>
                    <label htmlFor="">Address <br />
                        <input type="email" name="" placeholder="Address" /> <br />
                    </label>

                    <label htmlFor="">Town / City <br />
                        <input type="number" name="" placeholder="Town or City" /> <br />
                    </label>
                </div>

                <div>
                    <label htmlFor="">State / Country <br />
                        <select name="" id="">
                            <option value="">Choose a state or country</option>
                            <option value="Khazar">Khazar</option>
                            <option value="Khazar">Narimanov</option>
                            <option value="Khazar">Khatai</option>
                        </select>
                    </label>

                    <label htmlFor="">ZIP / Postal code <br />
                        <input type="text" name="" placeholder="Postal code or ZIP" /> <br />
                    </label>
                </div>

                <div>
                    <span>
                        <input type="checkbox" name="" id="checkbox" />
                        <p>Ship to a different address?</p>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default BillingInfo
