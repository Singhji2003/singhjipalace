import React from 'react'
import ScrollToTop from './ScrollToTop'
import './css/Contact.css'
const Contact = () => {
    return (
        <>
        <ScrollToTop/>
            <div className="contact-page">
                <div className="contact-heading">
                    <h1>Contact Form</h1>
                </div>
                <div className="contact-form">
                    <form >
                        <div className="inputs">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" autoComplete='off' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="number">Contact Number</label>
                            <input type="number" name="number" id="number" autoComplete='off' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" autoComplete='off' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" autoComplete='off' rows="4"></textarea>
                        </div>
                        <div className="contact-form-button">
                            <button type="submit">Submit</button>
                            <button type="reset">Reset</button>
                        </div>
                    </form>
                </div></div>
        </>
    )
}

export default Contact