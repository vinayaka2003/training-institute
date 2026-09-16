import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Training<span>Institute</span>
        </Link>

        <div 
          className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`} 
          onClick={closeMenu}
        />

        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <div className="nav-links">
            <Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu} style={{"--i": 1}}>Home</Link>
            <Link to="/classes" className={isActive("/classes") ? "active" : ""} onClick={closeMenu} style={{"--i": 2}}>Classes</Link>
            <Link to="/course-details" className={isActive("/course-details") ? "active" : ""} onClick={closeMenu} style={{"--i": 3}}>Courses</Link>
            <Link to="/trainers" className={isActive("/trainers") ? "active" : ""} onClick={closeMenu} style={{"--i": 4}}>Trainers & Mentors</Link>
            <Link to="/placements" className={isActive("/placements") ? "active" : ""} onClick={closeMenu} style={{"--i": 5}}>Placements</Link>
            <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={closeMenu} style={{"--i": 6}}>Contact</Link>
          </div>
          <button className="header-cta mobile-cta" style={{"--i": 7}}>
            Enroll Now
          </button>
        </nav>

        <div className="header-actions">
          <button className="header-cta desktop-cta">
            Enroll Now
          </button>
          
          <button 
            className={`mobile-toggle ${isMobileMenuOpen ? "open" : ""}`} 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
