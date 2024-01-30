import React from 'react'
import './css/HomeAbout.css'
import { Link } from 'react-router-dom'
const HomeAbout = () => {
  return (
   <>
    <div className="home-service-heading home-about-heading">
        <h1>Who are We ?</h1>
        <Link to="/about">Get More</Link>
      </div>
      <div className="home-about-content">
      <div className="home-about-right-content">
            <img src={require('../Image/about-me.jpg')} alt="" />
        </div>
        <div className="home-about-left-content">
            <h2>Welcome to Singh Ji Palace</h2>
            <p>Welcome to Singh Ji Palace, a trailblazing company committed to transforming the way we communicate and addressing real-world challenges. Established 2024, we've been at the forefront of cutting-edge technologies in speech-to-text, text-to-speech, and innovative solutions.</p>
            <h2>Our Journey</h2>
            <p>From our humble beginnings, we embarked on a mission to bridge communication gaps and provide accessible, inclusive solutions. Over the years, our passion for technology and dedication to solving real-world problems have shaped Singh Ji Palace into a recognized leader in our field.</p>
        </div>
        
      </div>
   </>
  )
}

export default HomeAbout