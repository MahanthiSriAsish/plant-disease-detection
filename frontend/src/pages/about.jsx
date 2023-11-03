import React from 'react'
import Navbar from '../Components/Header'
import "../css/about.css"
import image from "../pictures/pic1.jpeg" 

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="heading">
                <h1>About Us</h1>
                <p>Plant diseases and pests are important factors determining the yield and quality of plants
                    The problem statement for photo-based plant disease detection and treatment is to identify plant diseases
                    and</p>
            </div>
            <div className="container">
                <section className="about">
                    <div className="about-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="about-content">
                        <h2>AI WEB-BASED APP</h2>
                        <p>  pests by means of Machine Learning.
                            The goal is to develop an AI/ML model that can detect plant diseases and pests from images captured by
                            cameras
                            in a smartphone.</p>

                        <a href="" className="read-more">read more</a>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default About