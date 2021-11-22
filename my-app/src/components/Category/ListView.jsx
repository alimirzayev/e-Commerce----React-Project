import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { MainContext, useContext } from '../../Context';


function ListView(props) {
    const ctx = useContext(MainContext)
    const [newJson, setNewJson] = useState(ctx.JSONDATA)

    const { addItem, inCart } = useCart();

    return (
        <div className="categoryRight listView">

            {ctx.newJson.map((val, key) => {

                const alreadyAdded = inCart(val.id);

                return (
                    <div className="list-cart">

                        <Link to={`/products/${val.id}`}>
                            <div className="list-cart-left">
                                <img src={val.img} alt="" />
                            </div>
                        </Link>

                        <div className="list-cart-middle">
                            <div className="list-card-middle-inner-top">
                                <div><h2>{val.title}</h2></div>
                                <div><p>{val.desc}</p></div>
                                <div style={{ cursor: "pointer", }}>
                                    <Rating key={val.key}
                                        name="half-rating-read"
                                        defaultValue={val.rating}
                                        precision={0.5}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="list-card-middle-inner-bottom">
                                <div>
                                    <p>Fresheness</p>
                                    <p style={{ color: "green" }}>{val.freshness}</p>
                                </div>

                                <div>
                                    <p>Farm</p>
                                    <p>{val.farm}</p>
                                </div>

                                <div>
                                    <p>Delivery</p>
                                    <p>{val.area}</p>
                                </div>

                                <div>
                                    <p>Stock</p>
                                    <p style={{ color: "green" }}>{val.stock}</p>
                                </div>

                            </div>
                        </div>

                        <div className="list-cart-end">
                            <div>
                                <h2>{val.price} USD</h2>
                                <h4>{val.discount} USD</h4>
                            </div>

                            <div className="list-free">
                                <p>Free Shipping</p>
                                <p>Delivery in {val.delivery}</p>
                            </div>

                            <div>
                                <button>Product Detail</button> <br />
                                <button>
                                    <i class="far fa-heart"></i>
                                    <p>Add to wish list</p>
                                </button>
                            </div>
                        </div>

                    </div>
                )
            })}

        </div >
    )
}

export default ListView
