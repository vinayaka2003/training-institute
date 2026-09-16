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
          <span>Training<span>Institute</span></span>
        </Link>

        <div 
          className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`} 
          onClick={closeMenu}
        />

        <nav
          className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <div className="nav-links">
            <Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu} style={{"--i": 1}} aria-current={isActive("/") ? "page" : undefined}>Home</Link>
            <Link to="/classes" className={isActive("/classes") ? "active" : ""} onClick={closeMenu} style={{"--i": 2}} aria-current={isActive("/classes") ? "page" : undefined}>Classes</Link>
            <Link to="/course-details" className={isActive("/course-details") ? "active" : ""} onClick={closeMenu} style={{"--i": 3}} aria-current={isActive("/course-details") ? "page" : undefined}>Courses</Link>
            <Link to="/trainers" className={isActive("/trainers") ? "active" : ""} onClick={closeMenu} style={{"--i": 4}} aria-current={isActive("/trainers") ? "page" : undefined}>Trainers & Mentors</Link>
            <Link to="/placements" className={isActive("/placements") ? "active" : ""} onClick={closeMenu} style={{"--i": 5}} aria-current={isActive("/placements") ? "page" : undefined}>Placements</Link>
            <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={closeMenu} style={{"--i": 6}} aria-current={isActive("/contact") ? "page" : undefined}>Contact</Link>
          </div>
          <Link to="/classes" className="header-cta mobile-cta" style={{"--i": 7}} onClick={closeMenu}>
            Enroll Now
          </Link>
        </nav>

        <div className="header-actions">
          <Link to="/classes" className="header-cta desktop-cta">
            Enroll Now
          </Link>
          
          <button 
            className={`mobile-toggle ${isMobileMenuOpen ? "open" : ""}`} 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            type="button"
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
