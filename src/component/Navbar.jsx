import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    const showNav = () => {
        document.querySelector('ul').style.marginTop = '0rem'
        document.getElementById('close').style.display = 'flex'
        document.getElementById('hamberger').style.display = 'none'
    }
    const hideNav = () => {
        if (window.innerWidth < 500) {
            document.querySelector('ul').style.marginTop = '-20rem'
            document.getElementById('close').style.display = 'none'
            document.getElementById('hamberger').style.display = 'flex'
        }
    }
    return (
        <nav>
            <div className="left-navbar">
                <div className="logo">
                    <img src={require('../Image/logo.png')} alt="" />
                    <h1>Singh ji Palace</h1>
                </div>
            </div>
            <div className="right-navbar">
                <ul>
                    <li onClick={hideNav}><Link to="/">Home</Link></li>
                    <li onClick={hideNav}><Link to="/services">Services</Link></li>
                    <li onClick={hideNav}><Link to="/about">About</Link></li>
                    <li onClick={hideNav}><Link to="/contact">Feedback</Link></li>
                </ul>
                <div className="nav-responsive">
                    <li id='hamberger' onClick={showNav}><i className="fa-solid fa-bars"></i></li>
                    <li id='close' onClick={hideNav}><i className="fa-solid fa-xmark"></i></li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
