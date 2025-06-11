// import React, { useState, useEffect } from "react";
// import '../styles/signin.css';
// import { Link } from "react-router-dom";
// // import img5 from "../images/img5.png";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebookF } from "react-icons/fa6";
// import Aos from 'aos';
// import 'aos/dist/aos.css';

// const SignIn = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(()=>{
//         Aos.init({duration:1500})
//       }, [])

//   return (
//      <div className="signin">
//       {/* Left side */}
//       <div data-aos="fade-right" className="signin__left">
//         <h2 className="signin__title">Sign In</h2>
//         <form data-aos="fade-right"className="signin__form">
//           {/* <input type="text" placeholder="First Name" />
//           <input type="text" placeholder="Last Name" /> */}
//           <input type="email" placeholder="Email Address" />
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//           />

//           <label className="signin__checkbox">
//             <input
//               type="checkbox"
//               onChange={(e) => setShowPassword(e.target.checked)}
//             />
//             Show password
//           </label>

//           <button type="submit" className="signin__btn">
//             Sign in
//           </button>
//         </form>

//         <div className="signin__or">or</div>

//         <button className="signin__social google">
//         <FcGoogle className="g-icon"/> Continue with Google
//         </button>
//         <button className="signin__social facebook">
//         <FaFacebookF className="fb-icon"/> Continue with Facebook
//         </button>
//       </div>

//       {/* Right side */}
//       <div className="signin__right" style={{  backgroundImage: `url('/images/img5.png')` }}>
//         <div data-aos="fade-right"className="signin__overlay">
//           <h2>
//             Welcome to our
//             <br />
//             Community
//           </h2>
//           <p>Don't have an account</p>
//           <Link to="/signup" className="signup__link">
//             Sign Up
//           </Link>

//          {/* <a href="a" className="signup__link">
//           Sign Up
//           </a> */}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default SignIn;










import React, { useState, useEffect } from "react";
import '../styles/signin.css';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const validateEmail = (email) => {
    const pattern = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(email);
  };

  const validatePassword = (password) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= 8 && hasSpecialChar;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters and include a special character");
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      navigate('/');
    }
  };

  return (
    <div className="signin">
      <div data-aos="fade-right" className="signin__left">
        <h2 className="signin__title">Sign In</h2>
        <form onSubmit={handleSubmit} className="signin__form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailError ? 'input-error' : ''}
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={passwordError ? 'input-error' : ''}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

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

        <a
          href="https://accounts.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="signin__social google"
        >
          <FcGoogle className="g-icon" /> <span>Continue with Google</span>
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="signin__social facebook"
        >
          <FaFacebookF className="fb-icon" /> <span>Continue with Facebook</span>
        </a>
      </div>

      <div className="signin__right" style={{ backgroundImage: `url('/images/img5.png')` }}>
        <div className="signin__overlay">
          <h2>
            Welcome to our
            <br />
            Community
          </h2>
          <p>Don't have an account</p>
          <Link to="/signup" className="signup__link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;



