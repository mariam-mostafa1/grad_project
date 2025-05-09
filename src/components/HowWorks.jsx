import React, { useEffect } from "react";
import '../styles/howworks.css';
// import img4 from '../images/img4.png';
import { FaPencilAlt, FaClock, FaTruck, FaClipboardList } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

const HowWorks = () => {

  useEffect(()=>{
      Aos.init({duration:1000})
    }, [])

  return (
    <section id="HowWorks">
    <div className="how-works">
      <h2 data-aos="fade-up" className="title">How Lavo Laundry WORKS?</h2>

      <div data-aos="fade-up" className="image-container">
        <img src="/images/img4.png" alt="Lavo Laundry Process" />
      </div>

      <div className="steps">
        <div data-aos="fade-up" className="step">
          <FaPencilAlt className="icon" />
          <div className="text">
            <h3>Book on Lavo</h3>
            <p>Save your location details, select your pickup & delivery time slots, and confirm the order.</p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration= "1100" className="step">
          <FaClock className="icon" />
          <div className="text">
            <h3>Choose your time slots</h3>
            <p>Pick a day and time for delivery, so there’s no waiting around!</p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration= "1200" className="step">
          <FaTruck className="icon" />
          <div className="text">
            <h3>Meet your agent</h3>
            <p>We’ll meet you with bags for dry cleaning, ironed laundry, and press service.</p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration= "1300" className="step">
          <FaClipboardList className="icon" />
          <div className="text">
            <h3>Receive your belongings</h3>
            <p>We’ll clean your items at our nearest facility and return them in as little as 48 hours.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HowWorks;
