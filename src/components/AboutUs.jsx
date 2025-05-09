import React, { useEffect } from 'react';
import '../styles/aboutus.css';
// import img2 from '../images/img2.jpg';
// import img3 from '../images/img3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(()=>{
      Aos.init({duration:1000})
    }, [])
    
    return (
        <section id="AboutUs"  className="aboutUs">
          <div data-aos="fade-up" className="container">
            <h2 className="sectionTitle">About Us</h2>
            <p>
              At <span className="highlight">LAVO</span> we’re dedicated to making your life
              easier with fresh, clean clothes – without the hassle. Since our inception in Egypt, we’ve had one simple goal: to provide fast, reliable, and high-quality laundry services to each and every customer.
            </p>
            <p>
              Today, we’re proud to serve over <strong>16,000</strong> satisfied customers and continue to grow.
            </p>
            <p>
              We are here to serve you! If you have any questions or want to learn more about our services, don’t hesitate to get in touch with us or visit social media.
            </p>
    

                {/* First Info Box - Inside the Washing Machine Board */}
        <div data-aos="fade-up" className="infoBox">
          <img src="/images/img3.jpg" alt="Mission" className="infoImage" />
          <div className="infoContent1">
            <h3> <span>1</span>What Sets Us Apart:</h3>
            <p>
            We believe every customer deserves the best, so we go above and beyond 
            to ensure your clothes are fresh, clean, and well-cared for.
            </p>
          </div>
        </div>

        {/* Second Info Box - Inside the Washing Machine Board */}
        <div data-aos="fade-up" className="infoBox">
          <img src="/images/img2.jpg" alt="What Sets Us Apart" className="infoImage2" />
          <div className="infoContent2">
            <h3><span>2</span>Our Mission:</h3>
            <p>
            To deliver top-notch laundry services with a focus on quality, convenience, 
            and customer satisfaction.
            </p>

              </div>
            </div>
          </div>
        </section>
      );
}

export default AboutUs;