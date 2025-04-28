import React, { useEffect } from "react";
import '../styles/home.css';
// import { Link } from "react-router-dom";
// import img1 from "../images/img1.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  }, [])

  return (
    <section className="home">
      <div className="overlay"></div>
      <img src="/images/img1.jpg" className="img1" alt="Background" />
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
          <a href="a" className="startButton">
            Get Started
          </a>
          {/* <Link to="/Services" className='startButton'>Get Started</Link> */}

          <h2>Join To Our Community!</h2>
          {/* <Link to="/SignUp" className="signupButton">
            Sign Up
          </Link> */}
          <a href="a" className="signupButton">
            Sign Up
          </a>
          {/* <Link to="/SignIn" className="signinButton">
            Sign In
          </Link> */}
          <a href="a" className="signinButton">
            Sign In
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
