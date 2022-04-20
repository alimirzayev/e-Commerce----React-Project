import React from 'react'
import Vitamin from './Vitamin.json'

function Description() {

    return (
        <div className="Description">

            <div className="origins">
                <h4>Origins</h4>
                <p>We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.
                </p>
            </div>

            <div className="howCook">
                <h4>How To Cook</h4>
                <p>From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p>
            </div>

            <div className="fullVitamins">
                <h4>Full of Vitamins!</h4>

                <div>
                    <table className="wp-table">
                        <thead>
                            <tr>
                                <th>Vitamins</th>
                                <th>Quantity</th>
                                <th>% DV</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Vitamin.map(vitamins => (
                                <tr key={vitamins.id}>
                                    <td>{vitamins.vitaminame}</td>
                                    <td>{vitamins.quantity}</td>
                                    <td>{vitamins.dv}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    )
}

export default Description
