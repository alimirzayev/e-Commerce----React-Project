import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './BlogPageInner.css'

function BlogPageInner() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='BlogPageInner'>

        <div className="bread">
            <ul className="breadcrumb">
                <li><Link to="#" id="homepage">Home</Link></li>
                <li>Blog Page</li>
            </ul>
        </div>

        
        <div className="blog-page-inner-top">
            <div className='blog-page-inner-heading'>
                <h1>Space for your heading, can be larger so don’t worry - large heading looks better</h1>
            </div>
        </div>

        <div className="blog-page-inner-desc">

            <div className='blog-page-inner-first'>
                <p>
                There’s nothing like a warm cup of tea to start your morning—or maybe you’re all about an iced hibiscus on a sunny Saturday afternoon. Whether you’re just craving chamomile or are looking to ditch your coffee dependency, here’s our go-to guide on incorporating a few new teas into your daily routine! 
                </p>
            </div>

            <div className="blog-page-inner-second">
                <span>Morning Ritual // 9:00 AM</span>
                <p>Want that extra morning energy without the caffeine jitters? Switch out your morning mug of coffee for a warm, energizing cup of earl grey. Serve as is or stir in some milk and honey for extra coziness. If you want to spice things up, try chai tea instead! The combination of cinnamon, cardamom, and ginger smells amazing and gives you that nice little flavor kick to start your day off right.</p>
            </div>

            <div className="blog-page-inner-third">
                <span>Morning Ritual // 9:00 AM</span>
                <p>Want that extra morning energy without the caffeine jitters? Switch out your morning mug of coffee for a warm, energizing cup of earl grey. Serve as is or stir in some milk and honey for extra coziness. If you want to spice things up, try chai tea instead! The combination of cinnamon, cardamom, and ginger smells amazing and gives you that nice little flavor kick to start your day off right.</p>
            </div>

            <div className="blog-page-inner-fourth">
                <span>Morning Ritual // 9:00 AM</span>
                <p>Want that extra morning energy without the caffeine jitters? Switch out your morning mug of coffee for a warm, energizing cup of earl grey. Serve as is or stir in some milk and honey for extra coziness. If you want to spice things up, try chai tea instead! The combination of cinnamon, cardamom, and ginger smells amazing and gives you that nice little flavor kick to start your day off right.</p>
            </div>
            
            <div className="blog-page-social-icons">

                <div className="blog-page-social-share">
                    <p>Share</p>
                </div>

                <div className="blog-page-social-fb">
                    <p>Facebook</p>
                </div>

                <div className="blog-page-social-pin">
                    <p>Pinterest</p>
                </div>

                <div className="blog-page-social-twitter">
                    <p>Twitter</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default BlogPageInner