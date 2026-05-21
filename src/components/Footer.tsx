import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3 className="footer-logo text-serif">Dharastuti Art</h3>
          <p className="footer-mission">Unique Handcrafted Art for Modern Spaces. Every piece is a 1-of-1 original.</p>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading text-sans">Artworks</h4>
          <ul className="footer-links">
            <li><Link to="/collections">All Collections</Link></li>
            <li><Link to="/commissions">Commissions</Link></li>
            <li><Link to="/new-arrivals">New Arrivals</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading text-sans">Service</h4>
          <ul className="footer-links">
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/care">Care Guide</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading text-sans">Join the Inner Circle</h4>
          <p className="footer-text">Subscribe for early access to new collections.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" className="newsletter-input" />
            <button type="submit" className="btn btn-outline">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Dharastuti Art. All rights reserved.</p>
      </div>
    </footer>
  );
}