import { Link } from 'react-router-dom';
import ArtCard from '../components/ArtCard';
import { artworks, collections } from '../data/mockData';
import './Home.css';

export default function Home() {
  const newArrivals = artworks.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title text-serif">Draping Tradition with Pride</h1>
          <p className="hero-subtitle text-sans">Discover authentic Bhartiya heritage wear, hand-woven with love and history.</p>
          <Link to="/collections" className="btn btn-primary">Browse Collections</Link>
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

      {/* New Arrivals */}
      <section className="section container bg-soft">
        <h2 className="section-title text-serif">Handpicked Treasures</h2>
        <div className="grid-4">
          {newArrivals.map((art) => (
            <ArtCard key={art.id} artwork={art} />
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