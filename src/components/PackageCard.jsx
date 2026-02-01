// src/components/packagesTickets/PackageCard.jsx
import "../styles/PackageCard.css";

const PackageCard = ({ item, whatsappNumber }) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    item.type === "Umrah"
      ? `Assalamualaikum, I am interested in the ${item.name}. Please provide details.`
      : `Assalamualaikum, I want details for ${item.name} from ${item.from}.`
  )}`;

  return (
    <div className="package-card">
      <h3>{item.name}</h3>

      {item.type === "Umrah" ? (
        <ul>
          <li><strong>Duration:</strong> {item.duration}</li>
          <li><strong>Hotel Distance:</strong> {item.hotel_distance}</li>
          <li><strong>Transport:</strong> {item.transport}</li>
          <li><strong>Estimated Price:</strong> {item.estimated_price}</li>
        </ul>
      ) : (
        <ul>
          <li><strong>Route:</strong> {item.from}</li>
          <li><strong>Estimated Price:</strong> {item.priceRange}</li>
          <li><strong>Season:</strong> {item.season}</li>
        </ul>
      )}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp"
      >
        Contact via WhatsApp
      </a>
    </div>
    
  );
};

export default PackageCard;
