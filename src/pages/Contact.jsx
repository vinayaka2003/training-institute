import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, Sparkles } from "lucide-react";
import "../styles/contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("mppwzrrn");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="contact-container">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-badge">
          <span className="live-dot" />
          <span>DIRECT SUPPORT & ADMISSIONS</span>
        </div>

        <h1 className="contact-title">
          Let’s start a <em>conversation.</em>
        </h1>

        <p className="contact-subtitle">
          Have questions about our tech courses, upcoming batches, career support, or fee structure? Speak directly with our program advisors.
        </p>
      </section>

      {/* MAIN GRID */}
      <section className="contact-grid">
        {/* LEFT COLUMN: TOUCHPOINTS */}
        <div className="contact-info-col">
          <div className="info-cards-stack">
            <a href="tel:+919876543210" className="contact-touchpoint-card spotlight-card" onMouseMove={handleMouseMove}>
              <div className="touchpoint-icon">
                <Phone size={18} />
              </div>
              <div className="touchpoint-details">
                <span className="touchpoint-label">TALK TO ADVISORS</span>
                <strong className="touchpoint-value">+91 98765 43210</strong>
                <span className="touchpoint-sub">Mon – Sat · 9:00 AM – 7:00 PM</span>
              </div>
              <span className="touchpoint-action-tag">Call Now</span>
            </a>

            <a href="mailto:info@edutech.com" className="contact-touchpoint-card spotlight-card" onMouseMove={handleMouseMove}>
              <div className="touchpoint-icon">
                <Mail size={18} />
              </div>
              <div className="touchpoint-details">
                <span className="touchpoint-label">EMAIL ENQUIRIES</span>
                <strong className="touchpoint-value">info@edutech.com</strong>
                <span className="touchpoint-sub">Typical response within 2 hours</span>
              </div>
              <span className="touchpoint-action-tag">Send Email</span>
            </a>

            <div className="contact-touchpoint-card static spotlight-card" onMouseMove={handleMouseMove}>
              <div className="touchpoint-icon">
                <MapPin size={18} />
              </div>
              <div className="touchpoint-details">
                <span className="touchpoint-label">MAIN CAMPUS</span>
                <strong className="touchpoint-value">Bengaluru, Karnataka</strong>
                <span className="touchpoint-sub">Tech Park Campus, HSR Layout</span>
              </div>
            </div>

            <div className="contact-touchpoint-card static spotlight-card" onMouseMove={handleMouseMove}>
              <div className="touchpoint-icon">
                <Clock size={18} />
              </div>
              <div className="touchpoint-details">
                <span className="touchpoint-label">COUNSELING HOURS</span>
                <strong className="touchpoint-value">Monday to Saturday</strong>
                <span className="touchpoint-sub">Walk-ins welcome from 10 AM</span>
              </div>
            </div>
          </div>

          <div className="response-time-banner">
            <Sparkles size={16} className="sparkle-icon" />
            <span>Fast track admissions: Get instant callback within 30 minutes during work hours.</span>
          </div>
        </div>

        {/* RIGHT COLUMN: ENQUIRY FORM */}
        <div className="contact-form-wrapper spotlight-card" id="contact-form" onMouseMove={handleMouseMove}>
          <div className="form-header">
            <div className="form-pill">
              <MessageSquare size={13} /> Admission Inquiry
            </div>
            <h2>Send us a message</h2>
            <p>Fill out the details below and an expert counselor will guide you.</p>
          </div>

          {state.succeeded ? (
            <div className="contact-success-state">
              <div className="success-icon-wrap">
                <CheckCircle2 size={36} />
              </div>
              <h3>Enquiry Submitted Successfully!</h3>
              <p>Thank you for reaching out. Our team will contact you via phone or email shortly.</p>
            </div>
          ) : (
            <form className="contact-form-minimal" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">FULL NAME</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">PHONE NUMBER</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="course">COURSE INTEREST</label>
                <select id="course" name="course" defaultValue="" required>
                  <option value="" disabled>Select your preferred course</option>
                  <option value="full-stack">Full Stack Web Development</option>
                  <option value="data-science">Data Science & AI</option>
                  <option value="java">Java Enterprise Architecture</option>
                  <option value="python">Python Software Engineering</option>
                  <option value="devops">DevOps & Cloud Computing</option>
                </select>
                <ValidationError prefix="Course" field="course" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="message">YOUR MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Tell us about your background or questions..."
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" className="contact-submit-btn btn-magnetic" disabled={state.submitting}>
                {state.submitting ? (
                  "Sending Message..."
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="contact-map-block">
        <div className="map-block-header">
          <div>
            <span className="map-kicker">CAMPUS LOCATION</span>
            <h2>Visit Our Training Hub</h2>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="directions-link"
          >
            Get Directions <ExternalLink size={14} />
          </a>
        </div>

        <div className="map-frame">
          <iframe
            title="Training Institute Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9851752494193!2d77.59207431526978!3d12.972442490855365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1677d24269e9%3A0xe5eb6d2f3c7e7b8f!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1647500000000!5m2!1sen!2sin"
            width="100%"
            height="340"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;