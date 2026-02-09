import { useEffect, useState } from "react";
import "../styles/Visa.css";
import api from "../api/axios";
import Seo from "../seo/Seo";

const Visa = () => {
  const [visaData, setVisaData] = useState([]);

  useEffect(() => {
    const fetchVisa = async () => {
      try {
        const res = await api.get("/api/visa");
        setVisaData(res.data);
      } catch (err) {
        console.error("Failed to fetch visa data:", err);
      }
    };

    fetchVisa();
  }, []);

  return (
    <>
      <Seo
        title="Visa Options"
        description="Explore available visa options and contact Pak Sambrial Travels via WhatsApp for pricing and guidance."
        keywords="visa, work visa, tourist visa, travel agency, pakistan, sambrial"
        path="/visa"
        image="/assets/uae_tourist_visa.jpg"
      />

      <section className="visa-page">
        <div className="visa-container">
          <h1>Available Visa Options</h1>

          <div className="visa-grid">
            {visaData.map((visa) => (
              <div className="visa-card" key={visa.id}>
                {visa.image_url && (
                  <img
                    src={visa.image_url}
                    alt={`${visa.type} visa for ${visa.country}`}
                    className="visa-card__image"
                    loading="lazy"
                    decoding="async"
                  />
                )}

                <h3>
                  {visa.type} - {visa.country}
                </h3>
                <p>
                  <strong>Duration:</strong> {visa.duration}
                </p>
                <p>
                  <strong>Price:</strong> {visa.price}
                </p>
                <p>{visa.description}</p>

                <a
                  href={`https://wa.me/923330642100?text=I'm interested in ${visa.type} (${visa.country})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  Contact via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Visa;
