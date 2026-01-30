// src/components/aboutSection/AboutSection.jsx
import "../styles/AboutSection.css";
import { FaMapMarkedAlt } from "react-icons/fa";
const AboutSection = () => {
  const whatsappNumber = "92330642100"; // your number
  const whatsappMessage =
    "Assalamualaikum, I want to know more about your Umrah and work visa services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="about-section">
      <div className="about-section__container">
        <h1 className="about-section__title">About Our Agency</h1>

        <p className="about-section__description">
          We are a trusted travel agency specializing in Umrah packages and work visa ticket
          guidance. With years of experience, our team ensures every journey is smooth, safe,
          and memorable. Our services include personalized Umrah packages, estimated ticket
          prices, visa assistance, and 24/7 customer support.
        </p>

        <p className="about-section__description">
          Our mission is to provide transparent, reliable, and cost-effective travel solutions
          for all our clients. We understand the importance of your journey and strive to make
          it hassle-free from start to finish.
        </p>

        {/* Address Section */}
        <div className="about-section__address">
          <h3>Our Office</h3>
          <p><FaMapMarkedAlt/> Near Nadra Office, G.T Road Sambrial</p>

          {/* Google Maps Embed */}
          <div className="about-section__map">
            <iframe
              title="Agency Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.8956374911907!2d74.34600162499234!3d32.47827414597668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ee781ecd550bb%3A0x56643462b253458e!2sPak%20Sambrial%20travel%20%26%20tourism!5e0!3m2!1sen!2s!4v1769532311816!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
