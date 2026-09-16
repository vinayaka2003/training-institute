import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Training<span>Institute</span>
          </Link>

          <p>
            Build your skills. Shape your career.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/course-details">Courses</Link>
          <Link to="/trainers">Trainers & Mentors</Link>
          <Link to="/placements">Placements</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@traininginstitute.com</p>
          <p>📍 Bengaluru, Karnataka</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Training Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
