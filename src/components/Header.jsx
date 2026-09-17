import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import EnrollModal from "./EnrollModal";
import Toast from "./Toast";
import "../styles/header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
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

  const handleOpenEnroll = () => {
    closeMenu();
    setIsEnrollModalOpen(true);
  };

  // Option 3: Immediate Modal Close on Valid Submission & Trigger Floating Toast
  const handleEnrollSuccess = () => {
    setIsEnrollModalOpen(false);
    setIsToastVisible(false);
    setTimeout(() => {
      setIsToastVisible(true);
    }, 20);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
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
            <button
              type="button"
              className="header-cta mobile-cta"
              style={{"--i": 7}}
              onClick={handleOpenEnroll}
            >
              Enroll Now
            </button>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="header-cta desktop-cta"
              onClick={handleOpenEnroll}
            >
              Enroll Now
            </button>
            
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

      {/* Responsive Enrollment Modal Popup */}
      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        onSuccess={handleEnrollSuccess}
      />

      {/* Floating Top-Right Toast Notification Banner */}
      <Toast
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </>
  );
}

export default Header;
