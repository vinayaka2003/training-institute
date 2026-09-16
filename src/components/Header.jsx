import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Training<span>Institute</span>
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/course-details">Courses</Link>
          <Link to="/trainers">Trainers & Mentors</Link>
          <Link to="/placements">Placements</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="header-cta">
          Enroll Now
        </button>
      </div>
    </header>
  );
}

export default Header;
