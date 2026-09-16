import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  GraduationCap,
  Rocket,
  Sparkles,
  ArrowRight,
  Calendar,
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Terminal,
  Layers,
  Award,
  Star,
} from "lucide-react";
import "../styles/home.css";

function Home() {
  const [touchedCard, setTouchedCard] = useState(null);

  // Stats Animated Counter State
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [count94, setCount94] = useState(0);
  const [count200, setCount200] = useState(0);
  const [count100, setCount100] = useState(0);

  useEffect(() => {
    let animationFrameId = null;
    let liveIntervalId = null;
    let hasTriggered = false;

    const startAnimation = () => {
      if (hasTriggered) return;
      hasTriggered = true;
      setStatsVisible(true);

      const duration = 2000; // ~2 seconds
      const startTime = performance.now();

      const animateCounts = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth cubic ease-out deceleration
        const ease = 1 - Math.pow(1 - progress, 3);

        setCount94(Math.round(ease * 94));
        setCount200(Math.round(ease * 200));
        setCount100(Math.round(ease * 100));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateCounts);
        } else {
          setCount94(94);
          setCount200(200);
          setCount100(100);

          // Background interval simulating live growing platform metrics
          liveIntervalId = setInterval(() => {
            setCount200((prev) => prev + 1);
            setCount94((prev) => (prev < 99 ? prev + 1 : 94));
            setCount100((prev) => prev + 1);
          }, 3000);
        }
      };

      animationFrameId = requestAnimationFrame(animateCounts);
    };

    let observer = null;
    if (window.IntersectionObserver && statsRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            if (observer) {
              observer.disconnect();
            }
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(statsRef.current);
    } else {
      startAnimation();
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (liveIntervalId) clearInterval(liveIntervalId);
    };
  }, []);

  // Interactive Code Playground State
  const [activeCodeTab, setActiveCodeTab] = useState("App.jsx");
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [codeOutput, setCodeOutput] = useState(null);

  // Interactive Roadmap State
  const [activeRoadmapStep, setActiveRoadmapStep] = useState(0);

  // Interactive FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const codeSnippets = {
    "App.jsx": [
      { num: "01", code: '<span class="c-kw">import</span> { useState } <span class="c-kw">from</span> <span class="c-str">"react"</span>;' },
      { num: "02", code: '<span class="c-kw">import</span> { InstituteCloud } <span class="c-kw">from</span> <span class="c-str">"@institute/sdk"</span>;' },
      { num: "03", code: "" },
      { num: "04", code: '<span class="c-kw">export default function</span> <span class="c-fn">LiveApp</span>() {' },
      { num: "05", code: '  <span class="c-kw">const</span> [status, setStatus] = <span class="c-fn">useState</span>(<span class="c-str">"deploying"</span>);' },
      { num: "06", code: '  <span class="c-com">// Production deployment with automated CI/CD</span>' },
      { num: "07", code: '  <span class="c-kw">return</span> <span class="c-tag">&lt;ProductionWorkspace ready={true} /&gt;</span>;' },
      { num: "08", code: "}" },
    ],
    "api.ts": [
      { num: "01", code: '<span class="c-kw">import</span> { Router, Request, Response } <span class="c-kw">from</span> <span class="c-str">"express"</span>;' },
      { num: "02", code: '<span class="c-kw">const</span> api = <span class="c-fn">Router</span>();' },
      { num: "03", code: "" },
      { num: "04", code: 'api.<span class="c-fn">get</span>(<span class="c-str">"/api/v1/cohorts"</span>, <span class="c-kw">async</span> (req, res) => {' },
      { num: "05", code: '  <span class="c-kw">const</span> batches = <span class="c-kw">await</span> Database.<span class="c-fn">getLiveBatches</span>();' },
      { num: "06", code: '  res.<span class="c-fn">status</span>(200).<span class="c-fn">json</span>({ success: <span class="c-kw">true</span>, batches });' },
      { num: "07", code: "});" },
      { num: "08", code: '<span class="c-kw">export default</span> api;' },
    ],
    "deploy.yml": [
      { num: "01", code: '<span class="c-tag">name</span>: Production Pipeline' },
      { num: "02", code: '<span class="c-tag">on</span>: [push, pull_request]' },
      { num: "03", code: '<span class="c-tag">jobs</span>:' },
      { num: "04", code: '  <span class="c-tag">build-and-test</span>:' },
      { num: "05", code: '    <span class="c-tag">runs-on</span>: ubuntu-latest' },
      { num: "06", code: '    <span class="c-tag">steps</span>:' },
      { num: "07", code: '      - <span class="c-tag">uses</span>: actions/checkout@v4' },
      { num: "08", code: '      - <span class="c-tag">run</span>: <span class="c-str">npm test && npm run deploy</span>' },
    ],
  };

  const handleRunCode = () => {
    setIsRunningCode(true);
    setCodeOutput("Executing build simulation...");
    setTimeout(() => {
      setCodeOutput("✓ Build succeeded (0.24s) • 42 tests passing • Deployed to live environment at https://app.production.live");
      setIsRunningCode(false);
    }, 600);
  };

  const roadmapSteps = [
    {
      step: "Phase 01",
      title: "Core Foundations",
      headline: "Master Core Computer Science & Stacks",
      desc: "Deep-dive into modern JavaScript/TypeScript, React fundamentals, component trees, and state machines with test-driven workflows.",
      deliverables: ["Modern ESNext & TS", "State Architecture", "Responsive Systems", "Git/GitHub Workflows"],
      icon: Code2,
    },
    {
      step: "Phase 02",
      title: "Enterprise Backend",
      headline: "Scalable APIs & Microservices",
      desc: "Build robust REST & GraphQL backends, database schema designs with PostgreSQL/MongoDB, and secure JWT/OAuth authentications.",
      deliverables: ["Node.js / Spring Boot", "PostgreSQL & MongoDB", "Redis Caching", "API Gateways"],
      icon: Layers,
    },
    {
      step: "Phase 03",
      title: "Cloud & DevOps",
      headline: "Containerization & CI/CD Pipelines",
      desc: "Containerize full-stack apps using Docker, write multi-stage build manifests, and set up continuous integration pipelines on AWS.",
      deliverables: ["Docker Containers", "Kubernetes Clusters", "AWS S3 / ECS", "GitHub Actions CI/CD"],
      icon: Terminal,
    },
    {
      step: "Phase 04",
      title: "Career & Placement",
      headline: "DSA, System Design & 1:1 Mock Interviews",
      desc: "Practice tier-1 tech coding interview challenges, high-level system design trade-offs, and receive direct corporate referrals.",
      deliverables: ["DSA Problem Patterns", "System Design Sprints", "Live Mock Interviews", "Direct Company Referrals"],
      icon: Award,
    },
  ];

  const faqs = [
    {
      q: "What are the live batch schedules and timings?",
      a: "We offer both Weekday batches (Mon - Fri, morning and evening slots) and Weekend batches (Sat - Sun, intensive labs). All live sessions are recorded and uploaded with code repositories for lifetime review.",
    },
    {
      q: "Can I join if I don't have a Computer Science degree?",
      a: "Yes, over 40% of our successful alumni come from non-CS backgrounds. Our curriculum starts from engineering foundations before progressing to advanced enterprise architectures.",
    },
    {
      q: "How does the 1-on-1 mentorship work?",
      a: "Each student is paired with a dedicated working tech lead. You receive weekly 1-on-1 code reviews, architectural feedback on your pull requests, and on-demand doubt clearance.",
    },
    {
      q: "What career and placement support is provided?",
      a: "We provide full placement assistance: resume reviews, GitHub portfolio polishing, 1-on-1 mock technical interviews, and direct hiring referrals to over 200+ partner companies.",
    },
  ];

  return (
    <div className="home-container">
      {/* 1. Interactive Split Hero Section */}
      <section className="home-split-hero">
        <div className="hero-left-content">
          <span className="home-tag">
            <span className="live-pulse-dot"></span> Spring 2026 Admissions Open
          </span>
          <h1 className="home-title">
            Master Modern Tech Skills with <span>Hands-on Innovation</span>
          </h1>
          <p className="home-subtitle">
            Industry-vetted curriculum, daily live coding labs, and direct mentorship tailored to prepare aspiring engineers for high-impact developer roles.
          </p>

          <div className="hero-cta-group">
            <Link to="/course-details" className="hero-primary-btn">
              Explore Programs <ArrowRight size={16} />
            </Link>
            <Link to="/classes" className="hero-secondary-btn">
              <Calendar size={16} /> View Schedules
            </Link>
          </div>

          <div className="hero-social-proof">
            <div className="social-proof-badge">
              <div className="rating-stars-box">
                <div className="stars-group">
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                </div>
                <span className="rating-val">4.9 / 5.0</span>
              </div>
              <span className="social-proof-divider"></span>
              <div className="social-proof-info">
                <span className="proof-main">1,200+ Developers Trained</span>
                <span className="proof-sub">
                  <CheckCircle2 size={12} color="#16a34a" /> Verified Alumni Reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Code Playground */}
        <div className="ide-widget">
          <div className="ide-header">
            <div className="ide-dots">
              <span className="ide-dot dot-red"></span>
              <span className="ide-dot dot-yellow"></span>
              <span className="ide-dot dot-green"></span>
            </div>
            <div className="ide-tabs">
              {Object.keys(codeSnippets).map((tab) => (
                <button
                  key={tab}
                  className={`ide-tab ${activeCodeTab === tab ? "active" : ""}`}
                  onClick={() => {
                    setActiveCodeTab(tab);
                    setCodeOutput(null);
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="ide-body">
            {codeSnippets[activeCodeTab].map((line, lIdx) => (
              <div key={lIdx} className="code-line">
                <span className="line-num">{line.num}</span>
                <span
                  className="line-text"
                  dangerouslySetInnerHTML={{ __html: line.code }}
                />
              </div>
            ))}
          </div>

          <div className="ide-footer">
            <div className="ide-status">
              <span className="live-pulse-dot" style={{ backgroundColor: "#10b981" }}></span>
              Ready to execute
            </div>
            <button
              className="run-code-btn"
              onClick={handleRunCode}
              disabled={isRunningCode}
            >
              <Play size={13} fill="#ffffff" />
              {isRunningCode ? "Running..." : "Run Code"}
            </button>
          </div>

          {codeOutput && (
            <div className="ide-output-drawer">
              {codeOutput}
            </div>
          )}
        </div>
      </section>

      {/* 2. Metrics & Impact Ribbon */}
      <div className="home-stats-ribbon" ref={statsRef}>
        <div className="stat-item">
          <div className="stat-num">{count94}<span>%</span></div>
          <div className="stat-desc">Placement Success Rate</div>
        </div>
        <div className="stat-item">
          <div className={`stat-num ${statsVisible ? "stat-pulse-fade" : ""}`}>
            1<span>:</span>1
          </div>
          <div className="stat-desc">Direct Mentor Code Reviews</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">{count200}<span>+</span></div>
          <div className="stat-desc">Hiring Tech Partners</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">{count100}<span>%</span></div>
          <div className="stat-desc">Project-Based Learning</div>
        </div>
      </div>

      {/* 3. Core Highlights Section */}
      <section>
        <div className="section-header-wrap">
          <span className="section-tag-pill">Why Choose Us</span>
          <h2 className="section-main-title">Built for Real-World Engineering</h2>
        </div>

        <div className="home-grid">
          <div
            className={`feature-card ${touchedCard === 0 ? "is-touched" : ""}`}
            onTouchStart={() => setTouchedCard(0)}
            onTouchEnd={() => setTouchedCard(null)}
            onTouchCancel={() => setTouchedCard(null)}
          >
            <div className="feature-icon-wrapper blue">
              <Code2 size={26} strokeWidth={2.2} />
            </div>
            <h3 className="feature-title">Live Practical Coding</h3>
            <p className="feature-text">
              Work with industry-standard stacks, Git workflows, PR reviews, and live production deployments.
            </p>
          </div>

          <div
            className={`feature-card ${touchedCard === 1 ? "is-touched" : ""}`}
            onTouchStart={() => setTouchedCard(1)}
            onTouchEnd={() => setTouchedCard(null)}
            onTouchCancel={() => setTouchedCard(null)}
          >
            <div className="feature-icon-wrapper purple">
              <GraduationCap size={26} strokeWidth={2.2} />
            </div>
            <h3 className="feature-title">Expert Mentorship</h3>
            <p className="feature-text">
              Learn directly from working software engineers with 1-on-1 code reviews and doubt clearing.
            </p>
          </div>

          <div
            className={`feature-card ${touchedCard === 2 ? "is-touched" : ""}`}
            onTouchStart={() => setTouchedCard(2)}
            onTouchEnd={() => setTouchedCard(null)}
            onTouchCancel={() => setTouchedCard(null)}
          >
            <div className="feature-icon-wrapper orange">
              <Rocket size={26} strokeWidth={2.2} />
            </div>
            <h3 className="feature-title">Career Acceleration</h3>
            <p className="feature-text">
              Targeted interview prep, DSA problem solving, and direct placement opportunities with top tech teams.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Interactive 4-Step Career Roadmap */}
      <section className="roadmap-section">
        <div className="section-header-wrap">
          <span className="section-tag-pill">Structured Journey</span>
          <h2 className="section-main-title">Your Path to a Tech Career</h2>
        </div>

        <div className="roadmap-stepper">
          {roadmapSteps.map((s, idx) => (
            <button
              key={idx}
              className={`step-btn ${activeRoadmapStep === idx ? "active" : ""}`}
              onClick={() => setActiveRoadmapStep(idx)}
            >
              <div className="step-num">{s.step}</div>
              <div className="step-title">{s.title}</div>
            </button>
          ))}
        </div>

        <div className="roadmap-detail-card">
          <div>
            <h3 className="detail-headline">{roadmapSteps[activeRoadmapStep].headline}</h3>
            <p className="detail-desc">{roadmapSteps[activeRoadmapStep].desc}</p>
            <div className="detail-deliverables">
              {roadmapSteps[activeRoadmapStep].deliverables.map((d, dIdx) => (
                <span key={dIdx} className="deliverable-pill">
                  ✓ {d}
                </span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <Link to="/course-details" className="hero-primary-btn" style={{ padding: "12px 20px" }}>
              Explore Curriculum <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Interactive FAQ Accordion */}
      <section className="faq-section">
        <div className="section-header-wrap">
          <span className="section-tag-pill">Got Questions?</span>
          <h2 className="section-main-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((f, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <span>{f.q}</span>
                  {isOpen ? <ChevronUp size={20} color="#ea580c" /> : <ChevronDown size={20} />}
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;