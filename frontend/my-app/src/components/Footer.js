// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>🚀 Let's Connect</h3>
        <p>I’d love to hear from you — let’s build something amazing together!</p>
        <div className="footer-icons">
          <a href="https://github.com/Darshana-badgujar" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/darshana-badgujar-1302631a7" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:darshanabadgujar2000@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+919307872656">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} darshanabadgujar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
