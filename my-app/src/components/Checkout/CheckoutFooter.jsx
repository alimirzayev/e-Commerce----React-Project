import React from 'react'

function CheckoutFooter() {
    return (
        <div className="checkoutFooter">
            <div className="billingInfoHeading">
                <h2>Additional informations</h2>

                <div>
                    <p>Need something else? We will make it for you!</p>
                    <p>Step 4 of 5</p>
                </div>
            </div>

            <div className="addInformation">
                <label htmlFor="">Order notes <br />
                    <textarea></textarea>
                </label>
            </div>

            <div className="billingInfoHeading">
                <h2>Confirmation</h2>

                <div>
                    <p>We are getting to the end. Just few clicks and your order si ready!</p>
                    <p>Step 5 of 5</p>
                </div>
            </div>

            <div className="confirm">
                <div className="iAgree">
                    <input type="checkbox" name="" id="" />
                    <p>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                </div>

                <div className="iAgree" id="iAgree">
                    <input type="checkbox" name="" id="" />
                    <p>I agree with our terms and conditions and privacy policy.</p>
                </div>

                <button id="btn-complete">Complete order</button>
            </div>

            <div className="security">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.053 5.96007C24.1585 6.01119 23.2612 5.93941 22.3863 5.74674C21.3309 5.38534 20.3438 4.84897 19.4663 4.16007C18.7156 3.62793 18.0028 3.0443 17.333 2.41341C17.049 2.14815 16.6749 2.00061 16.2863 2.00061C15.8977 2.00061 15.5236 2.14815 15.2396 2.41341C14.5876 3.02435 13.9021 3.59857 13.1863 4.13341C12.3034 4.83136 11.3126 5.38079 10.253 5.76007C9.25634 5.98526 8.23255 6.06608 7.21295 6.00007C6.37809 5.9655 5.54574 5.88538 4.71962 5.76007C4.51775 5.73015 4.31191 5.74118 4.1144 5.79251C3.91688 5.84384 3.73172 5.93442 3.56996 6.05885C3.40821 6.18328 3.27316 6.33901 3.17288 6.51675C3.0726 6.6945 3.00914 6.89061 2.98629 7.09341C2.91962 7.73341 2.74629 9.40007 2.66629 11.2534C2.55417 13.1051 2.67061 14.9635 3.01295 16.7867C3.97834 19.8074 5.75388 22.5053 8.14629 24.5867C10.0479 26.3804 12.1098 27.9961 14.3063 29.4134C14.8949 29.8176 15.5922 30.0339 16.3063 30.0339C17.0203 30.0339 17.7176 29.8176 18.3063 29.4134C20.3863 27.9591 22.3318 26.3215 24.1196 24.5201C26.372 22.4234 28.04 19.7766 28.9596 16.8401" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.666 14.6667L18.4793 18.48C18.5031 18.5059 18.5319 18.5265 18.5641 18.5406C18.5962 18.5548 18.6309 18.5621 18.666 18.5621C18.7011 18.5621 18.7358 18.5548 18.768 18.5406C18.8001 18.5265 18.829 18.5059 18.8527 18.48L29.3327 8" stroke="#6A983C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <h5>All your data are safe</h5>

                <p>We are using the most advanced <br /> security to provide you the best <br /> experience ever.</p>

                <p id="copy">Copyright © 2020 Freshnesecom</p>
            </div>
        </div>
    )
}

export default CheckoutFooter
