import React, { useRef } from 'react'
import './Section.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
function Sec(props) {

    let JSONDATA = props.data

    const imageSrc = useRef()

    const addwishlist = (event) => {
        console.log(imageSrc.current.src);
    }

    const wishlist = () => {
        props.dispatch({ type: "Wishlist", value: addwishlist })
    }


    return (
        <div className="headline">

            <div className="sectionHeading">

                <h3>Section Headline</h3>
                <Link to="">Button <i className="fas fa-angle-right"></i></Link>

            </div>

            <div className="headlineCards">
                {JSONDATA.slice(4, 8).map((val, key) => {

                    return (
                        <div className="mainRightCard1 card" key={key}>
                            <Link to={`/products/${val.id}`}>
                                <img ref={imageSrc} className="card-img"
                                    src={val.img} />
                                <h3 className="card-title">{val.title}</h3>
                                <p>{val.desc}</p>
                            </Link>

                            <div className="cardContainer">
                                <h3 className="card-price">{val.price} USD</h3>
                                <button id="buynow" className="button"
                                    onClick={addwishlist}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Sec)
