import React, { useState } from 'react'
import Loader from './Loader'
import ScrollToTop from './ScrollToTop'
const WebContacting = (props) => {
    const url = 'https://singh-ji-palace-backend.onrender.com'
    const [client, setClient] = useState({
        name: '',
        number: '',
        email: '',
        theme: '',
        message: ''
    })
    const [loader, setLoader] = useState(false)
    const onChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value })
    }
    const submitClient = async (e) => {
        e.preventDefault()

        try {
            setLoader(true)
            const response = await fetch(`${url}/web-client`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: client.name, number: client.number, email: client.email, theme: client.theme, client: client.message }),
            });
            const json = await response.json();
            setLoader(false)
            props.showAlert(json.msg, json.success)
            setClient({
                name: '',
                number: '',
                email: '',
                theme: '',
                message: ''
            })
        }
        catch {
            props.showAlert("Some issue Occured Try agian After some time..", 'false')
            setClient({
                name: '',
                number: '',
                email: '',
                theme: '',
                message: ''
            })
        }
    }
    return (
        <>
            <ScrollToTop />
            {loader && <Loader />}
            <div className="contact-page">
                <div className="contact-heading">
                    <h1>Web Contacting Form</h1>
                </div>
                <div className="contact-form">
                    <form onSubmit={submitClient}>
                        <div className="inputs">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" onChange={onChange} required value={client.name} autoComplete='off' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="number">Contact Number</label>
                            <input type="number" name="number" id="number" onChange={onChange} required value={client.number} autoComplete='off' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={onChange} required value={client.email} autoComplete='off' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="theme">Theme</label>
                            <input type="text" name="theme" id="theme" onChange={onChange} required value={client.theme} autoComplete='off' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" onChange={onChange} required value={client.message} autoComplete='off' rows="4"></textarea>
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

export default WebContacting