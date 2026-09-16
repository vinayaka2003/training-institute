import "../styles/contact.css";

function Contact() {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-top">
          <span className="eyebrow">CONTACT</span>

        </div>
        <div className="contact-hero-content">
          <h1>Let's start <em>something.</em></h1>
        </div>
        <div className="contact-hero-line" />
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-main">
        {/* LEFT */}
        <div className="contact-info">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Your next<br /><em>step.</em></h2>
          <p className="contact-description">
            Speak with our team about courses, batches, fees, placements or anything else you want to know.
          </p>
          <div className="contact-details">
            <a href="tel:+919876543210" className="contact-detail">
              <span className="detail-label">PHONE</span>
              <strong>+91 98765 43210</strong>
              <span className="detail-arrow">↗</span>
            </a>
            <a href="mailto:info@edutech.com" className="contact-detail">
              <span className="detail-label">EMAIL</span>
              <strong>info@edutech.com</strong>
              <span className="detail-arrow">↗</span>
            </a>
            <div className="contact-detail">
              <span className="detail-label">LOCATION</span>
              <strong>Bengaluru, Karnataka</strong>
              <span className="detail-arrow">↗</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-wrapper" id="contact-form">
          <div className="form-header">
            <span className="form-number">01</span>
            <span>SEND AN ENQUIRY</span>
          </div>
          <form className="contact-form">
            <div className="form-field">
              <label htmlFor="name">YOUR NAME</label>
              <input id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">PHONE</label>
                <input id="phone" type="tel" placeholder="+91" />
              </div>
              <div className="form-field">
                <label htmlFor="email">EMAIL</label>
                <input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="course">INTERESTED COURSE</label>
              <select id="course" defaultValue="">
                <option value="" disabled>Select a course</option>
                <option value="full-stack">Full Stack Development</option>
                <option value="data-science">Data Science & AI</option>
                <option value="java">Java Development</option>
                <option value="python">Python Development</option>
                <option value="uiux">UI/UX Design</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="message">MESSAGE</label>
              <textarea id="message" rows="4" placeholder="Tell us what you're looking for..." />
            </div>
            <button type="submit" className="submit-button">
              Send Enquiry <span>→</span>
            </button>
          </form>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="location-section">
        <div className="location-header">
          <span className="eyebrow">FIND US</span>
          <h2>Come say<br /><em>hello.</em></h2>
        </div>
        <div className="map-card" style={{ padding: 0, overflow: 'hidden', borderRadius: '12px' }}>
          <iframe 
            src="https://maps.google.com/maps?q=13.117886583704756,77.63248284960935&z=15&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '350px' }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="contact-bottom">
        <div>
          <span className="eyebrow">QUICK CONTACT</span>
          <h2>Prefer a<br /><em>conversation?</em></h2>
        </div>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="whatsapp-button">
          WhatsApp Us <span>↗</span>
        </a>
      </section>
    </main>
  );
}

export default Contact;