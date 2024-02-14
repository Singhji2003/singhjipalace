import React, { useEffect, useState } from 'react'
import './css/Home.css'
const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const animateText = document.querySelector('.services-home-content')

    const textChange = () => {
      setTimeout(() => {
        animateText.textContent = "Word Problems"
      }, 0)
      setTimeout(() => {
        animateText.textContent = "Speech To Text"
      }, 3000)
      setTimeout(() => {
        animateText.textContent = "Text To Speech"
      }, 6000)
      setTimeout(() => {
        animateText.textContent = "Image Resizer"
      }, 9000)
    }
    textChange();
    setInterval(textChange, 12000)
  }
    , [])

  const images = [
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNlcnZpY2VzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNlcnZpY2VzfGVufDB8fDB8fHww',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment currentImage, and loop back to 0 if it reaches the end
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="home-page">
      <div className="left-home">
        <div className="hii-heading">
          Hii... 🖐🖐🖐🖐
        </div>
        <div className="welcome-heading">
          Welcome to Singh Ji Palace
        </div>
        <div className="welcome-heading">
          Here you will find all services like:
        </div>
        <div className="services-home-heading">
          <div className="intro"></div>
          <i>
            <div className="services-home-content"></div>
          </i>
        </div>
      </div>
      <div className="right-home">
        <img src={images[currentImage]} alt="" />
      </div>
    </div>
  )
}

export default Home