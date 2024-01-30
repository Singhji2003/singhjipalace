import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = (props) => {
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li onClick={() => props.commingSoon(true)}> <Link ><button>Login</button></Link></li>
                    <li onClick={() => props.commingSoon(true)}><button>Sign Up</button></li>
                    <div className="nav-responsive">
                        <li id='hamberger'><i class="fa-solid fa-bars"></i></li>
                        <li id='close'><i class="fa-solid fa-xmark"></i></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
