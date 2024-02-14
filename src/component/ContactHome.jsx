import React, {  useState } from 'react'
import './css/ContactHome.css'
import Loader from './Loader'

const ContactHome = (props) => {
  const url = 'https://singh-ji-palace-backend.onrender.com'
  const [feedback, setFeedback] = useState({
    hname: '',
    hnumber: '',
    hemail: '',
    hfeedback: ''
  })
  const [loader, setLoader] = useState(false)
  const onChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value })
  }
  const submitFeedback = async (e) => {
    e.preventDefault()

    try {
      setLoader(true)
      const response = await fetch(`${url}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: feedback.hname, number: feedback.hnumber, email: feedback.hemail, feedback: feedback.hfeedback }),
      });
      const json = await response.json();
      setLoader(false)
      props.showAlert(json.msg, json.success)
      setFeedback({
        hname: '',
        hnumber: '',
        hemail: '',
        hfeedback: ''
      })
    }
    catch {
      props.showAlert("Some issue Occured Try agian After some time..", 'false')
      setFeedback({
        hname: '',
        hnumber: '',
        hemail: '',
        hfeedback: ''
      })
    }
  }
  return (
    <div className="contact-home-heading">
      {loader && <Loader />}
      <h1>Feedback Form</h1>
      <div className="home-contact-form">
        <form onSubmit={submitFeedback}>
          <div className="home-inputs">
            <label htmlFor="hname">Name</label>
            <input type="text" name="hname" id="hname" required value={feedback.hname} onChange={onChange} autoComplete='off' />
          </div>
          <div className="home-inputs">
            <label htmlFor="hnumber">Contact Number</label>
            <input type="number" name="hnumber" id="hnumber" required minLength={10} maxLength={10} value={feedback.hnumber} onChange={onChange} autoComplete='off' />
          </div>
          <div className="home-inputs">
            <label htmlFor="hemail">Email</label>
            <input type="email" name="hemail" id="hemail" required value={feedback.hemail} onChange={onChange} autoComplete='off' />
          </div>
          <div className="home-inputs">
            <label htmlFor="hfeedback">Feedback</label>
            <textarea name="hfeedback" id="hfeedback" required value={feedback.hfeedback} onChange={onChange} autoComplete='off' rows="6"></textarea>
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