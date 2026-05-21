import { Link } from 'react-router-dom';
import { Artwork } from '../data/mockData';
import { useCart } from '../context/CartContext';
import './ArtCard.css';

interface ArtCardProps {
  artwork: Artwork;
}

export default function ArtCard({ artwork }: ArtCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="art-card">
      <Link to={`/artworks/${artwork.id}`} className="art-card-image-link">
        <div className="art-card-image-container">
          <img src={artwork.images[0]} alt={artwork.title} className="art-card-image" loading="lazy" />
          
          <div className="art-card-badges">
            <span className="badge">1 OF 1</span>
            {!artwork.isAvailable && <span className="badge badge-sold">SOLD</span>}
          </div>
          
          <div className="art-card-hover-overlay">
            <span className="view-details text-sans">View Details</span>
          </div>
        </div>
      </Link>
      
      <div className="art-card-info">
        <h3 className="art-card-title text-serif">
          <Link to={`/artworks/${artwork.id}`}>{artwork.title}</Link>
        </h3>
        <p className="art-card-medium text-sans">{artwork.medium}</p>
        <div className="art-card-footer">
          <p className="art-card-price text-sans">{artwork.price}</p>
          {artwork.isAvailable && (
            <button 
              className="btn-text" 
              onClick={(e) => {
                e.preventDefault();
                addToCart(artwork);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}