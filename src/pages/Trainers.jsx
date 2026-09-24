import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/trainers.css";

const trainers = [
  {
    name: "Rahul Sharma",
    role: "Full Stack Development",
    experience: "8+ Years",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Priya Nair",
    role: "Data Science & AI",
    experience: "7+ Years",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Arjun Kumar",
    role: "Java & Backend",
    experience: "9+ Years",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sneha Rao",
    role: "UI/UX Design",
    experience: "6+ Years",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Vikramaditya Das",
    role: "Cloud & DevOps",
    experience: "10+ Years",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ananya Deshmukh",
    role: "Cyber Security & Systems",
    experience: "8+ Years",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
  },
];

const skills = [
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "AI & ML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Data Science",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "UI/UX",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "DevOps",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
];

function Trainers() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(trainers.length / itemsPerPage);
  const indexOfLastTrainer = currentPage * itemsPerPage;
  const indexOfFirstTrainer = indexOfLastTrainer - itemsPerPage;
  const currentTrainers = trainers.slice(indexOfFirstTrainer, indexOfLastTrainer);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="trainers-page">

      {/* HERO */}
      <section className="trainers-hero">
        <div className="hero-top">
          <span className="eyebrow">TRAINERS & MENTORS</span>
        </div>

        <div className="hero-main">
          <h1 className="reveal">
            <span className="title-line">Learn from</span>
            <em>people who build.</em>
          </h1>

          <div className="hero-side reveal reveal-delay-1">
            <p>
              Industry experience.
              <br />
              Practical knowledge.
              <br />
              Real mentorship.
            </p>

            <a href="#trainers" className="scroll-link animated-link">
              Meet the team
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-line" />
      </section>

      {/* TRAINERS */}
      <section className="trainers-section" id="trainers">

        <div className="section-top">
          <span className="eyebrow">THE TEAM</span>

          <h2>
            The people
            <br />
            behind your learning.
          </h2>
        </div>

        <div className="trainers-grid">
          {currentTrainers.map((trainer, index) => (
            <Tilt key={trainer.name} tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1000} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.12} glareColor="white" glarePosition="all" borderRadius="20px">
              <article className={`trainer-card spotlight-card reveal reveal-delay-${(index % 3) + 1}`} onMouseMove={handleMouseMove}>

                <div className="trainer-image-wrap image-hover">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="trainer-image"
                  />

                  <span className="trainer-number">
                    0{(currentPage - 1) * itemsPerPage + index + 1}
                  </span>

                  <span className="trainer-experience">
                    {trainer.experience}
                  </span>
                </div>

                <div className="trainer-info">
                  <div>
                    <h3>{trainer.name}</h3>
                    <p>{trainer.role}</p>
                  </div>

                  <span className="arrow">↗</span>
                </div>

              </article>
            </Tilt>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              className="pagination-btn"
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }}
            >
              <ChevronLeft size={16} /> Previous
            </button>

            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  className={`pagination-num ${currentPage === pageNum ? "active" : ""}`}
                  onClick={() => {
                    setCurrentPage(pageNum);
                  }}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              className="pagination-btn"
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        )}
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section">

        <div className="experience-title">
          <span className="eyebrow">EXPERIENCE MATTERS</span>

          <h2>
            Learn from
            <br />
            <em>real experience.</em>
          </h2>
        </div>

        <div className="stats">

          <div className="stat">
            <strong>50<span>+</span></strong>
            <p>Industry Experts</p>
          </div>

          <div className="stat">
            <strong>8<span>+</span></strong>
            <p>Years Avg. Experience</p>
          </div>

          <div className="stat">
            <strong>10K<span>+</span></strong>
            <p>Students Trained</p>
          </div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="expertise-section">

        <div className="expertise-header">
          <span className="eyebrow">EXPERTISE</span>

          <h2>
            What they
            <br />
            <em>know.</em>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <Tilt key={skill.name} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.03} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.15} glareColor="white" glarePosition="all" borderRadius="16px">
              <div className="skill-card spotlight-card" onMouseMove={handleMouseMove}>
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <span className="skill-name">{skill.name}</span>
              </div>
            </Tilt>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="trainers-cta">

        <span className="eyebrow">START YOUR JOURNEY</span>

        <h2>
          Your next chapter
          <br />
          <em>starts here.</em>
        </h2>

        <p>
          Learn from experts. Build something real.
        </p>

        <a href="/classes" className="cta-button btn-magnetic">
          Explore Courses
          <span>→</span>
        </a>

      </section>

    </div>
  );
}

export default Trainers;