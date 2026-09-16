import "../styles/trainers.css";

const trainers = [
  {
    name: "Rahul Sharma",
    role: "Senior Full Stack Developer",
    experience: "8+ Years Experience",
    expertise: ["React", "Node.js", "Java"],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Priya Nair",
    role: "Data Science Mentor",
    experience: "7+ Years Experience",
    expertise: ["Python", "Machine Learning", "SQL"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Arjun Kumar",
    role: "Java & Backend Trainer",
    experience: "9+ Years Experience",
    expertise: ["Java", "Spring Boot", "APIs"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Sneha Rao",
    role: "UI/UX Design Mentor",
    experience: "6+ Years Experience",
    expertise: ["Figma", "UI/UX", "Design"],
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Karan Mehta",
    role: "Cloud & DevOps Mentor",
    experience: "8+ Years Experience",
    expertise: ["AWS", "Docker", "DevOps"],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Ananya Iyer",
    role: "Career & Placement Mentor",
    experience: "10+ Years Experience",
    expertise: ["Interviews", "Career", "Placement"],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
  },
];

const benefits = [
  {
    number: "01",
    title: "Industry Experience",
    description:
      "Learn from professionals with practical experience and knowledge of real-world industry requirements.",
  },
  {
    number: "02",
    title: "Practical Learning",
    description:
      "Build your skills through practical projects, real-world examples, and hands-on learning.",
  },
  {
    number: "03",
    title: "Career Guidance",
    description:
      "Get guidance for interviews, resumes, portfolios, and the skills employers are looking for.",
  },
  {
    number: "04",
    title: "Personalized Mentorship",
    description:
      "Receive continuous feedback and guidance throughout your learning journey.",
  },
];

function Trainers() {
  return (
    <div className="trainers-page">
      {/* Hero */}
      <section className="trainers-hero">
        <div className="trainers-hero-content">
          <span className="section-label">OUR EXPERTS</span>

          <h1>
            Learn From
            <span> Industry Experts</span>
          </h1>

          <p>
            Meet our experienced trainers and mentors who bring practical
            knowledge, industry experience, and real-world insights into every
            classroom.
          </p>

          <a href="#trainers" className="trainers-primary-btn">
            Meet Our Trainers
            <span>↓</span>
          </a>
        </div>

        <div className="hero-stat">
          <strong>50+</strong>
          <span>Industry Experts</span>
        </div>
      </section>

      {/* Trainers */}
      <section className="trainers-section" id="trainers">
        <div className="section-heading">
          <div>
            <span className="section-label">MEET THE TEAM</span>
            <h2>Our Trainers & Mentors</h2>
          </div>

          <p>
            Experienced professionals dedicated to helping you build
            practical skills and confidence for your career.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <article className="trainer-card" key={trainer.name}>
              <div className="trainer-image-wrapper">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="trainer-image"
                />

                <span className="trainer-experience">
                  {trainer.experience}
                </span>
              </div>

              <div className="trainer-content">
                <h3>{trainer.name}</h3>

                <p className="trainer-role">{trainer.role}</p>

                <div className="expertise-list">
                  {trainer.expertise.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <a href="#" className="trainer-link">
                  View Profile <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Learn From Us */}
      <section className="benefits-section">
        <div className="benefits-heading">
          <span className="section-label">WHY LEARN WITH US</span>

          <h2>
            More Than Just
            <span> Training.</span>
          </h2>

          <p>
            Our mentors combine technical expertise with practical experience
            to help you become industry-ready.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit-card" key={benefit.number}>
              <span className="benefit-number">{benefit.number}</span>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="expertise-section">
        <div className="expertise-content">
          <span className="section-label">OUR EXPERTISE</span>

          <h2>Skills That Matter in the Real World</h2>

          <p>
            Learn technologies and tools that are widely used across modern
            software development and technology careers.
          </p>
        </div>

        <div className="skills-wrapper">
          {[
            "Java",
            "Python",
            "React",
            "Node.js",
            "JavaScript",
            "SQL",
            "Machine Learning",
            "Data Science",
            "UI/UX",
            "Figma",
            "AWS",
            "DevOps",
          ].map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="trainers-cta">
        <div>
          <span className="section-label">START YOUR JOURNEY</span>

          <h2>Ready to Learn From Industry Experts?</h2>

          <p>
            Explore our courses and start building the skills for your future.
          </p>
        </div>

        <a href="/classes" className="cta-button">
          Explore Courses
          <span>→</span>
        </a>
      </section>
    </div>
  );
}

export default Trainers;