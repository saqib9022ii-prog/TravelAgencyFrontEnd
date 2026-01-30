// src/components/hero/Hero.jsx
import "../styles/Hero.css";

const Hero = () => {
  const whatsappNumber = "923001234567"; // replace with real number
  const whatsappMessage =
    "Assalamualaikum, I would like to get information about Umrah packages and ticket estimates.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <h1 className="hero__title">
            Umrah Packages & Work Visa Ticket Estimates
          </h1>

          <p className="hero__subtitle">
            Trusted Umrah, work visa and air ticket services with transparent
            estimated pricing. Contact us for latest rates and complete guidance.
          </p>

          <div className="hero__actions">
            {/* Primary CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              WhatsApp for Latest Prices
            </a>

            {/* Secondary CTA */}
            <a href="/umrah-packages" className="btn btn-secondary">
              View Umrah Packages
            </a>
          </div>

          <p className="hero__note">
            * Prices shown are estimates and may vary based on availability and
            season.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
