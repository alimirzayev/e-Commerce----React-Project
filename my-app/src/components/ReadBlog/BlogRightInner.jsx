import React from 'react'

function BlogRightInner({ detail }) {
    return (
        <div>

            <div className="readOurFirst">

                <div className="readOurFirstLeft">
                    <h5>{detail.title}</h5>
                    <pre>{detail.author}   {detail.date}</pre>
                </div>

                <div className="readOurFirstRight">
                    <img src={detail.img} alt="" />
                </div>

            </div>













            {/* 
                <div className="readOurSecond">

                    <div className="readOurSecondLeft">
                        <h5>Our chef tips for a great and <br/> healthy breakfast</h5>
                        <pre>Author   14.1.2020</pre>
                    </div>

                    <div className="readOurSecondRight">
                        <img src="https://technext.github.io/vegefoods/images/image_6.jpg" alt=""/>
                    </div>

                </div>

                <div className="readOurThird">

                    <div className="readOurThirdLeft">
                        <h5>Prepare a simple and delicious breads</h5>
                        <pre>Author   14.1.2020</pre>
                    </div>

                    <div className="readOurThirdRight">
                        <img src="https://technext.github.io/vegefoods/images/image_5.jpg" alt=""/>
                    </div>

                </div> */}

        </div>
    )
}

export default BlogRightInner
