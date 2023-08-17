import '../pagesCss/ContactUs.css';
import ProductCard from '../componentsJS/ProductCard';
import React from "react";
import Footer from '../componentsJS/Footer';
import Header from '../componentsJS/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FaInstagram, FaMailBulk, FaMap, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
function HomePage() {
 return(
  <div className='pages'>
   <div className='contact-us-page'>
    <div className='contact-media top'>
      <div className='media-panel-top'>
        <div className='media-box'>
          <FaTelegram className="icon" style={{ color: '#0078CC' }} />
          <p>FaTelegram</p>
        </div>
        <div className='media-box'>
          <FaTwitter className="icon" style={{ color: '#0088CC' }} />
          <p>FaTwitter</p>
        </div>
        <div className='media-box'>
          <FaInstagram className="icon" style={{ color: '#E4403F' }} />
          <p>FaInstagram</p>
        </div>
              
      </div>
    <div className='send-mail-panel'>
          <div className='panel'>
            <p >Şikayet ve Öneriler İçin İletişime Geçebilirsiniz...</p>
              <input className='input' type='text' placeholder='Name...'></input>
              <input className='input' type='email' placeholder='Email...'></input>
              <textarea className='input' placeholder='Description...'></textarea>
              <input type='submit' className='input button' value={"send"}></input>
          </div>
      </div>  
      
      <div className='contact-media bottom'>
          <div className='media-panel-bottom'>
              <div className='media-box'>
              <FaWhatsapp className="icon" style={{ color: 'green' }} />
              <p>FaWhatsapp</p>
              </div>
              <div className='media-box'>
              <FaMailBulk className="icon" style={{ color: 'blue' }} />
              <p>FaMailBulk</p>
              </div>
              <div className='media-box'>
              <FaMap className="icon" style={{ color: 'greenyellow' }} />
              <p>FaMap</p>
              </div>
          </div>
      </div>
     
   </div>
  
   </div>
   
   </div>
   
 )
}


export default HomePage;
