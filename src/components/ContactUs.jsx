import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="container">
      <div className="frame">
        <h1 className="title">Contact Us</h1>
        <hr className="divider" />
        <div className="card">
          {/* <p>Full Name</p> */}
          <div className="cardName">
          <p>First Name</p>
          <div className="cardNameFirst">
          <input type="text" placeholder="" className="input" />
          </div>
          <p>Second Name</p>
          <div className="cardNameSecond">
          <input type="text" placeholder="" className="input" />
        </div> </div></div>
        <div className="card">
          <p>E-mail</p>
          <div className="cardEmail">
          <div className="cardEmailInput">
          <input type="email" placeholder="type your E-mail" className="input" />
          </div>
          <p><h6>example@gmail.com</h6></p>
        </div> </div>
        <div className="message-section">
          <p>Message</p>
          <textarea placeholder="Type your message here..." className="message-input"></textarea>
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;