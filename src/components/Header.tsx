import { Link } from 'react-router-dom';
import { Menu, Search, MessageCircle } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="icon-btn" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
        
        <div className="header-center">
          <Link to="/" className="logo text-serif">
            Dharastuti Art
          </Link>
        </div>
        
        <div className="header-right">
          <button className="icon-btn" aria-label="Search">
            <Search size={24} />
          </button>
          <a href="https://wa.me/919725001354" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Inquire">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}