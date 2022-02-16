import React from 'react'
import '../assets/Detail.css'
import Sec from '../components/Section-Headline/Sec'
import DetailMain from '../components/Detail/DetailMain'
import { Link } from 'react-router-dom'

function Detail() {
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
