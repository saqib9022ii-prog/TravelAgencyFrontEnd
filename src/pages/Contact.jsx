import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#1e3a8a", marginBottom: "20px" }}>
        Contact Us
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "40px", color: "#4b5563" }}>
        Fill out the form below or contact us directly via WhatsApp.
      </p>
      <ContactForm />

      <div style={{ marginTop: "60px", fontSize: "1rem", color: "#4b5563" }}>
        <p>📞 Phone: +923330642100</p>
        <p> <SiGmail/> paksmbtravels@gmail.com</p>
        <p><FaWhatsapp/> <a href="https://wa.me/92333642100" target="_blank" rel="noopener noreferrer">Chat Now</a></p>
      </div>
    </section>
  );
};

export default Contact;
