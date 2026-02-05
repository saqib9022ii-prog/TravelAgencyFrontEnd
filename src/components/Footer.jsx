// src/components/footer/Footer.jsx
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

const Footer = () => {
  const whatsappNumber = "+923330642100"; // your number
  const email = "paksmbtravels@gmail.com";

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contacts">
          <h3>Contact Us</h3>
          <p><FaWhatsapp/> <a href={`tel:+${whatsappNumber}`}>{whatsappNumber}</a></p>
          <p><SiGmail/> <a href={`mailto:${email}`}>{email}</a></p>
        </div>

        <div className="footer__social">
          <h3>Follow Us</h3>
          <div className="footer__social-links">
            <a href="https://www.facebook.com/groups/420500097053468" rel="noopener noreferrer"><FaFacebookF/> /Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/> /Instagram</a>
            
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Pak Sambrial. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
