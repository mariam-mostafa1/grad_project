import React, { useState, useEffect } from "react";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else {
      if (
        formData.password.length < 8 ||
        !/\d/.test(formData.password) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
      ) {
        newErrors.password =
          "Password must be at least 8 characters, include a number and a special character.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/signin");
    }
  };

  return (
    <div className="signup">
      <div className="signup__left" style={{ backgroundImage: "url('/images/img5.png')" }}>
        <div data-aos="fade-left" className="signup__overlay">
          <h2>
            Welcome to our
            <br />
            Community
          </h2>
          <p>Already have an account?</p>
          <Link to="/signin" className="signin__link">
            Sign In
          </Link>
        </div>
      </div>

      <div data-aos="fade-left" className="signup__right">
        <h2 className="signup__title">Sign Up</h2>
        <form data-aos="fade-left" className="signup__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? "error shake" : ""}
          />
          {errors.firstName && <small className="field-error">{errors.firstName}</small>}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? "error shake" : ""}
          />
          {errors.lastName && <small className="field-error">{errors.lastName}</small>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error shake" : ""}
          />
          {errors.email && <small className="field-error">{errors.email}</small>}

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error shake" : ""}
          />
          {!errors.password && (
            <small className="password-hint">
              Must be at least 8 characters, include a number and a special character.
            </small>
          )}
          {errors.password && <small className="field-error">{errors.password}</small>}

          <label className="signup__checkbox">
            <input type="checkbox" onChange={(e) => setShowPassword(e.target.checked)} />
            Show password
          </label>

          <button type="submit" className="signup__btn">
            Sign up
          </button>
        </form>

        <div className="signup__or">or</div>

        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="signup__social google"
        >
          <FcGoogle className="g-icon" /> Continue with Google
        </a>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="signup__social facebook"
        >
          <FaFacebookF className="fb-icon" /> Continue with Facebook
        </a>
      </div>
    </div>
  );
};

export default SignUp;

