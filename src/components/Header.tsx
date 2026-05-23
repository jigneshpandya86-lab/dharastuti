import { Link } from 'react-router-dom';
import { Menu, Search, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Header.css';

interface HeaderProps {
  onCartOpen: () => void;
  onMenuOpen: () => void;
}

export default function Header({ onCartOpen, onMenuOpen }: HeaderProps) {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="icon-btn" aria-label="Menu" onClick={onMenuOpen}>
            <Menu size={20} />
          </button>
        </div>
        
        <div className="header-center">
          <Link to="/" className="logo text-serif">
            Dharastuti
          </Link>
        </div>
        
        <div className="header-right">
          <button className="icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="icon-btn cart-btn" aria-label="Open cart" onClick={onCartOpen}>
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <a href="https://wa.me/919725001354" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Inquire">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}