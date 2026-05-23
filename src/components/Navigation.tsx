import { Link } from 'react-router-dom';
import { X, Instagram, Facebook, Mail } from 'lucide-react';
import './Navigation.css';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Heritage Collections', path: '/collections' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Bespoke Traditions', path: '/commissions' },
    { label: 'Exhibitions', path: '/exhibitions' },
    { label: 'Workshops', path: '/workshops' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Shipping Policy', path: '/shipping-policy' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <div className={`nav-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="nav-header">
          <button className="icon-btn" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="nav-links">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className="nav-link text-serif"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-footer">
          <div className="nav-social">
            <a href="https://instagram.com/dharastuti_art" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="mailto:dharastuti.art@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          <p className="nav-copyright text-sans">&copy; 2026 Dharastuti</p>
        </div>
      </div>
    </>
  );
}