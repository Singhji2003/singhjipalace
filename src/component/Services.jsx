import React from 'react'
import { Link } from 'react-router-dom'
import './css/Services.css'
import ScrollToTop from './ScrollToTop'
const Services = (props) => {
  const showCommingSoon = () => {
    props.commingSoon(true)
  }
  return (
    <>
      <div className="services">
        <ScrollToTop />
        <div className="service-heading">
          <h1><i class="fa-solid fa-briefcase"></i>Services</h1>
        </div>
        <div className="service-content">
          <div className="each-service">
            <img src={require('../Image/speech-to-text.png')} alt="" />
            <h1>Speech To text</h1>
            <p>Introducing Singh Ji Palace, where we empower you to transcribe spoken words into written text effortlessly with our state-of-the-art Speech-to-Text (STT) solutions. Experience a seamless conversion process that transforms spoken language into accurate, editable text, providing unparalleled convenience and efficiency.</p>
            <Link to='/speech-to-text'><button >Explore Now</button></Link>
          </div>
          <div className="each-service">
            <img src={require('../Image/text-to-speech.png')} alt="" />
            <h1>Text To Speech</h1>
            <p>Welcome to Singh Ji Palace, Unlock the power of spoken words with our cutting-edge Text-to-Speech (TTS) technology. Whether you're looking to enhance accessibility on your website, create engaging audio content, or simply enjoy the convenience of having your text transformed into lifelike speech, our platform has you covered.</p>
            <Link to='/text-to-speech'><button >Explore Now</button></Link>
          </div>
          <div className="each-service">
            <img src={require('../Image/words.jpg')} alt="" />
            <h1>Words Solutions</h1>
            <p>Welcome to Singh Ji Palace, where we empower you to harness the full potential of your written content with our comprehensive Text Processing Solutions. Whether you're looking to count words, generate text, or perform advanced copy analysis, our tools are designed to enhance your text-related tasks with precision and efficiency.</p>
            <Link to="/words-solution"> <button >Explore Now</button></Link>

          </div>
          <div className="each-service">
            <img src={require('../Image/image-resizer.png')} alt="" />
            <h1>Image Resizer</h1>
            <p>At Singh Ji Palace, we understand the importance of visually appealing content in today's digital world. Whether you are a business owner, content creator, or an individual looking to enhance your online presence, our Image Resizer service is here to simplify the process for you.</p>
            <Link to='/image-resizer'><button>Explore Now</button></Link>
          </div>
          <div className="each-service">
            <img src={require('../Image/image-to-pdf.png')} alt="" />
            <h1>Convert Images To PDF</h1>
            <p>Welcome to our innovative online tool that effortlessly transforms your images into polished and professional PDF documents. Our image to PDF converter provides a seamless and user-friendly experience, catering to individuals and businesses alike. Whether you're looking to compile a portfolio, create a presentation</p>
            <Link to="/images-to-pdf"><button >Explore Now</button></Link>

          </div>
          <div className="each-service">
            <img src={require('../Image/remove-bg-from-image.jpg')} alt="" />
            <h1>Remove BG from Image</h1>
            <p>Welcome to Singh Ji Palace, Unleash the full potential of your images with our innovative Background Removal Tool. Say goodbye to distracting backgrounds and hello to professional, polished visuals that make your content stand out. Whether you're a graphic designer, photographer, or content creator, our user-friendly platform.</p>
            <Link to="/remove-bg-from-image"><button >Explore Now</button></Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Services