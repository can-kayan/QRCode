import './Footer.css';
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram ,FaPhone, FaMap} from 'react-icons/fa';

function Footer() {
  return (
    <div id='footer'>
        <div className='footer-body'>
            <div className='footer-image'>
                ttCafe
            </div>
            <div className='footer-information'>
                <div className='socialMedia'>
                    <table>
                        <td>Social Media
                            <tr> <FaTwitter /> Twiter</tr>
                            <tr>  <FaFacebook /> Facebook</tr>
                            <tr> <FaInstagram /> Instagram</tr>
                            <tr> <FaTelegram /> Telegram</tr>

                        </td>
                    </table>
                </div>
                <div className='contactUs'>
                    <table>
                        <td>Contact Us
                            <tr><FaPhone /> Phone</tr>
                            <tr><FaMap /> Address</tr>
                        </td>
                    </table>
                </div>
            </div>
            <div className='footer-map'>
                {/* <img src="/map.png" alt=" " /> */}
            </div>
        </div>
        <div className='footer-copyright'>
        &copy; 2019 Copyright:
        </div>
    </div>
  
  );
}

export default Footer;
