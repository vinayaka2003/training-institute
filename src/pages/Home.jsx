import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronUp,
  Code2,
  GraduationCap,
  Layers3,
  Play,
  Star,
  Users,
} from "lucide-react";
import "../styles/home.css";

const codeTabs = {
  "App.jsx": [
    ["01", '<span class="c-comment">// build skills that ship</span>'],
    ["02", '<span class="c-keyword">const</span> journey = ['],
    ["03", '  <span class="c-string">"Learn"</span>,'],
    ["04", '  <span class="c-string">"Build"</span>,'],
    ["05", '  <span class="c-string">"Get Mentored"</span>,'],
    ["06", '  <span class="c-string">"Get Placed"</span>'],
    ["07", "];"],
  ],
  "api.ts": [
    ["01", '<span class="c-keyword">const</span> api = <span class="c-function">createApi</span>();'],
    ["02", 'api.<span class="c-function">get</span>(<span class="c-string">"/projects"</span>, async () =&gt; {'],
    ["03", '  <span class="c-keyword">return</span> <span class="c-string">"real-world work"</span>;'],
    ["04", "});"],
  ],
  "deploy.yml": [
    ["01", '<span class="c-tag">name</span>: Production Pipeline'],
    ["02", '<span class="c-tag">on</span>: [push, pull_request]'],
    ["03", '<span class="c-tag">jobs</span>:'],
    ["04", '  <span class="c-tag">build</span>:'],
    ["05", '    <span class="c-tag">runs-on</span>: ubuntu-latest'],
  ],
};

const features = [
  {
    title: "Industry-ready Stacks",
    desc: "Work with modern tech stacks, Git workflows, live API deployments, and production tools.",
    label: "01",
    tone: "orange",
    icon: Layers3,
  },
  {
    title: "Hands-on Coding",
    desc: "Build real-world projects with active code reviews and daily practical lab exercises.",
    label: "02",
    tone: "blue",
    icon: Code2,
  },
  {
    title: "1-on-1 Guidance",
    desc: "Learn directly from tech leads with dedicated mentorship, doubt solving, and feedback.",
    label: "03",
    tone: "green",
    icon: GraduationCap,
  },
  {
    title: "Placement Support",
    desc: "Resume reviews, portfolio polishing, DSA practice, and direct partner hiring referrals.",
    label: "04",
    tone: "violet",
    icon: BriefcaseBusiness,
  },
];

const roadmap = [
  {
    no: "01",
    title: "Foundations",
    headline: "Core Computer Science & Modern Stacks",
    desc: "Build the fundamentals that strong developers rely on: JavaScript, React, state architecture, and Git workflows.",
    items: ["Modern ESNext & TS", "State Architecture", "Responsive Systems", "Git/GitHub Workflows"],
  },
  {
    no: "02",
    title: "Build",
    headline: "Enterprise APIs & Scalable Backends",
    desc: "Turn concepts into production-style applications with Node.js, databases, REST APIs, and authentication.",
    items: ["Node.js & Express", "PostgreSQL & MongoDB", "REST APIs", "Code Reviews"],
  },
  {
    no: "03",
    title: "Deploy",
    headline: "Cloud Infrastructure & CI/CD Pipelines",
    desc: "Learn the full workflow from local code to live cloud deployments using Docker, GitHub Actions, and AWS.",
    items: ["Docker Containers", "AWS Cloud", "CI/CD Pipelines", "Automated Testing"],
  },
  {
    no: "04",
    title: "Get Placed",
    headline: "Interview Prep & Direct Referrals",
    desc: "Turn your skills, projects, and portfolio into job opportunities with 1:1 mock technical interviews.",
    items: ["DSA Problem Patterns", "System Design Sprints", "Live Mock Interviews", "Placement Referrals"],
  },
];

const faqs = [
  ["What are the batch timings?", "We offer flexible Weekday and Weekend batches. All live coding sessions are recorded for review."],
  ["Can beginners join without a CS background?", "Yes! Our curriculum starts from engineering fundamentals and builds up to advanced enterprise architectures."],
  ["Is 1-on-1 mentorship included?", "Each student receives weekly 1-on-1 code reviews, doubt-clearing sessions, and direct mentor feedback."],
  ["What placement support is provided?", "We provide complete hiring support: resume polishing, GitHub portfolio reviews, mock technical interviews, and corporate referrals."],
];

function Home() {
  const statsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("App.jsx");
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState("");
  const [activeRoadmap, setActiveRoadmap] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [students, setStudents] = useState(1200);
  const [placed, setPlaced] = useState(85);

  useEffect(() => {
    const root = document.querySelector(".home-container");
    if (!root) return;

    const revealItems = root.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;

    let frame;
    const start = performance.now();
    const duration = 1000;

    const animate = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setStudents(Math.round(1200 * eased));
      setPlaced(Math.round(85 * eased));
      if (p < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [statsVisible]);

  const runCode = () => {
    setRunning(true);
    setOutput("");
    window.setTimeout(() => {
      setOutput("✓ Build ready · 42 tests passing · Deployed to live environment");
      setRunning(false);
    }, 500);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="home-container">
      {/* FIRST SCREEN VIEWPORT SECTION */}
      <div className="home-first-section">
        {/* HERO SECTION */}
        <section className="home-hero" data-reveal>
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              SPRING 2026 · ADMISSIONS OPEN
            </div>

            <h1 className="hero-title">
              <span>Master Tech</span>
              <span>Skills.</span>
              <em>Build your future.</em>
            </h1>

            <p className="hero-lead">
              Industry-vetted curriculum, daily live coding labs, and direct mentorship tailored to prepare aspiring engineers for high-impact developer roles.
            </p>

            <div className="hero-actions">
              <Link to="/course-details" className="hero-btn hero-btn-dark btn-magnetic">
                Explore Programs <ArrowRight size={16} />
              </Link>
              <Link to="/classes" className="hero-btn hero-btn-light btn-magnetic">
                <CalendarDays size={16} /> View Schedules
              </Link>
            </div>

            <div className="hero-microproof">
              <span><i className="live-dot" /> Live projects</span>
              <span><Check size={14} /> Expert mentors</span>
              <span><Check size={14} /> Career support</span>
            </div>
          </div>

          <div className="hero-stage">
            <div className="stage-grid" />

            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1000}
              scale={1.01}
              transitionSpeed={1200}
              glareEnable={true}
              glareMaxOpacity={0.06}
              glareColor="white"
              glarePosition="all"
              borderRadius="16px"
              className="ide-tilt-wrapper"
            >
              <div className="code-window">
                <div className="code-topbar">
                  <div className="window-dots">
                    <i className="red" /><i className="yellow" /><i className="green" />
                  </div>

                  <div className="code-tabs">
                    {Object.keys(codeTabs).map((tab) => (
                      <button
                        key={tab}
                        className={activeTab === tab ? "active" : ""}
                        onClick={() => {
                          setActiveTab(tab);
                          setOutput("");
                        }}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="code-content">
                  {codeTabs[activeTab].map(([number, line]) => (
                    <div className="code-row" key={number}>
                      <span>{number}</span>
                      <code dangerouslySetInnerHTML={{ __html: line }} />
                    </div>
                  ))}
                </div>

                <div className="code-bottom">
                  <span className="ready">
                    <i /> Ready to build
                  </span>
                  <button onClick={runCode} disabled={running}>
                    <Play size={12} fill="currentColor" />
                    {running ? "Running..." : "Run Code"}
                  </button>
                </div>

                {output && <div className="code-output">{output}</div>}
              </div>
            </Tilt>
          </div>
        </section>

        {/* METRICS & IMPACT RIBBON */}
        <section className="proof-ribbon" ref={statsRef} data-reveal>
          <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} scale={1.02} transitionSpeed={1000} borderRadius="14px">
            <div className="proof-cell spotlight-card" onMouseMove={handleMouseMove}>
              <Users />
              <div><strong>{students.toLocaleString()}<b>+</b></strong><span>Students trained</span></div>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} scale={1.02} transitionSpeed={1000} borderRadius="14px">
            <div className="proof-cell spotlight-card" onMouseMove={handleMouseMove}>
              <Star fill="currentColor" />
              <div><strong>4.9<b>/5</b></strong><span>Student rating</span></div>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} scale={1.02} transitionSpeed={1000} borderRadius="14px">
            <div className="proof-cell spotlight-card" onMouseMove={handleMouseMove}>
              <BriefcaseBusiness />
              <div><strong>{placed}<b>%</b></strong><span>Placement success</span></div>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} scale={1.02} transitionSpeed={1000} borderRadius="14px">
            <div className="proof-cell spotlight-card" onMouseMove={handleMouseMove}>
              <Code2 />
              <div><strong>100<b>%</b></strong><span>Project based</span></div>
            </div>
          </Tilt>
        </section>
      </div>

      {/* FEATURE BENTO GRID */}
      <section className="feature-section" data-reveal>
        <div className="section-intro">
          <div>
            <span className="section-kicker">WHY TRAINING INSTITUTE</span>
            <h2>Learn less like a classroom.<br /><em>Build more like a developer.</em></h2>
          </div>
          <p>One focused engineering system for practical skills, production projects, expert mentorship, and career placement.</p>
        </div>

        <div className="feature-bento">
          {features.map(({ title, desc, label, tone, icon: Icon }) => (
            <Tilt
              key={title}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1200}
              glareEnable={true}
              glareMaxOpacity={0.08}
              glareColor="white"
              glarePosition="all"
              borderRadius="16px"
              className="feature-tilt"
            >
              <article className={`feature-card ${tone} spotlight-card`} onMouseMove={handleMouseMove}>
                <div className="feature-head">
                  <div className="feature-icon"><Icon size={22} /></div>
                  <span>{label}</span>
                </div>
                <div className="feature-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <div className="feature-foot">
                  <span className="feature-explore">Explore</span>
                  <div className="feature-arrow"><ArrowDownRight size={16} /></div>
                </div>
              </article>
            </Tilt>
          ))}
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="marquee-strip" aria-label="Learning benefits" data-reveal>
        <div>REAL PROJECTS ✦ LIVE MENTORSHIP ✦ PORTFOLIO BUILDING ✦ CAREER SUPPORT ✦ REAL PROJECTS ✦ LIVE MENTORSHIP ✦ PORTFOLIO BUILDING ✦ CAREER SUPPORT ✦</div>
      </section>

      {/* STRUCTURED CAREER JOURNEY */}
      <section className="journey-section" data-reveal>
        <div className="section-intro centered">
          <span className="section-kicker">THE JOURNEY</span>
          <h2>From first line<br /><em>to first opportunity.</em></h2>
        </div>

        <div className="journey-tabs">
          {roadmap.map((item, index) => (
            <button
              key={item.no}
              className={activeRoadmap === index ? "active" : ""}
              onClick={() => setActiveRoadmap(index)}
            >
              <span>{item.no}</span>{item.title}
            </button>
          ))}
        </div>

        <Tilt
          tiltMaxAngleX={4}
          tiltMaxAngleY={4}
          perspective={1000}
          scale={1.01}
          transitionSpeed={1200}
          glareEnable={true}
          glareMaxOpacity={0.05}
          borderRadius="16px"
          className="journey-tilt"
        >
          <div className="journey-panel">
            <div className="journey-number">{roadmap[activeRoadmap].no}</div>
            <div className="journey-content">
              <span className="panel-kicker">PHASE {roadmap[activeRoadmap].no} · {roadmap[activeRoadmap].headline}</span>
              <h3>{roadmap[activeRoadmap].desc}</h3>
              <div className="journey-items">
                {roadmap[activeRoadmap].items.map((item) => (
                  <span key={item}><Check size={13} /> {item}</span>
                ))}
              </div>
            </div>
            <Link to="/course-details" className="panel-link">
              Explore curriculum <ArrowRight size={15} />
            </Link>
          </div>
        </Tilt>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="faq-section" data-reveal>
        <div className="section-intro centered">
          <span className="section-kicker">QUICK ANSWERS</span>
          <h2>Questions, <em>answered.</em></h2>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer], index) => {
            const open = openFaq === index;
            return (
              <div className={`faq-item ${open ? "open" : ""}`} key={question}>
                <button onClick={() => setOpenFaq(open ? null : index)}>
                  <span>{question}</span>
                  {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {open && <p>{answer}</p>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
