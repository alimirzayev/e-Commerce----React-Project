import React from 'react'

function BlogRightInner({detail}) {
    return (
        <div>
            
            <div class="readOurFirst">

                    <div class="readOurFirstLeft">
                        <h5>{detail.title}</h5>
                        <pre>{detail.author}   {detail.date}</pre>
                    </div>

                    <div class="readOurFirstRight">
                        <img src={detail.img} alt=""/>
                    </div>

            </div>













{/* 
                <div class="readOurSecond">

                    <div class="readOurSecondLeft">
                        <h5>Our chef tips for a great and <br/> healthy breakfast</h5>
                        <pre>Author   14.1.2020</pre>
                    </div>

                    <div class="readOurSecondRight">
                        <img src="https://technext.github.io/vegefoods/images/image_6.jpg" alt=""/>
                    </div>

                </div>

                <div class="readOurThird">

                    <div class="readOurThirdLeft">
                        <h5>Prepare a simple and delicious breads</h5>
                        <pre>Author   14.1.2020</pre>
                    </div>

                    <div class="readOurThirdRight">
                        <img src="https://technext.github.io/vegefoods/images/image_5.jpg" alt=""/>
                    </div>

                </div> */}

        </div>
    )
}

export default BlogRightInner
