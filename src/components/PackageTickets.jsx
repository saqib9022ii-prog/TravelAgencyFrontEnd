import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/PackageTickets.css";
import PackageCard from "./PackageCard";

const PackagesTickets = () => {
  const [packagesTicketsData, setPackagesTicketsData] = useState([]);
  const whatsappNumber = "923330642100";

  // Fetch data from backend
  const fetchData = async () => {
    try {
      const packagesRes = await axios.get("http://localhost:5000/api/packages");
      const ticketsRes = await axios.get("http://localhost:5000/api/tickets");

      // Combine packages and tickets into a single array
      setPackagesTicketsData([...packagesRes.data, ...ticketsRes.data]);
    } catch (err) {
      console.error("Failed to fetch packages/tickets:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="packages-tickets">
      <div className="packages-tickets__container">
        <h2 className="packages-tickets__title">Umrah Packages & Ticket Estimates</h2>

        <div className="packages-tickets__grid">
          {packagesTicketsData.map((item) => (
            <PackageCard key={item.id} item={item} whatsappNumber={whatsappNumber} />
          ))}
        </div>

        <p className="packages-tickets__note">
          * All prices are estimates and may vary depending on season and availability.
        </p>
      </div>
    </section>
  );
};

export default PackagesTickets;
