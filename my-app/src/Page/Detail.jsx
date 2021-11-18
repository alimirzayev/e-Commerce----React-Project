import React from 'react'
import '../assets/Detail.css'
import Sec from '../components/Section-Headline/Sec'
import DetailMain from '../components/Detail/DetailMain'

function Detail() {
    return (
        <div className="detail">
            <div className="bread">
                <ul class="breadcrumb">
                    <li><a href="#" id="homepage">Home</a></li>
                    <li>Product Page</li>
                </ul>
            </div>

            <DetailMain />

            <Sec />

        </div>
    )
}

export default Detail
