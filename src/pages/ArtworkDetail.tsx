import { useParams, Link } from 'react-router-dom';
import { artworks } from '../data/mockData';
import './ArtworkDetail.css';

export default function ArtworkDetail() {
  const { id } = useParams<{ id: string }>();
  const artwork = artworks.find(a => a.id === id);

  if (!artwork) {
    return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Artwork not found.</div>;
  }

  // Pre-filled WhatsApp message based on availability
  const waMessage = artwork.isAvailable 
    ? `Hi Dharastuti Art, I'm interested in the artwork '${artwork.title}' (Code: ${artwork.code}). Is this still available for delivery?`
    : `Hi! I saw the '${artwork.title}' piece was sold, but I love the style. Do you take commissions for similar pieces?`;
  
  const waLink = `https://wa.me/919725001354?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="pdp container">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs text-sans">
        <Link to="/">Home</Link> &gt; <Link to="/collections">Collections</Link> &gt; <span>{artwork.title}</span>
      </nav>

      <div className="pdp-grid">
        {/* Left: Gallery */}
        <div className="pdp-gallery">
          <img src={artwork.image} alt={artwork.title} className="pdp-main-image" />
          {/* Add more images here if available */}
        </div>

        {/* Right: Info */}
        <div className="pdp-info">
          <div className="pdp-header">
            <h1 className="pdp-title text-serif">{artwork.title}</h1>
            <p className="pdp-code text-sans">{artwork.code}</p>
          </div>

          <div className="pdp-price-status">
            <span className="pdp-price text-sans">{artwork.price}</span>
            <div className="pdp-badges">
              <span className="badge">1 OF 1</span>
              {!artwork.isAvailable && <span className="badge badge-sold">SOLD</span>}
            </div>
          </div>

          <div className="pdp-actions">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">
              {artwork.isAvailable ? "Inquire on WhatsApp" : "Request a Similar Piece"}
            </a>
            <p className="pdp-notice text-sans">
              * Unique artwork: Only one exists.
            </p>
          </div>

          <div className="pdp-details">
            <div className="pdp-detail-section">
              <h3 className="text-sans">The Story</h3>
              <p className="text-sans">{artwork.description}</p>
            </div>
            
            <div className="pdp-detail-section">
              <h3 className="text-sans">Specifications</h3>
              <ul className="text-sans">
                <li><strong>Medium:</strong> {artwork.medium}</li>
                <li><strong>Dimensions:</strong> {artwork.size}</li>
                <li><strong>Collection:</strong> {artwork.collection}</li>
              </ul>
            </div>

            <div className="pdp-detail-section">
              <h3 className="text-sans">Shipping & Care</h3>
              <p className="text-sans">
                <strong>Local (Vadodara):</strong> Complimentary studio pickup or secure hand-delivery.<br/>
                <strong>Domestic:</strong> Securely packaged and shipped across India via premium art couriers. Dispatch within 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}