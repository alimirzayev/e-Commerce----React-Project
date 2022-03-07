import React from 'react'
import './BlogPageLeft.css'

function BlogPageLeft() {
  return (
    <div className='BlogPageLeft'>

        <div className="blogArchives">

            <div className="blogArchivesHeading">
                <h3>Archives</h3>
            </div>

            <div className="blogArchivesDetail">
                <p>March 2020</p>
                <p>February 2020</p>
                <p>January 2020</p>
                <p>November 2019</p>
                <p>December 2019</p>
            </div>

        </div>

        <div className="blogCategory">

            <div className="blogCategoryHeading">
                <h3>Category</h3>
            </div>

            <div className="blogCategoryDetail">
                <p>Food</p>
                <p>Chefs specialities</p>
                <p>Vegetable</p>
                <p>Meat</p>
                <p>Recommendations</p>
            </div>
            
        </div>

        <div className="blogJoin">
            
            <div className="blogJoinHeading">
                <h3>Join</h3>
            </div>

            <div className="blogJoinDetail">
                <p>
                Signup to be the first to hear about exclusive deals, special offers, recepies from our masters and others.
                </p>
            </div>

            <div className="blogJoinButton">

            <input type="text" placeholder='Your email address' />

            </div>

        </div>

    </div>
  )
}

export default BlogPageLeft