// src/components/navbar/Navbar.jsx
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/NavBar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <NavLink to="/" className="navbar__logo">
          <img src={logo} alt="Travel Agency Logo" />
          <span>Pak Sambrial Travels</span>
        </NavLink>

        {/* Navigation */}
        <ul className="navbar__links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>

          

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/visa"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Visa
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* CTA */}
        <div className="navbar__cta">
          <NavLink to="/tours" className="btn-primary">
            Book Now
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
