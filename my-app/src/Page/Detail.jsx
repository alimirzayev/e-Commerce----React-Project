import React, { useEffect } from 'react'
import '../assets/Detail.css'
import Sec from '../components/Section-Headline/Sec'
import DetailMain from '../components/Detail/DetailMain'
import { Link } from 'react-router-dom'

function Detail() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="detail">
            <div className="bread">
                <ul className="breadcrumb">
                    <li><Link to="#" id="homepage">Home</Link></li>
                    <li>Product Page</li>
                </ul>
            </div>

            <DetailMain />

            <Sec />

        </div>
    )
}

export default Detail
