 import "../styles/Footer.css"; // استيراد ملف الـ CSS

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="social-links">
//       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
//       <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//       <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//       </div>
//       <p>© {new Date().getFullYear()} جميع الحقوق محفوظة - Maryam</p>
//     </footer>
//   );
// }

// export default Footer; 

import { FaFacebook, FaInstagram, FaXTwitter, FaTiktok, FaTelegram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      {/* قسم السوشيال ميديا */}
      <div className="footer-section1">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={25} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaXTwitter size={25} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaTiktok size={25} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaTelegram size={25} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a>
        </div>
      </div>

      {/* قسم معلومات التواصل */}
      <div className="footer-section2">
        <h3 className="hover-target">Contact Information</h3>
  <span className="hover-text">you can phone us by "phone" OR send message on WhatsApp  OR send us an E-mail</span>

        <div className="footer-section22">
        <p>📞 Phone: 0123456789</p>
        <p>📱 WhatsApp: 0123456789</p>
        <p>📧 Email: example@email.com</p>
      </div>
      </div>


      {/* قسم الروابط السريعة */}
      <div className="footer-section3">
        <h3>Quick Links</h3>
        <ul>
        {/* <a href="/#Home" className="navLink">Home</a> */}
          <li><a href="/#Home">Home</a></li>
          <li><a href="/#AboutUs">About Us</a></li>
          <li><a href="/#AboutServices">Services</a></li>
        </ul>
      </div>

      {/* حقوق النشر */}
      <div className="copyright">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;