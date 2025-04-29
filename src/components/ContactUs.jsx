import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <section id="ContactUs">
    <div className="contact_contain">
      <div className="contact_fraame">
        <h1 className="tit_contact_us">Contact Us</h1>
        <hr className="cont_diviider" />
        <div className="cardd">

          {/* <p>Full Name</p> */}
        <div className="cardNameContainn">
          <div className="cardName">
          <p>First Name</p>
          <input name='name' type="text" placeholder="" className="input" />
          </div>

          <div className="cardName">
          <p>Second Name</p>
          <input name='name' type="text" placeholder="" className="input" />
        
        </div> </div> </div>
        <div className="cardd">
          <p className='email'>E-mail</p>
          <div className="cardEmail-centEer">

          <div className="cardEmail">
          <div className="cardEmailInpot">
          <input name='email' type="email" placeholder="type your E-mail" className="input" />
          </div>
          <div className="cardEmailexample">
         <h6>example@gmail.com</h6>
        </div> </div></div> </div>
        <div className="message-secc">
          <p>Message</p>
          <textarea placeholder="Type your message here..." className="message-inpvt"></textarea>
        </div>
      </div>

      <button className="sapmit-but">Submit</button>

    </div>
    </section>
  );
};

export default ContactUs;