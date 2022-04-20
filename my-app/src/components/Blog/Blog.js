import React,{useEffect} from 'react'
import BlogLeft from '../ReadBlog/BlogLeft'
import './Blog.css';
import BlogPageLeft from './BlogPageLeft';
import BlogPageRight from './BlogPageRight';

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='blog-container'>

        <div className="blog-container-first-section">

            <div className="blog-container-first-left">
                <BlogLeft/>
            </div>

            <div className="blog-container-first-right">
                <BlogLeft/>
            </div>

        </div>
        
        <div className='blog-container-second-section'>
          
          <BlogPageLeft/>
          <BlogPageRight/>

        </div>

    </div>
  )
}

export default Blog