import { useState } from "react";
import {
  Sparkles,
  Calendar,
  Clock,
  Laptop,
  CheckCircle2,
  Search,
  Users,
  X,
  Send,
  AlertCircle,
} from "lucide-react";
import "../styles/classes.css";

function Classes() {
  const [touchedCard, setTouchedCard] = useState(null);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedScheduleType, setSelectedScheduleType] = useState("All");
  const [selectedMode, setSelectedMode] = useState("All");

  // Reservation Modal State
  const [activeModalBatch, setActiveModalBatch] = useState(null);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [applicantData, setApplicantData] = useState({ name: "", email: "", phone: "" });

  const schedule = [
    {
      id: "fs-wd",
      course: "Full Stack Web Development",
      category: "Full Stack",
      batchType: "Weekday Batch (Mon - Fri)",
      typeCategory: "Weekday",
      time: "10:00 AM - 1:00 PM IST",
      mode: "Offline / Classroom",
      modeCategory: "Classroom",
      status: "Admissions Open",
      statusType: "status-green",
      seatsLeft: 4,
      totalSeats: 25,
      percentFilled: 84,
      perk: "Live Lab Daily",
    },
    {
      id: "java-ent",
      course: "Java Enterprise Architecture",
      category: "Backend",
      batchType: "Evening Batch (Mon - Fri)",
      typeCategory: "Weekday",
      time: "6:30 PM - 8:30 PM IST",
      mode: "Live Interactive Online",
      modeCategory: "Online",
      status: "Filling Fast",
      statusType: "status-orange",
      seatsLeft: 2,
      totalSeats: 30,
      percentFilled: 93,
      perk: "Weekend Doubt Clearing",
    },
    {
      id: "data-eng",
      course: "Data Engineering & Analytics",
      category: "Data",
      batchType: "Weekend Batch (Sat - Sun)",
      typeCategory: "Weekend",
      time: "9:30 AM - 2:00 PM IST",
      mode: "Hybrid",
      modeCategory: "Hybrid",
      status: "Admissions Open",
      statusType: "status-green",
      seatsLeft: 7,
      totalSeats: 25,
      percentFilled: 72,
      perk: "Project Based",
    },
    {
      id: "cloud-devops",
      course: "Cloud & DevOps Immersion",
      category: "DevOps",
      batchType: "Weekend Batch (Sat - Sun)",
      typeCategory: "Weekend",
      time: "3:00 PM - 7:30 PM IST",
      mode: "Live Interactive Online",
      modeCategory: "Online",
      status: "Starts Next Week",
      statusType: "status-purple",
      seatsLeft: 3,
      totalSeats: 25,
      percentFilled: 88,
      perk: "AWS Credits Included",
    },
  ];

  // Filter Logic
  const filteredSchedule = schedule.filter((item) => {
    const matchesSearch =
      item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.perk.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedScheduleType === "All" || item.typeCategory === selectedScheduleType;
    const matchesMode =
      selectedMode === "All" || item.modeCategory === selectedMode;

    return matchesSearch && matchesType && matchesMode;
  });

  const handleOpenReservation = (batch) => {
    setActiveModalBatch(batch);
    setReservationSuccess(false);
    setApplicantData({ name: "", email: "", phone: "" });
  };

  const handleCloseModal = () => {
    setActiveModalBatch(null);
    setReservationSuccess(false);
  };

  const handleConfirmReservation = (e) => {
    e.preventDefault();
    setReservationSuccess(true);
  };

  return (
    <div className="classes-container">
      {/* Header */}
      <div className="classes-header">
        <span className="eyebrow">UPCOMING BATCHES</span>
        <div className="classes-hero-main">
          <h1 className="classes-title">
            <span className="title-line">Class Schedules</span>
            <em>& Batches.</em>
          </h1>
          <div className="hero-side-desc">
            <p>
              Flexible schedules.<br />
              Interactive hands-on labs.<br />
              Dedicated mentor guidance.
            </p>
            <div className="hero-stat">
              <strong>100%</strong>
              <span>Live interactive batches</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls (Search & Filter Pills) */}
      <div className="classes-controls-panel">
        <div className="search-input-wrap">
          <Search size={18} className="search-icon-pos" />
          <input
            type="text"
            placeholder="Search classes..."
            className="classes-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-pills-row">
          <span className="filter-label">Schedule:</span>
          {["All", "Weekday", "Weekend"].map((t) => (
            <button
              key={t}
              className={`filter-btn ${selectedScheduleType === t ? "active" : ""}`}
              onClick={() => setSelectedScheduleType(t)}
            >
              {t === "All" ? "All Schedules" : `${t} Batches`}
            </button>
          ))}

          <span className="filter-label" style={{ marginLeft: "1rem" }}>
            Mode:
          </span>
          {["All", "Classroom", "Online", "Hybrid"].map((m) => (
            <button
              key={m}
              className={`filter-btn ${selectedMode === m ? "active" : ""}`}
              onClick={() => setSelectedMode(m)}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Batch Cards List */}
      <div className="classes-list">
        {filteredSchedule.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem", background: "#f8fafc", borderRadius: "18px" }}>
            <AlertCircle size={36} color="#ea580c" style={{ marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#0f172a" }}>No Batches Found</h3>
            <p style={{ color: "#64748b" }}>Try adjusting your search criteria or schedule filters.</p>
          </div>
        ) : (
          filteredSchedule.map((item, idx) => (
            <div
              key={item.id}
              className={`batch-card ${touchedCard === idx ? "is-touched" : ""}`}
              onTouchStart={() => setTouchedCard(idx)}
              onTouchEnd={() => setTouchedCard(null)}
              onTouchCancel={() => setTouchedCard(null)}
            >
              <div className="batch-main-info">
                <h3 className="batch-course-name">{item.course}</h3>

                <div className="batch-info">
                  <span>
                    <Calendar size={14} style={{ marginRight: "4px", verticalAlign: "middle" }} />
                    <strong>{item.batchType}</strong>
                  </span>
                  <span>•</span>
                  <span>
                    <Clock size={14} style={{ marginRight: "4px", verticalAlign: "middle" }} />
                    <strong>{item.time}</strong>
                  </span>
                </div>

                <div className="batch-meta-row">
                  <span className="batch-mode-tag">
                    <Laptop size={13} />
                    {item.mode}
                  </span>
                  <span className="batch-perk-tag">
                    <Sparkles size={13} strokeWidth={2.2} />
                    {item.perk}
                  </span>
                </div>

                {/* Seat Progress Bar */}
                <div className="seat-progress-wrap">
                  <div className="seat-label-row">
                    <span>Cohort Filling: {item.percentFilled}%</span>
                    <span className="seat-warning-text">Only {item.seatsLeft} seats left!</span>
                  </div>
                  <div className="seat-progress-track">
                    <div
                      className="seat-progress-fill"
                      style={{ width: `${item.percentFilled}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="batch-action-area">
                <span className={`batch-status-badge ${item.statusType}`}>
                  <CheckCircle2 size={13} />
                  {item.status}
                </span>
                <button
                  className="batch-reserve-btn"
                  onClick={() => handleOpenReservation(item)}
                >
                  <Users size={16} /> Reserve Seat
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Interactive Reservation Modal Dialog */}
      {activeModalBatch && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              <X size={18} />
            </button>

            {reservationSuccess ? (
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
                  Seat Reserved!
                </h2>
                <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                  Congratulations, <strong>{applicantData.name}</strong>. Your provisional seat for the{" "}
                  <strong>{activeModalBatch.course}</strong> ({activeModalBatch.batchType}) is held. An admissions advisor will contact you on WhatsApp/Phone with the onboarding package.
                </p>
                <button
                  className="modal-submit-btn"
                  onClick={handleCloseModal}
                  style={{ width: "auto", padding: "12px 28px", margin: "0 auto" }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <span className="classes-tag" style={{ marginBottom: "0.8rem", padding: "4px 12px", fontSize: "0.8rem" }}>
                  Fast-Track Admission
                </span>
                <h2 style={{ fontSize: "1.6rem", fontWeight: "900", color: "#0f172a", marginBottom: "0.4rem" }}>
                  Reserve Your Seat
                </h2>
                <p style={{ color: "#64748b", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                  Cohort: <strong>{activeModalBatch.course}</strong> ({activeModalBatch.time})
                </p>

                <form onSubmit={handleConfirmReservation}>
                  <div className="modal-form-group">
                    <label className="modal-label">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adithya Rao"
                      className="modal-input"
                      value={applicantData.name}
                      onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                    />
                  </div>

                  <div className="modal-form-group">
                    <label className="modal-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="adithya@example.com"
                      className="modal-input"
                      value={applicantData.email}
                      onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                    />
                  </div>

                  <div className="modal-form-group">
                    <label className="modal-label">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="modal-input"
                      value={applicantData.phone}
                      onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    <Send size={16} /> Confirm Seat Reservation
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

export default Classes;