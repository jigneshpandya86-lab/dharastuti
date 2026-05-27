import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { artworks } from '../data/mockData';
import { useCart } from '../context/CartContext';
import ArtCard from '../components/ArtCard';
import './ArtworkDetail.css';

export default function ArtworkDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const artwork = artworks.find(a => a.id === id);
  const [activeImage, setActiveImage] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    if (artwork) {
      setActiveImage(artwork.images[0]);
      window.scrollTo(0, 0);
    }
  }, [id, artwork]);

  if (!artwork) {
    return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Artwork not found.</div>;
  }

  // Related items logic
  const relatedItems = artworks
    .filter(a => a.id !== artwork.id && (a.category === artwork.category || a.collection === artwork.collection))
    .slice(0, 4);

  // Pre-filled WhatsApp message based on availability
  const waMessage = artwork.isAvailable 
    ? `Hi Dharastuti Art, I'm interested in the artwork '${artwork.title}' (SKU: ${artwork.sku}). Is this still available for delivery?`
    : `Hi! I saw the '${artwork.title}' piece was sold, but I love the style. Do you take commissions for similar pieces?`;
  
  const waLink = `https://wa.me/918980846362?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="pdp container">
      {/* Top Navigation Row */}
      <div className="pdp-nav-row">
        <button className="back-button btn-text" onClick={() => navigate(-1)}>
          <span className="back-icon">←</span> Back
        </button>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs text-sans">
          <Link to="/">Home</Link> &gt; <Link to="/collections">Collections</Link> &gt; <span>{artwork.title}</span>
        </nav>
      </div>

      <div className="pdp-grid">
        {/* Left: Gallery */}
        <div className="pdp-gallery">
          <div className="pdp-main-image-container">
            <img src={activeImage} alt={artwork.title} className="pdp-main-image" />
          </div>
          {artwork.images.length > 1 && (
            <div className="pdp-thumbnails">
              {artwork.images.map((img, idx) => (
                <button 
                  key={idx} 
                  className={`pdp-thumbnail ${activeImage === img ? 'active' : ''}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`${artwork.title} view ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info */}
        <div className="pdp-info">
          <div className="pdp-header">
            <h1 className="pdp-title text-serif">{artwork.title}</h1>
            <p className="pdp-code text-sans">{artwork.sku}</p>
          </div>

          <div className="pdp-price-status">
            <span className="pdp-price text-sans">{artwork.price}</span>
            <div className="pdp-badges">
              <span className="badge">1 OF 1</span>
              {!artwork.isAvailable && <span className="badge badge-sold">SOLD</span>}
            </div>
          </div>

          <div className="pdp-actions">
            {artwork.isAvailable ? (
              <div className="pdp-action-buttons">
                <button 
                  className="btn btn-primary btn-full"
                  onClick={() => addToCart(artwork)}
                >
                  Add to Cart
                </button>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-full">
                  Inquire on WhatsApp
                </a>
              </div>
            ) : (
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">
                Request a Similar Piece
              </a>
            )}
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
                <li><strong>Fabric:</strong> {artwork.medium}</li>
                {artwork.pattern && <li><strong>Pattern:</strong> {artwork.pattern}</li>}
                <li><strong>Dimensions:</strong> {artwork.size}</li>
                <li><strong>Collection:</strong> {artwork.collection}</li>
              </ul>
            </div>

            {artwork.washingTips && (
              <div className="pdp-detail-section">
                <h3 className="text-sans">Care Instructions</h3>
                <p className="text-sans" style={{ whiteSpace: 'pre-line' }}>
                  {artwork.washingTips}
                </p>
              </div>
            )}

            <div className="pdp-detail-section">
              <h3 className="text-sans">Shipping & Returns</h3>
              <p className="text-sans">
                <strong>Local (Vadodara):</strong> Complimentary studio pickup or secure hand-delivery.<br/>
                <strong>Domestic:</strong> Securely packaged and shipped across India. Shipping & COD charges are non-refundable (₹200).<br/>
                <strong>Returns:</strong> Requests must be raised within 48 hours of receipt with an unboxing video.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items Section */}
      {relatedItems.length > 0 && (
        <section className="related-artworks">
          <h2 className="related-title text-serif">You May Also Like</h2>
          <div className="art-grid">
            {relatedItems.map(item => (
              <ArtCard key={item.id} artwork={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}