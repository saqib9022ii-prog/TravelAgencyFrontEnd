// src/components/packagesTickets/PackageCard.jsx
import "../styles/PackageCard.css";

const PackageCard = ({ item, whatsappNumber }) => {
  // WhatsApp link text based on item type
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    item.type === "package"
      ? `Assalamualaikum, I am interested in the package "${item.title}". Please provide details.`
      : `Assalamualaikum, I am interested in the ticket "${item.title}" from ${item.route}. Please provide details.`
  )}`;

  return (
    <div className="package-card">
      <h3>{item.title}</h3>

      <ul>
        {/* For packages */}
        {item.type === "package" && (
          <>
            {item.duration && (
              <li>
                <strong>Duration:</strong> {item.duration}
              </li>
            )}
            {item.hotel_distance && (
              <li>
                <strong>Hotel Distance:</strong> {item.hotel_distance}
              </li>
            )}
            {item.transport && (
              <li>
                <strong>Transport:</strong> {item.transport}
              </li>
            )}
            {item.price && (
              <li>
                <strong>Estimated Price:</strong> {item.price}
              </li>
            )}
          </>
        )}

        {/* For tickets */}
        {item.type === "ticket" && (
          <>
            {item.route && (
              <li>
                <strong>Route:</strong> {item.route}
              </li>
            )}
            {item.price && (
              <li>
                <strong>Price Range:</strong> {item.price}
              </li>
            )}
            {item.season && (
              <li>
                <strong>Season:</strong> {item.season}
              </li>
            )}
          </>
        )}
      </ul>

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
