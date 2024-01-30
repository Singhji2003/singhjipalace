import React, { useState } from 'react'
import './css/Home-service.css'
import { Link } from 'react-router-dom';
const HomeServices = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4; // Set the total number of slides

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };
  return (

    <>
      <div className="home-service-heading">
        <h1>Our Services</h1>
        <Link to="/services">Get More</Link>
      </div>
      <div className="slider-container">
        <div className="slides-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {/* Slide 1 */}
          <div className="slide" >
            <img src={require('../Image/speech-to-text.png')} alt="" />
            <div className="slide-details">
              <h1>Speech To Text</h1>
              <p>Heyy... Here you will convert the Voices into the text format and you can utilize anywhere by simple copy and paste the text...</p>
              <Link to ='/speech-to-text'><button >Let's Explore</button></Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide" >
            <img src={require('../Image/text-to-speech.png')} alt="" />
            <div className="slide-details">
              <h1>Text To Speech  </h1>
              <p>Heyy... Here you will convert the Text into the Voice format and you can utilize anywhere by simple download the Voice and it will be in AI format so no copyright will be applicable....</p>
             <Link to ='/text-to-speech'> <button >Let's Explore</button></Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide" >
            <img src={require('../Image/image-resizer.png')} alt="" />
            <div className="slide-details">
              <h1>Image Resizer</h1>
              <p>Heyy... Here you can simply Resize your image as per your choice of width and height with out lossing the resolution</p>
              <Link to='/image-resizer'><button >Let's Explore</button></Link>
            </div>
          </div>
          <div className="slide" >
            <img src={require('../Image/words.jpg')} alt="" />
            <div className="slide-details">
              <h1>Play With Words</h1>
              <p>Heyy... Here you will convert the Voices into the text format and you can utilize anywhere by simple copy and paste the text...</p>
              <Link to='/words-solution'><button >Let's Explore</button></Link>
            </div>
          </div>
          </div>

        {/* Left arrow */}
        <div className="arrow arrow-left" onClick={prevSlide}>&#9665;</div>

        {/* Right arrow */}
        <div className="arrow arrow-right" onClick={nextSlide}>&#9655;</div>
      </div>

    </>
  )
}

export default HomeServices