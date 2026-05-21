import { Link } from 'react-router-dom';
import { Artwork } from '../data/mockData';
import './ArtCard.css';

interface ArtCardProps {
  artwork: Artwork;
}

export default function ArtCard({ artwork }: ArtCardProps) {
  return (
    <div className="art-card">
      <Link to={`/artworks/${artwork.id}`} className="art-card-image-link">
        <div className="art-card-image-container">
          <img src={artwork.image} alt={artwork.title} className="art-card-image" loading="lazy" />
          
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
        <p className="art-card-price text-sans">{artwork.price}</p>
      </div>
    </div>
  );
}