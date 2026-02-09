import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ContactForm from "../components/ContactForm";
import Seo from "../seo/Seo";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Pak Sambrial Travels for Umrah packages, visa guidance, and air ticket estimates. Reach us by phone, email, or WhatsApp."
        path="/contact"
        image="/logo.png"
      />

      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#1e3a8a",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "40px",
            color: "#4b5563",
          }}
        >
          Fill out the form below or contact us directly via WhatsApp.
        </p>

        <ContactForm />

        <div style={{ marginTop: "60px", fontSize: "1rem", color: "#4b5563" }}>
          <p>
            Phone: <a href="tel:+923330642100">+923330642100</a>
          </p>
          <p>
            <SiGmail />{" "}
            <a href="mailto:paksmbtravels@gmail.com">paksmbtravels@gmail.com</a>
          </p>
          <p>
            <FaWhatsapp />{" "}
            <a
              href="https://wa.me/92333642100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
