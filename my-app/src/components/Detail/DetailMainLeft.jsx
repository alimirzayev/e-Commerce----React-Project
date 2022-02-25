import { React } from 'react'
import { useParams } from 'react-router';
import { connect } from 'react-redux'

function DetailMainLeft(props) {
    let JSONDATA = props.data
    let { id } = useParams()

    const item = JSONDATA.filter(item => item.id == id)

    return (
        <div className="detailMainLeft">
            <div className="productImage">
                <a
                    href={item[0].img1}
                    data-fancybox="gallery"
                    data-caption="Optional caption"
                >
                    <img src={item[0].img1} alt="" />
                </a>
            </div>
            <div className="productImage">
                <a
                    href={item[0].img2}
                    data-fancybox="gallery"
                    data-caption="Optional caption"
                >
                    <img src={item[0].img2} alt="" />
                </a>
            </div>
            <div className="productImage">
                <a
                    href={item[0].img3}
                    data-fancybox="gallery"
                    data-caption="Optional caption"
                >
                    <img src={item[0].img3} alt="" />
                </a>
            </div>
        </div>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(DetailMainLeft)
