import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  const handleVisitUsClick = () => {
    const element = document.getElementById("map");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-ultra">
      <div className="footer-glow-top"></div>
      <div className="footer-container">
        {/* Column 1: Brand (Logo, Tagline & Social Media Icons) */}
        <div className="footer-brand">
          <a
            href="https://maps.google.com/?q=Bengaluru,Karnataka"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-logo"
            title="View our location on Google Maps"
          >
            <img src="/brand-logo.jpg" alt="TrainingInstitute Logo" className="footer-logo-icon" />
            <span className="logo-text">
              Training<span className="logo-highlight">Institute</span>
            </span>
          </a>

          <p className="brand-tagline">
            Learn practical skills. Build your career.
          </p>

          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              aria-label="Facebook"
              title="Follow us on Facebook"
            >
              <img
                src="https://cdn.svglogos.dev/logos/facebook.svg"
                alt="Facebook"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
              aria-label="Twitter / X"
              title="Follow us on X (Twitter)"
            >
              <img
                src="https://cdn.svglogos.dev/logos/x.svg"
                alt="X (Twitter)"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="LinkedIn"
              title="Connect with us on LinkedIn"
            >
              <img
                src="https://cdn.svglogos.dev/logos/linkedin-icon.svg"
                alt="LinkedIn"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Instagram"
              title="Follow us on Instagram"
            >
              <img
                src="https://cdn.svglogos.dev/logos/instagram-icon.svg"
                alt="Instagram"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube"
              aria-label="YouTube"
              title="Subscribe to our YouTube channel"
            >
              <img
                src="https://cdn.svglogos.dev/logos/youtube-icon.svg"
                alt="YouTube"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              aria-label="GitHub"
              title="Explore our GitHub repositories"
            >
              <img
                src="https://cdn.svglogos.dev/logos/github-icon.svg"
                alt="GitHub"
                className="social-icon-img"
              />
            </a>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div className="footer-links">
          <h3 className="footer-heading">Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course-details">Courses</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/trainers">Trainers & Mentors</Link></li>
            <li><Link to="/placements">Placements</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Get in Touch */}
        <div className="footer-contact">
          <h3 className="footer-heading">Get in Touch</h3>

          <div className="contact-item">
            <div className="contact-icon-wrap">
              <svg
                viewBox="0 0 24 24"
                className="contact-phone-icon"
                aria-hidden="true"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z" />
              </svg>
            </div>
            <div>
              <p className="contact-label">Call Us</p>
              <a href="tel:+919876543210" className="contact-value">+91 98765 43210</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrap">
              <img
                src="https://cdn.svglogos.dev/logos/google-gmail.svg"
                alt="Gmail"
                className="contact-icon-img"
              />
            </div>
            <div>
              <p className="contact-label">Email Us</p>
              <a href="mailto:info@traininginstitute.com" className="contact-value">info@traininginstitute.com</a>
            </div>
          </div>

          <Link
            to="/contact#map"
            onClick={handleVisitUsClick}
            className="contact-item contact-link"
            title="View our location on Contact page map"
          >
            <div className="contact-icon-wrap">
              <img
                src="https://cdn.svglogos.dev/logos/google-maps.svg"
                alt="Google Maps"
                className="contact-icon-img"
              />
            </div>
            <div>
              <p className="contact-label">Visit Us</p>
              <span className="contact-value">Bengaluru, Karnataka Hub</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Full-width Centered Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">
          © 2026 Training Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
