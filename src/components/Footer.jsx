// src/components/footer/Footer.jsx
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaFacebookF, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const whatsappNumber = "+923330642100"; // your number
  const email = "paksmbtravels@gmail.com";

  return (
    <footer className="footer">
      <div className="footer__brand">
        <Link to="/" className="footer__brand-link" aria-label="Pak Sambrial Travels">
          <img
            src="/white_logo.png"
            alt="Pak Sambrial Travels"
            className="footer__logo"
            loading="lazy"
            decoding="async"
          />
        </Link>
      </div>

      <div className="footer__container">
        <div className="footer__contacts">
          <h3>Contact Us</h3>
          <p>
            <FaWhatsapp />{" "}
            <a href={`tel:${whatsappNumber.replace(/\s+/g, "")}`}>{whatsappNumber}</a>
          </p>
          <p>
            <SiGmail /> <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>

        <div className="footer__social">
          <h3>Links</h3>
          <div className="footer__social-links">
            <a
              href="https://www.facebook.com/groups/420500097053468"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF /> /Facebook
            </a>
            <a href="https://actgroups.pk/" target="_blank" rel="noopener noreferrer">
              <FaGlobe /> /actgroups
            </a>
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
