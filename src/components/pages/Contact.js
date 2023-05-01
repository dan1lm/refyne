import React from 'react';
import '../../App.css';
import './Contact.css'

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }
    return (

      <>
      <h2 className="contact-text-questions">Have Questions? Contact Us Here</h2>
      <div className="container contact-window-form">



        
        <form onSubmit={onSubmit}>
          <div className="contact-form">
            <label className="contact-form-label" htmlFor="name">
              Name
            </label>
            <input className="contact-form-control" type="text" id="name" required />
          </div>
          <div className="contact-form">
            <label className="contact-form-label" htmlFor="email">
              Email
            </label>
            <input className="contact-form-control" type="email" id="email" required />
          </div>
          <div className="contact-form">
            <label className="contact-form-label" htmlFor="message">
              Message
            </label>
            <textarea className="contact-form-control" id="message" required />
          </div>
          <button className="btn btn-form-submit" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
      </>
    )
  }
  export default Contact