import { Link } from "react-router-dom";
import { FcPhone, FcFeedback, FcMindMap, FcGlobe } from "react-icons/fc";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer-ultra">
      <div className="footer-glow-top"></div>
      <div className="footer-container">
        
        {/* Brand & Newsletter Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-text">Training<span className="logo-highlight">Institute</span></span>
          </Link>
          <p className="brand-tagline">
            Learn practical skills. Build your career.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3 className="footer-heading">Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/course-details">Courses</Link></li>
            <li><Link to="/trainers">Trainers & Mentors</Link></li>
            <li><Link to="/placements">Placements</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3 className="footer-heading">Get in Touch</h3>
          <div className="contact-item">
            <FcPhone size={24} />
            <div>
              <p className="contact-label">Call Us</p>
              <p className="contact-value">+91 98765 43210</p>
            </div>
          </div>
          <div className="contact-item">
            <FcFeedback size={24} />
            <div>
              <p className="contact-label">Email Us</p>
              <p className="contact-value">info@traininginstitute.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FcGlobe size={24} />
            <div>
              <p className="contact-label">Visit Us</p>
              <p className="contact-value">Bengaluru, Karnataka Hub</p>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">© {new Date().getFullYear()} Training Institute. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
