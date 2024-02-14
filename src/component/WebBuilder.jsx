import React from 'react'
import ScrollToTop from './ScrollToTop'
import './css/WebBuilder.css'
import { Link } from 'react-router-dom'
const WebBuilder = () => {
  return (
    <div className="web-builder">
      <ScrollToTop />
      <div className="web-building-header">
        <h1>Website Bulilding</h1>
      </div>
      <div className="web-building-content">
        <div className="web-building-left-content">
          <h1>Transform the way you build and design websites
          </h1>
          <p>Explore productivity-enabling tools that cut build times in half and empower your team to work better together. Leverage native AI tools and predesigned elements, create shareable designs, collect and import content, and build websites that are ready to go in minutes.</p>
          <button><Link to="./web-contacting-form">Start Creating Contact Us</Link></button>
        </div>
        <div className="web-building-right-content">
          <img src={require('../Image/website building.png')} alt="" />
        </div>
      </div>
      <div className="quote-material">
        <i class="fa-solid fa-quote-left"></i>
        <p>Your website should be your calling card, or your business front door whichever metaphor you prefer. It’s the one place on the internet that’s exclusively yours.</p>
        <span style={{ textAlign: 'center' }}>-Michael Hyatt</span>
        <i class="fa-solid fa-quote-right"></i>
      </div>
      <div className="web-building-content">
        <div className="web-building-right-content">
          <img src={require('../Image/website-building 2.jpg')} alt="" />
        </div>
        <div className="web-building-left-content">
          <h1>Deliver great user experiences with highly-converting websites
          </h1>
          <p>Transform websites into digital assets that build awareness, drive conversions and grow sales. Using our professional website builder, help your clients thrive online and build websites that give site visitors just what they need.</p>
          <button> <Link to="./web-contacting-form">Start Creating Contact Us</Link></button>
        </div>

      </div>
      <div className="quote-material">
        <i class="fa-solid fa-quote-left"></i>
        <p>Your website isn’t the center of your universe. Your Facebook page isn’t the center of your universe. Your mobile app isn’t the center of your universe. The customer is the center of your universe.</p>
        <span style={{ textAlign: 'center' }}>- Bruce Ernst</span>
        <i class="fa-solid fa-quote-right"></i>
      </div>
      <div className="web-building-content">
        <div className="web-building-left-content">
          <h1>Achieve outstanding results with a top performing website builder
          </h1>
          <p>Build websites that are stable, secure and lead the industry in speed, performance, and SEO. Since Core Web Vitals was introduced in 2021 as the official framework to measure site speed and user experience, Duda has stayed in the lead with websites that outperform in loading speed, visual stability, and interactivity.</p>
          <button> <Link to="./web-contacting-form">Start Creating Contact Us</Link></button>
        </div>
        <div className="web-building-right-content">
          <img src={require('../Image/website-building 3.jpg')} alt="" />
        </div>
      </div>
    </div>
  )
}

export default WebBuilder