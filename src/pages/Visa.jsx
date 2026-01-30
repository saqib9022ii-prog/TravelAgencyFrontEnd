import React, { useEffect, useState } from "react";
import "../styles/Visa.css";
import axios from "axios";

const Visa = () => {
  const [visaData, setVisaData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/visa")
      .then(res => setVisaData(res.data));
  }, []);

  return (
    <section className="visa-page">
      <div className="visa-container">
        <h2>Available Visa Options</h2>

        <div className="visa-grid">
          {visaData.map((visa) => (
            <div className="visa-card" key={visa.id}>
              <img
                src={`http://localhost:5000${visa.image}`}
                alt={visa.type}
                className="visa-card__image"
              />

              <h3>{visa.type} - {visa.country}</h3>
              <p><strong>Duration:</strong> {visa.duration}</p>
              <p><strong>Price:</strong> {visa.price}</p>
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
  );
};

export default Visa;
