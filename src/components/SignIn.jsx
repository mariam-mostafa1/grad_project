import React, { useState, useEffect } from "react";
import '../styles/signin.css';
import { Link } from "react-router-dom";
// import img5 from "../images/img5.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(()=>{
        Aos.init({duration:1500})
      }, [])

  return (
     <div className="signin">
      {/* Left side */}
      <div data-aos="fade-right" className="signin__left">
        <h2 className="signin__title">Sign In</h2>
        <form data-aos="fade-right"className="signin__form">
          {/* <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" /> */}
          <input type="email" placeholder="Email Address" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />

          <label className="signin__checkbox">
            <input
              type="checkbox"
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show password
          </label>

          <button type="submit" className="signin__btn">
            Sign in
          </button>
        </form>

        <div className="signin__or">or</div>

        <button className="signin__social google">
        <FcGoogle className="g-icon"/> Continue with Google
        </button>
        <button className="signin__social facebook">
        <FaFacebookF className="fb-icon"/> Continue with Facebook
        </button>
      </div>

      {/* Right side */}
      <div className="signin__right" style={{  backgroundImage: `url('/images/img5.png')` }}>
        <div data-aos="fade-right"className="signin__overlay">
          <h2>
            Welcome to our
            <br />
            Community
          </h2>
          <p>Don't have an account</p>
          <Link to="/signup" className="signup__link">
            Sign Up
          </Link>

         {/* <a href="a" className="signup__link">
          Sign Up
          </a> */}
        </div>
      </div>

    </div>
  );
};

export default SignIn;
