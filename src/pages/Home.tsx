import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ArtCard from '../components/ArtCard';
import { artworks, collections } from '../data/mockData';
import './Home.css';

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const heroSlides = [
    {
      title: "Draping Tradition with Pride",
      subtitle: "Discover authentic Bhartiya heritage wear, hand-woven with love and history.",
      image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=1600",
      theme: 'theme-dark'
    },
    {
      title: "Engineering a Revival of Tradition",
      subtitle: "Bridging the gap between rural master artisans and modern lifestyles.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1600",
      theme: 'theme-dark'
    },
    {
      title: "Weaving the Soul of the Soil",
      subtitle: "Handpicked treasures from every corner of Bharat, directly to you.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600",
      theme: 'theme-light'
    }
  ];

  const newArrivals = artworks.slice(0, 5); // Take first 5 for the slider

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 6000); // Rotate hero every 6 seconds

    return () => clearInterval(heroInterval);
  }, [heroSlides.length]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % newArrivals.length);
    }, 4000); // Auto scroll SKU slider every 4 seconds

    return () => clearInterval(interval);
  }, [newArrivals.length, isPaused]);

  return (
    <div className="home">
      {/* Hero Section Slider */}
      <section className="hero">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${heroIndex === index ? 'active' : ''} ${slide.theme}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <img src="/images/logo.jpeg" alt="Dharastuti Logo" className="hero-logo" />
              <h1 className="hero-title text-serif">{slide.title}</h1>
              <p className="hero-subtitle text-sans">{slide.subtitle}</p>
              <Link to="/collections" className="btn btn-primary">Browse Collections</Link>
            </div>
          </div>
        ))}
        <div className="hero-dots">
          {heroSlides.map((_, idx) => (
            <button 
              key={idx} 
              className={`hero-dot ${heroIndex === idx ? 'active' : ''}`}
              onClick={() => setHeroIndex(idx)}
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

      {/* New Arrivals Slider */}
      <section className="section bg-soft">
        <div className="container">
          <h2 className="section-title text-serif">Handpicked Treasures</h2>
        </div>
        
        <div 
          className="slider-container" 
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
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