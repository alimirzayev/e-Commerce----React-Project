import React, { Fragment, useEffect } from 'react'

import Main from '../components/Main/Main'
import Testimonial from '../components/Testimonial/Testimonial';
import ReadBlog from '../components/ReadBlog/ReadBlog';
import Sec from '../components/Section-Headline/Sec';

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Fragment>
            <Main />
            <Testimonial />
            <hr style={{marginTop: '66px'}} />
            <Sec />
            <ReadBlog />
        </Fragment>
    )
}

export default Home
