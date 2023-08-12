// Footer.js

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaPhone, FaAddressCard } from 'react-icons/fa';
import '../componentsCSS//Footer.css';

function Footer() {
  return (
    <footer>
      <div className='footer-body'>
        <div className="footer-logo">
          ttCafe
        </div>
        <div className="footer-content">
          <div className="social-media">
            <h3>Social Media</h3>
            <a href="#"><FaTwitter className="icon" style={{color: '0088CC'}} /><p>Twitter</p></a>
            <a href="#"><FaFacebook className="icon" style={{ color: 'blue' }} /><p>Facebook</p></a>
            <a href="#"> <FaInstagram className="icon" style={{ color: '#E4403F'}} /><p>Instagram</p></a>
            <a href="#"><FaTelegram className="icon" style={{ color: '#0078CC'}} /><p>Telegram</p></a>
          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <div className="contact-info">
            <a href="#"><FaPhone className="icon" style={{color:'#00A3FF'}} /><p>123-456-7890</p></a>
            <a href="#"><FaAddressCard className="icon" style={{color:'#039D00'}} /><p>1234 Elm Street, City</p></a>
            </div>
          </div>
        </div>
        <div className="footer-map" />
      </div>
      <div className="copyright">
        &copy; 2023 ttCafe. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
