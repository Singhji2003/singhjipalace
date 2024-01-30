import React from 'react'
import './css/ContactHome.css'
const ContactHome = () => {
  return (
  <div className="contact-home-heading">
    <h1>Conact Form</h1>
    <div className="home-contact-form">
        <form >
            <div className="home-inputs">
           <label htmlFor="hname">Name</label> 
           <input type="text" name="hname" id="hname"autoComplete='off' />
           </div>
            <div className="home-inputs">
           <label htmlFor="hnumber">Contact Number</label> 
           <input type="number" name="hnumber" id="hnumber"autoComplete='off' />
           </div>
            <div className="home-inputs">
           <label htmlFor="hemail">Email</label> 
           <input type="email" name="hemail" id="hemail"autoComplete='off' />
           </div>
            <div className="home-inputs">
           <label htmlFor="hmessage">Message</label> 
          <textarea name="hmessage" id="hmessage"autoComplete='off'   rows="6"></textarea>
           </div>
           <div className="home-contact-form-button">
           <button type="submit">Submit</button>
           <button type="reset">Reset</button>
           </div>
        </form>
    </div>
  </div>
  )
}

export default ContactHome