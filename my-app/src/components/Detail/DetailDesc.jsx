import React, { useState } from 'react'
import { useParams } from 'react-router';
import { connect } from 'react-redux'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'
function DetailDesc(props) {
    let JSONDATA = props.data

    const [value, setValue] = useState(4);

    let { id } = useParams()

    const item = JSONDATA.filter(item => item.id == id)


    return (
        <div className="detailDesc">

            <div className="productImage detailBannerImg">
                <Link to=""
                    href={item[0].img4}
                    data-fancybox="gallery"
                    data-caption="Optional caption"
                >
                    <img src={item[0].img1} alt="" />
                </Link>
            </div>


            <h1>{item[0].title}</h1>

            <div className="detailReview">
                <div>
                    <Rating name="half-rating-read"
                        defaultValue={item[0].rating} precision={0.5} readOnly />
                </div>
                <div>
                    <p className="itemRating">( {item[0].rating} Rating )</p>
                </div>
            </div>

            <div className="detailText">
                <p>
                    {item[0].page}
                </p>
            </div>

            <div className="detailSpec">

                <div className="detailSpecLeft">

                    <div>
                        <p>SKU:</p>

                        <p>{item[0].sku}</p>
                    </div>

                    <div>
                        <p>Category:</p>

                        <p>{item[0].category}</p>
                    </div>

                    <div>
                        <p>Stock:</p>

                        <p>{item[0].stock}</p>
                    </div>

                    <div>
                        <p>Farm:</p>

                        <p>{item[0].farm}</p>
                    </div>

                </div>

                <div className="detailSpecRight">

                    <div>
                        <p>Freshness:</p>

                        <p>{item[0].freshness}</p>
                    </div>

                    <div>
                        <p>Buy by:</p>

                        <p>pcs, kgs, box, pack</p>
                    </div>

                    <div>
                        <p>Delivery:</p>

                        <p>{item[0].delivery}</p>
                    </div>

                    <div>
                        <p>Delivery area:</p>

                        <p>{item[0].area}</p>
                    </div>

                </div>

            </div>

            <div className="detailBuy">

                <div className="detailBuyLeft">
                    <p>{item[0].price} USD</p>
                </div>

                <div className="detailBuyRight">
                    <button>+ Add to cart</button>
                </div>

            </div>

            <div className="detailWish">

                <div>
                    <svg width="20" height="19" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evaenodd" d="M8.70094 2.76001C9.33746 2.12349 10.2008 1.7659 11.1009 1.7659C12.0011 1.7659 12.8644 2.12349 13.5009 2.76001C14.1375 3.39653 14.4951 4.25984 14.4951 5.16001C14.4951 6.06019 14.1375 6.92349 13.5009 7.56001L12.6276 8.43334L7.8276 13.2333L3.0276 8.43334L2.15427 7.56001C1.51775 6.92349 1.16016 6.06019 1.16016 5.16001C1.16016 4.25984 1.51775 3.39653 2.15427 2.76001C2.79079 2.12349 3.65409 1.7659 4.55427 1.7659C5.45444 1.7659 6.31775 2.12349 6.95427 2.76001L7.8276 3.63334L8.70094 2.76001Z" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <p>Add to my wish list</p>
                </div>

                <div>
                    <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_24664:37909)">
                            <path d="M7.16211 1.83322H4.49544C3.75906 1.83322 3.16211 2.43018 3.16211 3.16655V5.83322C3.16211 6.5696 3.75906 7.16655 4.49544 7.16655H7.16211C7.89849 7.16655 8.49544 6.5696 8.49544 5.83322V3.16655C8.49544 2.43018 7.89849 1.83322 7.16211 1.83322Z" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.16211 9.83322H4.49544C3.75906 9.83322 3.16211 10.4302 3.16211 11.1666V13.8332C3.16211 14.5696 3.75906 15.1666 4.49544 15.1666H7.16211C7.89849 15.1666 8.49544 14.5696 8.49544 13.8332V11.1666C8.49544 10.4302 7.89849 9.83322 7.16211 9.83322Z" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.4961 11.1664H10.4961" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.1628 13.8332H10.4961" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.1628 5.83322H10.4961" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.4961 3.16644H10.4961" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_24664:37909">
                                <rect width="16" height="16" fill="white" transform="translate(0.828125 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p>Compare</p>
                </div>
            </div>


        </div>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(DetailDesc)
