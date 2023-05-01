import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { email } = e.target.elements
    let conFom = {
      email: email.value,
    }
    console.log(conFom)
  }
  return (
    <div className="window"> 
    <img className="refyne-logo" src={"/images/Refyne-Logo.jpeg"} alt={"logo"}/>
    <div className="container window-form"> 
    <h2 className="text-refyne">Be First To Get Notified About Refyne</h2>
      <form onSubmit={onSubmit}>
        <div className="interest-form">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <button className="btn btn-submit" type="submit">
          {formStatus}
        </button>
      </form>
  
    </div>
    </div>
  )
}
export default ContactForm