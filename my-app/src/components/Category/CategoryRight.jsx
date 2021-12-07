import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function CategoryRight(props) {

    let JSONDATA = props.dynamicData

    return (
        <div className="categoryRight">

            {JSONDATA.map((val, key) => {

                return (
                    <div className="mainRightCard1 card" id="card" key={key}>
                        <Link to={`/products/${val.id}`}>
                            <img className="card-img"
                                src={val.img} />
                            <h3 className="card-title">{val.title}</h3>
                            <p>{val.desc}</p>
                        </Link>
                        <div className="cardContainer">
                            <h3 className="card-price">{val.price} USD</h3>
                            <button id="buynow" className="button" > Add to Cart </button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

let mapStateToProps = state => state
export default connect(mapStateToProps)(CategoryRight)
