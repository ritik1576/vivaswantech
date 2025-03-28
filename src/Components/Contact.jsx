import React from 'react';
import Button from './Common/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../Styles/Components/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact-heading">CONTACT US</h2>
        <h3 className="contact-subheading">Get in Touch</h3>
        <p className="contact-description">
          Have questions about digital transformation or ready to futurify your business? 
          Reach out to Vivaswan and our team will help you embrace digital innovation.
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>Fill out the form or contact us directly to start your digital transformation journey.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p>info@vivaswan.com</p>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <p>
                  Vivaswan Software Technologies Pvt. Ltd.<br />
                  123 Tech Park Avenue<br />
                  Bangalore, India 560001
                </p>
              </div>
            </div>

            <div className="social-section">
              <h5>Follow Our Digital Journey</h5>
              <div className="social-icons">
                <a href="https://facebook.com/vivaswan" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="social-icon" />
                </a>
                <a href="https://linkedin.com/company/vivaswan" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="social-icon" />
                </a>
                <a href="https://instagram.com/vivaswan" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                <option value="custom-software">Custom Software Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="web-dev">Web Development</option>
                <option value="cloud">Cloud Application Development</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="it-staffing">IT Staffing</option>
                <option value="qa">QA/Testing</option>
                <option value="data-analytics">Data Analytics</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Digital Transformation Needs</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <Button type="submit" text="Start Digital Transformation" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;