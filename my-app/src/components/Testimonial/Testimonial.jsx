import React from 'react'
import './Testimonial.css';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Navigation } from 'swiper';

function Testimonial() {

    SwiperCore.use([Navigation]);
    return (
        <div style={{ marginTop: "60px" }}>

            <Swiper navigation={true} className="mySwiper ">

                <SwiperSlide className="sliderContainer">
                    <div className="firstReview" id="firstReview">

                        <p>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>

                        <span>Name and Surname</span>

                        <div className="reviewCircle"></div>

                    </div>

                    <div className="firstReview notActiveMobile" id="firstReview">

                        <p>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>

                        <span>Name and Surname</span>

                        <div className="reviewCircle"></div>

                    </div>

                    <div className="firstReview notActiveMobile" id="firstReview">

                        <p>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>

                        <span>Name and Surname</span>

                        <div className="reviewCircle"></div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className="sliderContainer">
                    <div className="firstReview" id="firstReview">

                        <p>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>

                        <span>Name and Surname</span>

                        <div className="reviewCircle"></div>

                    </div>

                    <div className="firstReview notActiveMobile" id="firstReview">

                        <p>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>

                        <span>Name and Surname</span>

                        <div className="reviewCircle"></div>

                    </div>

                    <div className="firstReview notActiveMobile" id="firstReview">

                        <p>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>

                        <span>Name and Surname</span>

                        <div className="reviewCircle"></div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className="sliderContainer">
                    <div className="firstReview" id="firstReview">

                        <p>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>

                        <span>Name and Surname</span>

                        <div className="reviewCircle"></div>

                    </div>

                    <div className="firstReview notActiveMobile" id="firstReview">

                        <p>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>

                        <span>Name and Surname</span>

                        <div className="reviewCircle"></div>

                    </div>

                    <div className="firstReview notActiveMobile" id="firstReview">

                        <p>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>

                        <span>Name and Surname</span>

                        <div className="reviewCircle"></div>

                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default Testimonial
