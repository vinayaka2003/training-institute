import { useState } from "react";
import {
  Sparkles,
  Clock,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  X,
  Send,
  Layers,
  Award,
} from "lucide-react";
import "../styles/courses.css";

function Courses() {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedDomain, setSelectedDomain] = useState("All");

  // Track which course has its curriculum expanded
  const [expandedCurriculum, setExpandedCurriculum] = useState(null);

  // Modal State for Course Preview & Enrollment
  const [activeCourseModal, setActiveCourseModal] = useState(null);
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);
  const [enrollName, setEnrollName] = useState("");
  const [enrollEmail, setEnrollEmail] = useState("");

  const courses = [
    {
      id: "fs-web",
      title: "Full Stack Web Development",
      duration: "16 Weeks",
      level: "Beginner to Advanced",
      levelCategory: "Beginner",
      domain: "Web & Frontend",
      skills: ["React.js", "Node.js", "Express", "MongoDB", "Git & GitHub", "REST APIs"],
      summary: "Build production-grade web applications from responsive interfaces to database deployments with live project code reviews.",
      capstone: "Full Stack E-Commerce & Payment Engine",
      modules: [
        { num: "01", title: "Frontend Engineering", desc: "React hooks, state management, Tailwind/vanilla responsive design systems." },
        { num: "02", title: "Backend Architecture", desc: "Node.js runtime, Express REST APIs, authentication, MongoDB Atlas." },
        { num: "03", title: "DevOps & Cloud Deploy", desc: "Dockerizing apps, environment configs, automated GitHub Actions CI/CD." },
      ],
      careerRoles: ["Full Stack Engineer", "React Developer", "Frontend Architect"],
    },
    {
      id: "java-micro",
      title: "Java Full Stack & Microservices",
      duration: "16 Weeks",
      level: "Intermediate",
      levelCategory: "Intermediate",
      domain: "Backend",
      skills: ["Core Java", "Spring Boot", "REST APIs", "MySQL", "Docker", "Kafka"],
      summary: "Master enterprise application development using industry-standard Java architectural patterns and high-throughput microservices.",
      capstone: "FinTech Banking Microservices with Kafka",
      modules: [
        { num: "01", title: "Java OOP & Concurrency", desc: "Multithreading, collection framework, memory management & JVM internals." },
        { num: "02", title: "Spring Boot Ecosystem", desc: "Dependency injection, Spring Data JPA, Hibernate, RESTful controllers." },
        { num: "03", title: "Distributed Microservices", desc: "Eureka service discovery, API Gateway, Docker containers, Kafka messaging." },
      ],
      careerRoles: ["Java SDE-2", "Backend Microservices Engineer", "Enterprise Architect"],
    },
    {
      id: "devops-cloud",
      title: "DevOps & Cloud Computing",
      duration: "12 Weeks",
      level: "Intermediate to Advanced",
      levelCategory: "Advanced",
      domain: "Cloud & DevOps",
      skills: ["Linux", "AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform"],
      summary: "Learn to containerize applications, configure automated testing pipelines, and manage scalable multi-region cloud infrastructure.",
      capstone: "Automated Kubernetes Multi-Region AWS Cluster",
      modules: [
        { num: "01", title: "Linux & Shell Scripting", desc: "Systems administration, networking, security policies, and bash automation." },
        { num: "02", title: "Containers & Orchestration", desc: "Docker multi-stage builds, Kubernetes deployments, ingress & service meshes." },
        { num: "03", title: "Infrastructure as Code", desc: "AWS VPC, EC2, ECS, Terraform automation, and observability monitoring." },
      ],
      careerRoles: ["DevOps Engineer", "Site Reliability Engineer (SRE)", "Cloud Architect"],
    },
    {
      id: "dsa-algo",
      title: "Data Structures & Algorithms",
      duration: "10 Weeks",
      level: "All Skill Levels",
      levelCategory: "All Levels",
      domain: "Algorithms",
      skills: ["Arrays & Hashmaps", "Trees & Graphs", "Dynamic Programming", "Time Complexity", "System Design"],
      summary: "Solve coding interview challenges with optimized space and time complexity for tier-1 tech roles.",
      capstone: "High-Scale Distributed Rate Limiter & Cache",
      modules: [
        { num: "01", title: "Algorithmic Patterns", desc: "Sliding window, two pointers, fast & slow pointers, prefix sums." },
        { num: "02", title: "Non-Linear Structures", desc: "Binary search trees, graph traversals (BFS/DFS), Dijkstra's algorithm." },
        { num: "03", title: "Dynamic Programming & Design", desc: "Memoization, tabulation, high-level system design fundamentals." },
      ],
      careerRoles: ["SDE-1 / SDE-2 (FAANG / Product)", "Competitive Programmer", "Core Systems Engineer"],
    },
  ];

  // Filtering Logic
  const filteredCourses = courses.filter((c) => {
    const matchesLevel =
      selectedLevel === "All" ||
      c.levelCategory === selectedLevel ||
      c.levelCategory === "All Levels";
    const matchesDomain =
      selectedDomain === "All" || c.domain === selectedDomain;

    return matchesLevel && matchesDomain;
  });

  const toggleCurriculum = (id) => {
    setExpandedCurriculum(expandedCurriculum === id ? null : id);
  };

  const handleOpenEnrollModal = (course) => {
    setActiveCourseModal(course);
    setEnrollSubmitted(false);
    setEnrollName("");
    setEnrollEmail("");
  };

  const handleCloseEnrollModal = () => {
    setActiveCourseModal(null);
    setEnrollSubmitted(false);
  };

  const handleSubmitEnroll = (e) => {
    e.preventDefault();
    setEnrollSubmitted(true);
  };

  return (
    <div className="courses-container">
      {/* Header Area */}
      <div className="courses-header">
        <span className="courses-tag">
          <Sparkles size={14} /> Curated Programs
        </span>
        <h1 className="courses-title">Explore Our Tech Programs</h1>
        <p className="courses-subtitle">
          In-depth technical programs designed with modern software stacks, hands-on production code, and dedicated industry mentorship.
        </p>
      </div>

      {/* Interactive Level & Domain Filters */}
      <div className="courses-filter-bar">
        <div className="filter-group-row">
          <span className="filter-group-title">Experience Level:</span>
          {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
            <button
              key={lvl}
              className={`course-filter-chip ${selectedLevel === lvl ? "active" : ""}`}
              onClick={() => setSelectedLevel(lvl)}
            >
              {lvl === "All" ? "All Levels" : lvl}
            </button>
          ))}
        </div>

        <div className="filter-group-row">
          <span className="filter-group-title">Specialization:</span>
          {["All", "Web & Frontend", "Backend", "Cloud & DevOps", "Algorithms"].map((dom) => (
            <button
              key={dom}
              className={`course-filter-chip ${selectedDomain === dom ? "active" : ""}`}
              onClick={() => setSelectedDomain(dom)}
            >
              {dom}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid">
        {filteredCourses.map((c) => {
          const isCurriculumOpen = expandedCurriculum === c.id;
          return (
            <div key={c.id} className="course-card">
              <div>
                <div className="card-top">
                  <span className="level-badge">{c.level}</span>
                  <span className="duration-badge">
                    <Clock size={13} />
                    <strong>{c.duration}</strong>
                  </span>
                </div>

                <h3 className="course-title">{c.title}</h3>
                <p className="course-summary">{c.summary}</p>

                {/* Capstone Box */}
                <div className="capstone-box">
                  <Award size={16} />
                  <span>Capstone: {c.capstone}</span>
                </div>

                <div className="skills-wrapper">
                  {c.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Expandable Curriculum Accordion */}
                <button
                  className="curriculum-accordion-btn"
                  onClick={() => toggleCurriculum(c.id)}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <BookOpen size={15} color="#ea580c" />
                    {isCurriculumOpen ? "Hide Syllabus Details" : "View Curriculum Modules (3)"}
                  </span>
                  {isCurriculumOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {isCurriculumOpen && (
                  <div className="curriculum-drawer">
                    {c.modules.map((m, mIdx) => (
                      <div key={mIdx} className="module-item">
                        <span className="module-num">M{m.num}</span>
                        <div>
                          <div className="module-title">{m.title}</div>
                          <div className="module-desc">{m.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="course-learn-btn"
                onClick={() => handleOpenEnrollModal(c)}
              >
                Enroll & View Syllabus <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Course Details Preview & Enrollment Modal */}
      {activeCourseModal && (
        <div className="modal-backdrop" onClick={handleCloseEnrollModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseEnrollModal}>
              <X size={18} />
            </button>

            {enrollSubmitted ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "#16a34a",
                    color: "#ffffff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.2rem",
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: "900", color: "#0f172a", marginBottom: "0.5rem" }}>
                  Syllabus Sent & Enrollment Initiated!
                </h2>
                <p style={{ color: "#64748b", fontSize: "0.98rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                  Thank you, <strong>{enrollName}</strong>. The comprehensive curriculum guide for{" "}
                  <strong>{activeCourseModal.title}</strong> has been emailed. An instructor will contact you with batch placement options.
                </p>
                <button
                  className="modal-submit-btn"
                  onClick={handleCloseEnrollModal}
                  style={{ width: "auto", padding: "12px 28px", margin: "0 auto" }}
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <span className="courses-tag" style={{ marginBottom: "0.8rem", padding: "4px 12px", fontSize: "0.8rem" }}>
                  {activeCourseModal.duration} • {activeCourseModal.level}
                </span>
                <h2 style={{ fontSize: "1.6rem", fontWeight: "900", color: "#0f172a", marginBottom: "0.4rem" }}>
                  {activeCourseModal.title}
                </h2>
                <p style={{ color: "#64748b", fontSize: "0.92rem", marginBottom: "1.2rem" }}>
                  {activeCourseModal.summary}
                </p>

                <div style={{ background: "#f8fafc", padding: "12px 16px", borderRadius: "12px", marginBottom: "1.4rem" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: "700", color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>
                    Target Career Roles Unlocked:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {activeCourseModal.careerRoles.map((role, rIdx) => (
                      <span key={rIdx} style={{ background: "#ffffff", border: "1px solid #cbd5e1", padding: "3px 8px", borderRadius: "6px", fontSize: "0.82rem", fontWeight: "700", color: "#0f172a" }}>
                        ✓ {role}
                      </span>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmitEnroll}>
                  <div className="modal-form-group">
                    <label className="modal-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adithya Rao"
                      className="modal-input"
                      value={enrollName}
                      onChange={(e) => setEnrollName(e.target.value)}
                    />
                  </div>

                  <div className="modal-form-group">
                    <label className="modal-label">Email Address for Syllabus</label>
                    <input
                      type="email"
                      required
                      placeholder="adithya@example.com"
                      className="modal-input"
                      value={enrollEmail}
                      onChange={(e) => setEnrollEmail(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    <Send size={16} /> Request Complete Syllabus & Enroll
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;