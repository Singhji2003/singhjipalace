import React from 'react'

const HomeVision = () => {
  return (
    <>
    <div className="home-service-heading home-about-heading">
    <h1>Our Vision?</h1>
    <a href="#">Get More</a>
  </div>
  <div className="home-about-content">
    <div className="home-about-left-content">
        <h2>Transforming Communication, Enhancing Lives</h2>
        <p>At Singh Ji Palace, our vision is to revolutionize communication through advanced speech-to-text and text-to-speech solutions. We envision a world where language is no longer a barrier, where technology empowers individuals and communities to overcome real-world challenges seamlessly.</p>
        <h2>A Future of Possibilities</h2>
        <p>As we look ahead, we see <b> Singh Ji Palace</b> at the forefront of technological advancements, leading the way in providing solutions that go beyond simple conversion. Our vision extends to a future where communication is not just efficient but also empowers individuals to overcome barriers and thrive.</p>
    </div>
    <div className="home-about-right-content">
        <img src={require('../Image/vision-home.avif')} alt="" />
    </div>
  </div>
  </>
  )
}

export default HomeVision