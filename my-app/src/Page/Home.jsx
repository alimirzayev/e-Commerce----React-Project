import React, { Fragment } from 'react'

import Main from '../components/Main/Main'
import Testimonial from '../components/Testimonial/Testimonial';
import ReadBlog from '../components/ReadBlog/ReadBlog';
import Sec from '../components/Section-Headline/Sec';

function Home() {
    return (
        <Fragment>
            <Main />
            <Testimonial />
            <hr />
            <Sec />
            <ReadBlog />
        </Fragment>
    )
}

export default Home
