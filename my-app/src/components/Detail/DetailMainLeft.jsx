import { React } from 'react'
import { useParams } from 'react-router';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
function DetailMainLeft(props) {
    let JSONDATA = props.data
    let { id } = useParams()

    const item = JSONDATA.filter(item => item.id == id)

    return (
        <div className="detailMainLeft">
            <div className="productImage">
                <Link to=""
                    href={item[0].img1}
                    data-fancybox="gallery"
                    data-caption="Optional caption"
                >
                    <img src={item[0].img1} alt="" />
                </Link>
            </div>
            <div className="productImage">
                <Link to=""
                    href={item[0].img2}
                    data-fancybox="gallery"
                    data-caption="Optional caption"
                >
                    <img src={item[0].img2} alt="" />
                </Link>
            </div>
            <div className="productImage">
                <Link to=""
                    href={item[0].img3}
                    data-fancybox="gallery"
                    data-caption="Optional caption"
                >
                    <img src={item[0].img3} alt="" />
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(DetailMainLeft)
