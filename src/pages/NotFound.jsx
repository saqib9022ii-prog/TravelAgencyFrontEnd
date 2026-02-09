import { Link } from "react-router-dom";
import Seo from "../seo/Seo";

const NotFound = () => {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center" }}>
      <Seo
        title="Page not found"
        description="The page you requested could not be found."
        noIndex
      />

      <h1 style={{ fontSize: "2.5rem", color: "#1e3a8a", marginBottom: "20px" }}>
        Page not found
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "30px", color: "#4b5563" }}>
        The link may be broken or the page may have been moved.
      </p>

      <Link to="/" className="btn btn-secondary">
        Go to Home
      </Link>
    </section>
  );
};

export default NotFound;
