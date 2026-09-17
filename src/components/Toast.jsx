import { useState, useEffect, useRef, useCallback } from "react";
import { CheckCircle2 } from "lucide-react";
import "../styles/toast.css";

function Toast({
  isVisible,
  onClose,
  title = "Application Submitted Successfully!",
  message = "Thank you! Our academic team will review your application and contact you within 24 hours.",
  duration = 6000,
}) {
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef(null);
  const exitTimerRef = useRef(null);

  const handleDismiss = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsExiting(true);
    exitTimerRef.current = setTimeout(() => {
      setIsExiting(false);
      onClose();
    }, 280);
  }, [onClose]);

  useEffect(() => {
    if (isVisible) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        handleDismiss();
      }, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
    };
  }, [isVisible, duration, handleDismiss]);

  if (!isVisible && !isExiting) return null;

  return (
    <div
      className={`floating-toast ${isExiting ? "toast-exit" : "toast-enter"}`}
      role="status"
      aria-live="polite"
    >
      <div className="toast-icon-wrap">
        <CheckCircle2 size={22} color="#10b981" strokeWidth={2.4} />
      </div>
      <div className="toast-body">
        <h4 className="toast-title">{title}</h4>
        <p className="toast-message">{message}</p>
      </div>
      <button
        type="button"
        className="toast-close-btn"
        onClick={handleDismiss}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;
