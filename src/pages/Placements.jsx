import "../styles/placements.css";
import { FaGoogle, FaMicrosoft, FaApple, FaAmazon, FaFacebook } from "react-icons/fa";
import { SiNvidia, SiMeta, SiNetflix } from "react-icons/si";

const students = [
  {
    name: "Aditya Kumar",
    role: "Software Developer",
    company: "Infosys",
    package: "8.5 LPA",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Megha Rao",
    role: "Data Analyst",
    company: "Deloitte",
    package: "7.2 LPA",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Rohit Sharma",
    role: "Full Stack Developer",
    company: "Accenture",
    package: "9.1 LPA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  },
];

const companies = [
  { name: "Google", icon: FaGoogle, color: "#4285F4" },
  { name: "Microsoft", icon: FaMicrosoft, color: "#00A4EF" },
  { name: "NVIDIA", icon: SiNvidia, color: "#76B900" },
  { name: "Facebook", icon: FaFacebook, color: "#1877F2" },
  { name: "Amazon", icon: FaAmazon, color: "#FF9900" },
  { name: "Meta", icon: SiMeta, color: "#0468FF" },
  { name: "Apple", icon: FaApple, color: "#FFFFFF" },
  { name: "Netflix", icon: SiNetflix, color: "#E50914" },
];

const steps = [
  {
    number: "01",
    title: "Build your skills",
    text: "Learn through practical projects and industry-focused training.",
  },
  {
    number: "02",
    title: "Prepare for interviews",
    text: "Get guidance with aptitude, technical and interview preparation.",
  },
  {
    number: "03",
    title: "Meet employers",
    text: "Connect with hiring companies through placement opportunities.",
  },
  {
    number: "04",
    title: "Start your career",
    text: "Turn your skills into your first professional opportunity.",
  },
];

function Placements() {
  return (
    <main className="placements-page">
      {/* HERO */}
      <section className="placements-hero">
        <div className="placements-hero-top">
          <span className="eyebrow">PLACEMENTS</span>

        </div>

        <div className="placements-hero-content">
          <h1>Learn.<br /><em>Get placed.</em></h1>
          <div className="placements-hero-side">
            <p>Skills that open doors.<br />Careers that move forward.</p>
            <div className="hero-stat">
              <strong>10K+</strong>
              <span>Students trained</span>
            </div>
          </div>
        </div>

        <div className="placements-hero-bottom">
          <span>REAL PEOPLE</span>
          <span>REAL CAREERS</span>
          <span>REAL OPPORTUNITIES</span>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="placement-numbers">
        <div className="numbers-heading">
          <span className="eyebrow">BY THE NUMBERS</span>
          <h2>Your career<br /><em>starts here.</em></h2>
        </div>
        <div className="numbers-grid">
          <div className="big-number">
            <strong>10K<span>+</span></strong>
            <p>Students trained</p>
          </div>
          <div className="big-number">
            <strong>500<span>+</span></strong>
            <p>Hiring partners</p>
          </div>
          <div className="big-number">
            <strong>8.5<span>LPA</span></strong>
            <p>Highest package</p>
          </div>
          <div className="big-number">
            <strong>92<span>%</span></strong>
            <p>Placement assistance</p>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="success-section">
        <div className="success-header">
          <span className="eyebrow">SUCCESS STORIES</span>
          <h2>From classroom<br /><em>to career.</em></h2>
          <p>Meet some of the learners who turned their skills into career opportunities.</p>
        </div>

        <div className="students-grid">
          {students.map((student, index) => (
            <article className="student-card" key={student.name}>
              <div className="student-image-wrap">
                <img src={student.image} alt={student.name} />
                <span className="student-number">0{index + 1}</span>
                <span className="student-package">{student.package}</span>
              </div>
              <div className="student-info">
                <div>
                  <h3>{student.name}</h3>
                  <p>{student.role}</p>
                </div>
                <strong>{student.company}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMPANIES */}
      <section className="companies-section">
        <div className="companies-title">
          <span className="eyebrow">HIRING PARTNERS</span>
          <h2>Where our<br /><em>learners go.</em></h2>
        </div>
        <div className="companies-grid">
          {companies.map((company) => (
            <div className="company-card" key={company.name} style={{ "--hover-color": company.color }}>
              <company.icon className="company-icon" />
              <span className="company-name">{company.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="career-process">
        <div className="process-heading">
          <span className="eyebrow">THE JOURNEY</span>
          <h2>Four steps.<br /><em>One career.</em></h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="placements-cta">
        <span className="eyebrow">YOUR TURN</span>
        <h2>Ready to build<br /><em>your career?</em></h2>
        <p>Start learning today and take the next step toward your goals.</p>
        <a href="/classes" className="placement-cta-button">Explore Courses <span>→</span></a>
      </section>
    </main>
  );
}

export default Placements;