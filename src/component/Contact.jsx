import React, { useState } from 'react'
import './css/Contact.css'
import Loader from './Loader'
import ScrollToTop from './ScrollToTop'

const Contact = (props) => {
    const url = 'https://singh-ji-palace-backend.onrender.com'
    const [feedback, setFeedback] = useState({
        name: '',
        number: '',
        email: '',
        feedback: ''
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
                body: JSON.stringify({ name: feedback.name, number: feedback.number, email: feedback.email, feedback: feedback.feedback }),
            });
            const json = await response.json();
            setLoader(false)
            props.showAlert(json.msg, json.success)
            setFeedback({
                name: '',
                number: '',
                email: '',
                feedback: ''
            })
        }
        catch {
            props.showAlert("Some issue Occured Try agian After some time..", 'false')
            setFeedback({
                name: '',
                number: '',
                email: '',
                feedback: ''
            })
        }
    }
    return (

        <>
            <ScrollToTop />
            {loader && <Loader />}
            <div className="contact-page">
                <div className="contact-heading">
                    <h1>Feedback Form</h1>
                </div>
                <div className="contact-form">
                    <form onSubmit={submitFeedback}>
                        <div className="inputs">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" onChange={onChange} required value={feedback.name} autoComplete='off' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="number">Contact Number</label>
                            <input type="number" name="number" id="number" onChange={onChange} required value={feedback.number} autoComplete='off' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={onChange} required value={feedback.email} autoComplete='off' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="message">Feedback</label>
                            <textarea name="feedback" id="feedback" onChange={onChange} required value={feedback.feedback} autoComplete='off' rows="4"></textarea>
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