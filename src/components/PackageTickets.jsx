import React, { useEffect, useState } from "react";
import api from "../api/axios";
import "../styles/PackageTickets.css";
import PackageCard from "./PackageCard";

const PackagesTickets = () => {
  const [packagesTicketsData, setPackagesTicketsData] = useState([]);
  const whatsappNumber = "923330642100";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const packagesRes = await api.get("/api/packages");
        const ticketsRes = await api.get("/api/tickets");

        // Combine packages & tickets
        setPackagesTicketsData([
          ...packagesRes.data,
          ...ticketsRes.data,
        ]);
      } catch (err) {
        console.error("Failed to fetch packages/tickets:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="packages-tickets">
      <div className="packages-tickets__container">
        <h2 className="packages-tickets__title">
          Umrah Packages & Ticket Estimates
        </h2>

        <div className="packages-tickets__grid">
          {packagesTicketsData.map((item, index) => (
            <PackageCard
              key={`${item._id || item.id}-${index}`}
              item={item}
              whatsappNumber={whatsappNumber}
            />
          ))}
        </div>

        <p className="packages-tickets__note">
          * All prices are estimates and may vary depending on season and
          availability.
        </p>
      </div>
    </section>
  );
};

export default PackagesTickets;
