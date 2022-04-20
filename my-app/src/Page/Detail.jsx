import React, { useRef, useEffect } from 'react'
import '../assets/Detail.css'
import Sec from '../components/Section-Headline/Sec'
import DetailMain from '../components/Detail/DetailMain'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Detail(props) {
    const parent = useRef();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (props.toggle) {
            parent.current.style.zIndex = "-50";
            parent.current.style.filter = "blur(20px)";
        } else {
            parent.current.style.zIndex = "50";
            parent.current.style.filter = "blur(0px)";
        }

    }, [props.toggle])

    useEffect(() => {
        if (props.blur) {
            parent.current.style.zIndex = "-50";
        } else {
            parent.current.style.zIndex = "50";
        }

    }, [props.blur])

    return (
        <div ref={parent} className="detail">
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

let mapStateToProps = state => state;
export default connect(mapStateToProps)(Detail)
