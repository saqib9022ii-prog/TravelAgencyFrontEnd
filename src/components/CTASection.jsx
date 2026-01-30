// src/components/ctaSection/CTASection.jsx
import "../styles/CTASection.css";

const CTASection = () => {
  const whatsappNumber = "923330642100"; // Replace with your real number
  const whatsappMessage =
    "Assalamualaikum, I am interested in your Umrah or visa services. Please guide me.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="cta-section">
      <div className="cta-section__container">
        <h2 className="cta-section__title">
          Ready to Plan Your Trip?
        </h2>
        <p className="cta-section__subtitle">
          Get in touch with us for the latest Umrah packages, work visa tickets, and guidance. 
          We’ll provide estimates and help you plan every step of your journey.
        </p>
        <div className="cta-section__buttons">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-cta"
          >
            Contact via WhatsApp
          </a>
          <a href="/contact" className="btn btn-secondary btn-cta">
            Contact Form
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
