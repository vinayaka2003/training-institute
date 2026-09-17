import { useState, useEffect, useCallback } from "react";
import { Sparkles, Send, AlertCircle } from "lucide-react";
import "../styles/enrollModal.css";

const INITIAL_FORM_STATE = {
  fullName: "",
  email: "",
  phone: "",
  course: "",
  batchMode: "",
  query: "",
};

const COURSE_OPTIONS = [
  "Full Stack Web Development",
  "Java Enterprise Architecture",
  "DevOps & Cloud Computing",
  "Data Science & ML",
];

const BATCH_MODES = [
  { id: "Weekday", label: "Weekday" },
  { id: "Weekend", label: "Weekend" },
  { id: "Online", label: "Online" },
  { id: "Offline", label: "Offline" },
];

function EnrollModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});

  // Close modal and cleanup
  const handleModalClose = useCallback(() => {
    setErrors({});
    onClose();
  }, [onClose]);

  // Keyboard Escape listener & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleModalClose]);

  if (!isOpen) return null;

  // Validation function against strict rules
  const validateField = (name, value, allData = formData) => {
    switch (name) {
      case "fullName": {
        const trimmed = (value || "").trim();
        if (!trimmed) {
          return "Please enter your full name";
        }
        if (trimmed.length < 3) {
          return "Full Name must be at least 3 characters";
        }
        if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
          return "Full Name cannot contain numbers or special symbols";
        }
        return null;
      }
      case "email": {
        const trimmed = (value || "").trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!trimmed) {
          return "Please enter your email address";
        }
        if (!emailRegex.test(trimmed)) {
          return "Please enter a valid email address (e.g., name@example.com)";
        }
        return null;
      }
      case "phone": {
        const trimmed = (value || "").trim();
        if (!trimmed) {
          return "Please enter a valid 10-digit phone number";
        }
        if (!/^\d{10}$/.test(trimmed)) {
          return "Please enter a valid 10-digit phone number";
        }
        return null;
      }
      case "course": {
        if (!value || !COURSE_OPTIONS.includes(value)) {
          return "Please select a course";
        }
        return null;
      }
      case "batchMode": {
        const mode = value || allData.batchMode;
        if (!mode || !BATCH_MODES.some((m) => m.id === mode)) {
          return "Please select a preferred batch mode";
        }
        return null;
      }
      default:
        return null;
    }
  };

  const validateAll = (data = formData) => {
    const newErrors = {};
    const nameError = validateField("fullName", data.fullName, data);
    if (nameError) newErrors.fullName = nameError;

    const emailError = validateField("email", data.email, data);
    if (emailError) newErrors.email = emailError;

    const phoneError = validateField("phone", data.phone, data);
    if (phoneError) newErrors.phone = phoneError;

    const courseError = validateField("course", data.course, data);
    if (courseError) newErrors.course = courseError;

    const batchError = validateField("batchMode", data.batchMode, data);
    if (batchError) newErrors.batchMode = batchError;

    return newErrors;
  };

  // Change handler with strict sanitization
  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === "phone") {
      // Phone Number: Only allow numeric digits, max 10 digits
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "fullName") {
      // Full Name: Disallow numbers or special symbols
      sanitizedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    const updatedFormData = {
      ...formData,
      [name]: sanitizedValue,
    };

    setFormData(updatedFormData);

    // Live validation feedback: if this field previously had an error, re-evaluate to clear or update it
    if (errors[name]) {
      const fieldError = validateField(name, sanitizedValue, updatedFormData);
      setErrors((prev) => {
        const updated = { ...prev };
        if (!fieldError) {
          delete updated[name];
        } else {
          updated[name] = fieldError;
        }
        return updated;
      });
    }
  };

  // Prevent invalid keys from being typed into phone number
  const handlePhoneKeyDown = (e) => {
    if (
      ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"].includes(e.key) ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Prevent numbers and symbols from being typed into full name
  const handleNameKeyDown = (e) => {
    if (
      ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter", "Space", " "].includes(e.key) ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }
    if (!/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Optional blur validation for proactive user guidance
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value, formData);
    if (fieldError) {
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateAll(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Focus first invalid input
      const firstInvalidField = Object.keys(validationErrors)[0];
      const elementMap = {
        fullName: "enroll-full-name",
        email: "enroll-email",
        phone: "enroll-phone",
        course: "enroll-course",
      };
      const elementId = elementMap[firstInvalidField];
      if (elementId) {
        const el = document.getElementById(elementId);
        if (el) el.focus();
      }
      return;
    }

    // Option 3: Immediate Modal Close on Valid Submission
    setErrors({});
    setFormData(INITIAL_FORM_STATE);

    if (onSuccess) {
      onSuccess();
    } else {
      handleModalClose();
    }
  };

  // Close when clicking dark background backdrop outside modal card
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <div
      className="enroll-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enroll-modal-title"
    >
      <div
        className="enroll-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-Right Close Button */}
        <button
          type="button"
          className="enroll-modal-close-btn"
          onClick={handleModalClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Enrollment Form */}
        <div className="enroll-modal-header">
          <span className="enroll-tag">
            <Sparkles size={12} /> Admissions Open 2026
          </span>
          <h2 id="enroll-modal-title" className="enroll-modal-title">
            Enroll <span>Now</span>
          </h2>
          <p className="enroll-modal-subtitle">
            Reserve your seat or request counseling. Our advisors will assist with curriculum, schedules, and scholarship details.
          </p>
        </div>

        <form className="enroll-form" onSubmit={handleSubmit} noValidate>
          {/* Full Name (text input, required, min 3 chars, letters & spaces only) */}
          <div className="enroll-form-group">
            <label htmlFor="enroll-full-name" className="enroll-label">
              Full Name <span className="enroll-req-star">*</span>
            </label>
            <input
              id="enroll-full-name"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Alex Morgan"
              className={`enroll-input ${errors.fullName ? "enroll-input-error" : ""}`}
              value={formData.fullName}
              onChange={handleChange}
              onKeyDown={handleNameKeyDown}
              onBlur={handleBlur}
              aria-invalid={errors.fullName ? "true" : "false"}
              aria-describedby={errors.fullName ? "enroll-fullname-error" : undefined}
              autoFocus
            />
            {errors.fullName && (
              <span id="enroll-fullname-error" className="enroll-error-msg" role="alert">
                <AlertCircle size={13} /> {errors.fullName}
              </span>
            )}
          </div>

          {/* Row: Email Address & Phone Number */}
          <div className="enroll-form-row">
            {/* Email Address (email input, required, standard format) */}
            <div className="enroll-form-group">
              <label htmlFor="enroll-email" className="enroll-label">
                Email Address <span className="enroll-req-star">*</span>
              </label>
              <input
                id="enroll-email"
                name="email"
                type="email"
                required
                placeholder="alex@example.com"
                className={`enroll-input ${errors.email ? "enroll-input-error" : ""}`}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "enroll-email-error" : undefined}
              />
              {errors.email && (
                <span id="enroll-email-error" className="enroll-error-msg" role="alert">
                  <AlertCircle size={13} /> {errors.email}
                </span>
              )}
            </div>

            {/* Phone Number (tel input, required, strictly 10 digits) */}
            <div className="enroll-form-group">
              <label htmlFor="enroll-phone" className="enroll-label">
                Phone Number <span className="enroll-req-star">*</span>
              </label>
              <input
                id="enroll-phone"
                name="phone"
                type="tel"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="10-digit number"
                className={`enroll-input ${errors.phone ? "enroll-input-error" : ""}`}
                value={formData.phone}
                onChange={handleChange}
                onKeyDown={handlePhoneKeyDown}
                onBlur={handleBlur}
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "enroll-phone-error" : undefined}
              />
              {errors.phone && (
                <span id="enroll-phone-error" className="enroll-error-msg" role="alert">
                  <AlertCircle size={13} /> {errors.phone}
                </span>
              )}
            </div>
          </div>

          {/* Course Interested In (dropdown <select>, required) */}
          <div className="enroll-form-group">
            <label htmlFor="enroll-course" className="enroll-label">
              Course Interested In <span className="enroll-req-star">*</span>
            </label>
            <select
              id="enroll-course"
              name="course"
              required
              className={`enroll-select ${errors.course ? "enroll-input-error" : ""}`}
              value={formData.course}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.course ? "true" : "false"}
              aria-describedby={errors.course ? "enroll-course-error" : undefined}
            >
              <option value="" disabled>
                -- Select a Course --
              </option>
              {COURSE_OPTIONS.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && (
              <span id="enroll-course-error" className="enroll-error-msg" role="alert">
                <AlertCircle size={13} /> {errors.course}
              </span>
            )}
          </div>

          {/* Preferred Batch Mode (radio buttons, required) */}
          <div className="enroll-form-group">
            <span className="enroll-label">
              Preferred Batch Mode <span className="enroll-req-star">*</span>
            </span>
            <div
              className={`enroll-radio-group ${errors.batchMode ? "enroll-input-error" : ""}`}
              role="radiogroup"
              aria-label="Preferred Batch Mode"
              aria-invalid={errors.batchMode ? "true" : "false"}
              aria-describedby={errors.batchMode ? "enroll-batchMode-error" : undefined}
            >
              {BATCH_MODES.map((mode) => {
                const isChecked = formData.batchMode === mode.id;
                return (
                  <label
                    key={mode.id}
                    className={`enroll-radio-label ${isChecked ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="batchMode"
                      value={mode.id}
                      checked={isChecked}
                      onChange={handleChange}
                      required
                    />
                    <span>{mode.label}</span>
                  </label>
                );
              })}
            </div>
            {errors.batchMode && (
              <span id="enroll-batchMode-error" className="enroll-error-msg" role="alert">
                <AlertCircle size={13} /> {errors.batchMode}
              </span>
            )}
          </div>

          {/* Brief Query / Note (optional <textarea>) */}
          <div className="enroll-form-group">
            <label htmlFor="enroll-query" className="enroll-label">
              Brief Query / Note <span style={{ color: "#94a3b8", fontWeight: 400 }}>(Optional)</span>
            </label>
            <textarea
              id="enroll-query"
              name="query"
              rows={3}
              placeholder="Share any background, questions, or specific timings you prefer..."
              className="enroll-textarea"
              value={formData.query}
              onChange={handleChange}
            />
          </div>

          {/* Primary Submit Button */}
          <button type="submit" className="enroll-submit-btn">
            <Send size={16} /> Submit Enrollment
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnrollModal;
