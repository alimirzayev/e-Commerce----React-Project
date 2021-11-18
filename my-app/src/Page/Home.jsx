import React from 'react'

import Main from '../components/Main/Main'
import Testimonial from '../components/Testimonial/Testimonial';
import ReadBlog from '../components/ReadBlog/ReadBlog';
import Sec from '../components/Section-Headline/Sec';

function Home() {
    return (
        <div>
            <Main />
            <Testimonial />
            <hr />
            <Sec />
            <ReadBlog />
        </div>
    )
}

export default Home
