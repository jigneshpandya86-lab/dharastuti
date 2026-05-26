import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArtCard from '../components/ArtCard';
import { artworks, collections } from '../data/mockData';
import './Home.css';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const newArrivals = artworks.slice(0, 12); // Show more items for manual browsing

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : newArrivals.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < newArrivals.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="home">
      <img 
        src="/images/logo.jpeg" 
        alt="Dharastuti Logo" 
        className="hero-logo-fixed" 
      />

      {/* New Arrivals Slider (Now Manual) */}
      <section className="section bg-soft no-padding-top">
        <div className="container slider-header">
          <h2 className="section-title text-serif">Handpicked Treasures</h2>
          <div className="manual-controls">
            <button className="icon-btn-outline" onClick={handlePrev} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button className="icon-btn-outline" onClick={handleNext} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="slider-container" ref={sliderRef}>
          <div 
            className="slider-track" 
            style={{ 
              transform: `translateX(calc(-${activeIndex} * var(--slider-item-width) - ${activeIndex} * var(--spacing-lg)))` 
            }}
          >
            {newArrivals.map((art) => (
              <div key={art.id} className="slider-item">
                <ArtCard artwork={art} />
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          {newArrivals.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section container">
        <h2 className="section-title text-serif">Heritage Collections</h2>
        <div className="grid-3 collection-grid">
          {collections.slice(0, 6).map((collection, index) => (
            <Link to="/collections" key={index} className="collection-tile">
              <div className="collection-tile-bg"></div>
              <h3 className="collection-tile-title text-serif">{collection}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Story Teaser */}
      <section className="section container text-center">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="text-serif">Engineering a Revival of Tradition</h2>
          <p className="text-sans" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            What began as a mechanical engineer’s passion for precision has evolved into a family mission to bring the authentic soul of Bharat’s craftsmanship into modern life. Under the lateral “DHARASTUTI”, we preserve and promote the breathtaking diversity of Bhartiya handlooms.
          </p>
          <Link to="/our-story" className="btn btn-outline">Read Our Full Story</Link>
        </div>
      </section>

      {/* Commission Banner */}
      <section className="commission-banner">
        <div className="commission-content container">
          <h2 className="text-serif">Bespoke Traditions</h2>
          <p className="text-sans">Looking for something specific? Connect with us for custom handloom requirements.</p>
          <a href="https://wa.me/919725001354?text=Hello!%20I’d%20like%20to%20discuss%20a%20custom%20handloom%20requirement." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Inquire on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}