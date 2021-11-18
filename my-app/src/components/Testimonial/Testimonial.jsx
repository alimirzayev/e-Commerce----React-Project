import React from 'react'
import Review from './Review'
import './Testimonial.css';

function Testimonial() {

    let first = {
        review: "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here",
        author: "Name and Surname"
    }

    let second = {
        review: "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here",
        author: "Name and Surname"
    }

    let third = {
        review: "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here",
        author: "Name and Surname"
    }

    let fourth = {
        review: "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here",
        author: "Name and Surname"
    }

    let fifth = {
        review: "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here",
        author: "Name and Surname"
    }

    let sixth = {
        review: "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here",
        author: "Name and Surname"
    }

    return (
        <div className="ourCustomers">

            <div className="sectionHeading">

            <h3>Our customers says</h3>
            <a href="#">Button <i className="fas fa-angle-right"></i></a>

            </div>
            
            <div className="ourCustomersSays">
            <Review detail={first} />
            <Review detail={second}  />
            <Review detail={third} />
            <Review detail={fourth} />
            <Review detail={fifth} />
            <Review detail={sixth} />
            </div>
        </div>
    )
}

export default Testimonial
