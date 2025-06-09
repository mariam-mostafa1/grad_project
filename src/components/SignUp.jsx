import React, { useState, useEffect } from "react";
import '../styles/signup.css';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="signup">
      {/* Left side */}
      <div
        className="signup__left"
        style={{ backgroundImage: "url('/images/img5.png')" }}
      >
        <div data-aos="fade-left" className="signup__overlay">
          <h2>
            Welcome to our
            <br />
            Community
          </h2>
          <p>Already you have an account</p>

          <Link to="/signin" className="signin__link">
            Sign In
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div data-aos="fade-left" className="signup__right">
        <h2 className="signup__title">Sign Up</h2>
        <form data-aos="fade-left" className="signup__form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />

          <label className="signup__checkbox">
            <input
              type="checkbox"
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show password
          </label>

          <button type="submit" className="signup__btn">
            Sign up
          </button>
        </form>

        <div className="signup__or">or</div>

       
        <button className="signup__social google">
          <FcGoogle className="g-icon" /> Continue with Google
        </button>
        <button className="signup__social facebook">
          <FaFacebookF className="fb-icon" /> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignUp;


