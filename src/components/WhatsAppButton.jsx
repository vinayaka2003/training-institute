import { FaWhatsapp } from 'react-icons/fa';
import '../styles/whatsapp.css';

function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/1234567890" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-content">
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">Chat with us</span>
      </div>
    </a>
  );
}

export default WhatsAppButton;
