import "../styles/trainers.css";

const trainers = [
  {
    name: "Rahul Sharma",
    role: "Full Stack Development",
    experience: "8+ Years",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sneha Rao",
    role: "UI/UX Design",
    experience: "6+ Years",
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
  return (
    <main className="trainers-page">

      {/* HERO */}
      <section className="trainers-hero">
        <div className="hero-top">
          <span className="eyebrow">TRAINERS & MENTORS</span>


        </div>

        <div className="hero-main">
          <h1>
            Learn from
            <br />
            <em>people who build.</em>
          </h1>

          <div className="hero-side">
            <p>
              Industry experience.
              <br />
              Practical knowledge.
              <br />
              Real mentorship.
            </p>

            <a href="#trainers" className="scroll-link">
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
          {trainers.map((trainer, index) => (
            <article className="trainer-card" key={trainer.name}>

              <div className="trainer-image-wrap">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="trainer-image"
                />

                <span className="trainer-number">
                  0{index + 1}
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
          ))}
        </div>
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
            <div className="skill-card" key={skill.name}>
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <span className="skill-name">{skill.name}</span>
            </div>
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

        <a href="/classes" className="cta-button">
          Explore Courses
          <span>→</span>
        </a>

      </section>

    </main>
  );
}

export default Trainers;