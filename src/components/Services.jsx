// src/components/services/Services.jsx
import "../styles/Services.css";

const servicesData = [
  {
    title: "Umrah Packages",
    description:
      "Economy, Standard, and VIP packages with hotel, transport, and estimated pricing.",
    ctaText: "View Packages",
    ctaLink: "/umrah-packages",
  },
  {
    title: "Air Ticket Prices",
    description:
      "We provide services for Umrah, Work, and Visit visas. Contact us for latest rates.",
    ctaText: "WhatsApp for Rates",
    ctaLink: "https://wa.me/923330642100?text=I'm%20interested%20in%20ticket%20estimates",
    isWhatsapp: true,
  },
  {
    title: "Work Visa Assistance",
    description:
      "Guidance on work visas, required documents, and ticket prices for various countries.",
    ctaText: "Contact for Assistance",
    ctaLink: "https://wa.me/923330642100?text=I%20need%20work%20visa%20assistance",
    isWhatsapp: true,
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services__container">
        <h2 className="services__title">Our Services</h2>
        <div className="services__grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.isWhatsapp ? (
                <a
                  href={service.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  {service.ctaText}
                </a>
              ) : (
                <a href={service.ctaLink} className="btn btn-secondary">
                  {service.ctaText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
