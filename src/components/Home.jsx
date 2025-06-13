import React, { useEffect } from "react";
import '../styles/home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <section id="Home" className="home">
      <div className="overlay"></div>
      <img src="/images/img1.jpg" className="img1" alt="Background" />
      <Link to="/MyAccount" className="accountCircle">
      <img
       src="https://randomuser.me/api/portraits/women/44.jpg"
       alt="My Account"
       className="accountImg"
      />
     </Link>
      <div className="homeContent container">
        <div className="textDiv">
          <h1 data-aos="fade-up" className="homeTitle">
            Say Goodbye to Laundry Day,
            <br />
            We Have Got This!
          </h1>
          <span data-aos="fade-up" className="smallText">
            Effortless Scheduling: Book your pickups and deliveries at your
            convenience.
            <br />
            Premium Care: Every piece is handled with the utmost attention.
            <br />
            Eco-Friendly Choices: We prioritize sustainable practices.
          </span>
        </div>

        <div data-aos="fade-up" className="buttonDiv container">
         
          <h2>Join To Our Community!</h2>
          <Link to="/signup" className="signupButton" target="_blank" rel="noopener noreferrer">
            Sign Up
          </Link>
          <Link to="/signin" className="signinButton" target="_blank" rel="noopener noreferrer">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
