import React from 'react';
import '../Styles/Components/footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h4>VIVASWAN</h4>
            <p>
              Providing innovative technology solutions since 2020. We help businesses 
              futurify their operations with cutting-edge digital transformation services.
            </p>
            <div className="social-links">
              <a href="https://facebook.com/vivaswan" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="social-icon" />
              </a>
              {/* <a href="https://twitter.com/vivaswan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="social-icon" />
              </a> */}
              <a href="https://instagram.com/vivaswan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://linkedin.com/company/vivaswan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="social-icon" />
              </a>
            </div>
          </div>
          
          <div className="footer-services">
            <h4>OUR SERVICES</h4>
            <ul>
              <li><a href="#services">Custom Software Development</a></li>
              <li><a href="#services">Mobile & Web Development</a></li>
              <li><a href="#services">Cloud Application Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">IT Staffing Solutions</a></li>
            </ul>
          </div>
          
          <div className="footer-company">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#contact">Get In Touch</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-legal">
            <h4>RESOURCES</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">White Papers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vivaswan Software Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;