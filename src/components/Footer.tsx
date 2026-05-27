import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3 className="footer-logo text-serif">Dharastuti</h3>
          <p className="footer-mission">Draping Tradition with Pride. Authentic Bhartiya heritage wear, directly from master artisans.</p>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading text-sans">Collections</h4>
          <ul className="footer-links">
            <li><Link to="/collections">All Heritage Wear</Link></li>
            <li><Link to="/collections">Sarees</Link></li>
            <li><Link to="/collections">Unstitched Sets</Link></li>
            <li><Link to="/collections">Gents' Kurtas</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading text-sans">Service</h4>
          <ul className="footer-links">
            <li><Link to="/collections">All Heritage Wear</Link></li>
            <li><Link to="/collections">Sarees</Link></li>
            <li><Link to="/commissions">Bespoke Traditions</Link></li>
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
        <p>&copy; {new Date().getFullYear()} Dharastuti. A unit of ART Enterprise. All rights reserved. • Build: {new Date().toLocaleTimeString()}</p>
      </div>
    </footer>
  );
}