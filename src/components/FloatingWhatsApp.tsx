import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const message = encodeURIComponent("Hello Dharastuti Art, I would like to know more about your artworks and commissions.");
  const waLink = `https://wa.me/918980846362?text=${message}`;

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-wa"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}