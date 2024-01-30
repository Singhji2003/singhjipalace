import React from 'react'
import './css/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section about">
        <h1>About Singh Ji Palace</h1>
        <p>
        Singh Ji Palace is dedicated to providing innovative solutions in speech-to-text,
          text-to-speech, and addressing real-world problems. Join us on our journey towards a
          more connected world.
        </p>
      </div>

      <div className="footer-section contact">
        <h1>Contact Us</h1>
        <p>
          Email: <a href="mailto:info@example.com">arpansinghrajput123@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+123456789">+91 7291802261</a>
        </p>
      </div>

      <div className="footer-section social">
        <h1>Connect With Us</h1>
        <p>Follow us on social media:</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Singh Ji Palace. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer