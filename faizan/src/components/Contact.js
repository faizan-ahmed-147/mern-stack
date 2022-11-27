import React from 'react'
import '../componentcss/contactPage.css';
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contact">
          <div className="contact-heading">
            <h2>contact</h2>
          </div>

          <div className="contact-form">
            <div className="contact-detail">
              <label className="icon" htmlFor="name">
                <i className="zmdi zmdi-account icon material-icons-name zmdi-hc-lg "></i>
              </label>
              <input type="text" name="name" id='name' autoComplete='off' placeholder=' Enter Your Name' />
            </div>
            <div className="contact-detail">
              <label className="icon" htmlFor="email">
                <i className="zmdi zmdi-email icon material-icons-name zmdi-hc-lg"></i>
              </label>
              <input type="email" name="email" id='email' autoComplete='off' placeholder=' Enter Your Email' />
            </div>
            <div className="contact-detail">
              <label className="icon" htmlFor="phone">
                <i className="zmdi zmdi-phone-in-talk icon material-icons-name zmdi-hc-lg"></i>
              </label>
              <input type="number" name="phone" id='phone' autoComplete='off' placeholder=' Enter Your Phone Number' />
            </div>
          </div>

          <div className="mb-3 mx-3 ">
            <label htmlFor="exampleFormControlTextarea1" className="textarea">Message</label>
            <textarea className="form-control" id="textarea1"  placeholder="Enter Your Message" rows="7"></textarea>
          </div>

          <div className="btn">
            <input type="submit" name='contact' id="contact" value="Send" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact