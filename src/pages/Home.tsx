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
          <h1 className="hero-title text-serif">Unique Handcrafted Art for Modern Spaces</h1>
          <p className="hero-subtitle text-sans">Discover 1-of-1 exclusive pieces directly from the artist's studio.</p>
          <Link to="/collections" className="btn btn-primary">Browse Available Works</Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section container">
        <h2 className="section-title text-serif">Curated Collections</h2>
        <div className="grid-3 collection-grid">
          {collections.map((collection, index) => (
            <Link to="/collections" key={index} className="collection-tile">
              <div className="collection-tile-bg"></div>
              <h3 className="collection-tile-title text-serif">{collection}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section container bg-soft">
        <h2 className="section-title text-serif">New Arrivals</h2>
        <div className="grid-4">
          {newArrivals.map((art) => (
            <ArtCard key={art.id} artwork={art} />
          ))}
        </div>
      </section>

      {/* Commission Banner */}
      <section className="commission-banner">
        <div className="commission-content container">
          <h2 className="text-serif">Your Story, My Canvas</h2>
          <p className="text-sans">Work directly with the artist to create a custom piece tailored to your space.</p>
          <a href="https://wa.me/919725001354?text=Hello!%20I’d%20like%20to%20discuss%20a%20custom%20commission." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Start a Commission</a>
        </div>
      </section>
    </div>
  );
}