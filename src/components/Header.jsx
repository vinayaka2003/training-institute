import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import EnrollModal from "./EnrollModal";
import Toast from "./Toast";
import "../styles/header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  
  // Interactive Expandable Search State & Refs
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

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

  // Auto-focus input when search expands
  useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  // Handle click outside and Escape key to collapse search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchOpen]);

  // Close search when navigating
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setIsSearchOpen(false);
  }

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

  // Expandable Search Handlers
  const handleToggleSearch = (e) => {
    e.preventDefault();
    if (!isSearchOpen) {
      setIsSearchOpen(true);
    } else if (searchQuery.trim()) {
      handleSearchSubmit(e);
    } else {
      setIsSearchOpen(false);
    }
  };

  const handleClearOrClose = () => {
    if (searchQuery) {
      setSearchQuery("");
      searchInputRef.current?.focus();
    } else {
      setIsSearchOpen(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/classes?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/brand-logo.jpg" alt="TrainingInstitute Logo" className="header-logo-icon" />
            <span className="logo-text">Training<span className="logo-highlight">Institute</span></span>
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
            {/* Interactive Expandable Search Bar Positioned between Contact & Enroll Now */}
            <div 
              className={`nav-search-container ${isSearchOpen ? "open" : ""}`}
              ref={searchContainerRef}
            >
              <form 
                onSubmit={handleSearchSubmit}
                className="nav-search-form"
                role="search"
              >
                <div className="nav-search-input-box">
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="nav-search-input"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search courses"
                    tabIndex={isSearchOpen ? 0 : -1}
                  />
                  {isSearchOpen && (
                    <button
                      type="button"
                      className="nav-search-clear-btn"
                      onClick={handleClearOrClose}
                      aria-label={searchQuery ? "Clear search query" : "Close search bar"}
                      title={searchQuery ? "Clear" : "Close"}
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  className="nav-search-toggle-btn"
                  onClick={handleToggleSearch}
                  aria-label={isSearchOpen ? "Submit search or close" : "Open search bar"}
                  aria-expanded={isSearchOpen}
                  title={isSearchOpen ? (searchQuery ? "Submit Search" : "Close") : "Search courses"}
                >
                  <Search size={18} className="search-icon" />
                </button>
              </form>
            </div>

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
