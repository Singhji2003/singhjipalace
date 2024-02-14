import React from 'react'
import './css/About.css'
import ScrollToTop from './ScrollToTop'
const About = () => {
    return (
        <div className="about">
            <ScrollToTop />
            <div className="about-heading">
                <h1>About Us</h1>
            </div>
            <div className="about-content">
                <div className="left-content">
                    <h2>About Singh Ji Palace</h2>
                    <p>Welcome to Singh Ji Palace, a trailblazing company committed to transforming the way we communicate and addressing real-world challenges. Established 2024, we've been at the forefront of cutting-edge technologies in speech-to-text, text-to-speech, and innovative solutions. At Singh Ji Palace, our vision is to revolutionize communication through advanced speech-to-text and text-to-speech solutions. We envision a world where language is no longer a barrier, where technology empowers individuals and communities to overcome real-world challenges seamlessly.</p>
                </div>
                <div className="right-content">
                    <img src={require('../Image/about01.jpg')} alt="" />
                </div>
            </div>
            <div className="about-content">
                <div className="right-content">
                    <img src={require('../Image/jourmey.jpg')} alt="" />
                </div>
                <div className="left-content">
                    <h2>Our Journey</h2>
                    <p>From our humble beginnings, we embarked on a mission to bridge communication gaps and provide accessible, inclusive solutions. Over the years, our passion for technology and dedication to solving real-world problems have shaped Singh Ji Palace into a recognized leader in our field.</p>
                </div>
            </div>
            <div className="about-content">

                <div className="left-content">
                    <h2>Our Commitment</h2>
                    <h4>Innovation Beyond Boundaries:</h4>
                    <p>At Singh Ji Palace, we don't just follow trends; we set them. Our commitment to innovation goes beyond creating tools; it's about redefining possibilities and opening up new avenues for communication and understanding.</p>
                    <h4>User-Centric Approach:</h4>
                    <p>We understand that our success is intricately tied to the success of our users. That's why we take a user-centric approach in designing our solutions, ensuring they are intuitive, efficient, and meet the diverse needs of our global audience.</p>
                </div>
                <div className="right-content">
                    <img src={require('../Image/about.jpg')} alt="" />
                </div>
            </div>
            <div className="home-about-content">
                <div className="right-content">
                    <img src={require('../Image/vision-home.avif')} alt="" />
                </div>
                <div className="home-about-left-content">
                    <h2>Transforming Communication, Enhancing Lives</h2>
                    <p>At Singh Ji Palace, our vision is to revolutionize communication through advanced speech-to-text and text-to-speech solutions. We envision a world where language is no longer a barrier, where technology empowers individuals and communities to overcome real-world challenges seamlessly.</p>
                    <h2>A Future of Possibilities</h2>
                    <p>As we look ahead, we see Singh Ji Palace at the forefront of technological advancements, leading the way in providing solutions that go beyond simple conversion. Our vision extends to a future where communication is not just efficient but also empowers individuals to overcome barriers and thrive.</p>
                </div>

            </div>
        </div>
    )
}

export default About