import './OurStory.css';

export default function OurStory() {
  return (
    <div className="our-story">
      {/* Section 1: Hero */}
      <section className="about-hero">
        <img src="/images/logo.jpeg" alt="Dharastuti Logo" className="about-hero-logo" />
        <h1 className="text-serif">Engineering a Revival of Tradition</h1>
      </section>

      {/* Section 2: The Engineer's Journey */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-image-container">
              <img src="/images/owner.jpg" alt="Owner" className="about-image" />
            </div>
            <div className="about-text-content">
              <p className="about-lead text-serif">
                My journey began as a young mechanical engineer, sharpening my technical expertise in maintenance and QA/QC inspection across heavy industries.
              </p>
              <p className="text-sans">
                For over a decade, I managed critical projects, shutdowns, and piping-welding inspections with giants like Apollo Tyres, SGS India, and Reliance, including pivotal operations at Cairn India’s Rajasthan Northern Area Development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Transition */}
      <section className="about-section purpose-section">
        <div className="about-container">
          <div className="purpose-content">
            <p className="text-sans" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>
              However, after more than 11 years in the corporate engineering sector, I chose to redirect this expertise toward a higher purpose: serving mother earth and honoring my heritage as a Patel.
            </p>
            <p className="text-sans">
              Transitioning from the corporate sector to build something from the scratch was little challenging. Backed by the guidance of my Guru and faith in almighty, I started bridging the gap between engineering discipline and sustainable growth to create a better journey ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Hindi Quote Section */}
      <div className="about-container">
        <p className="hindi-quote">
          मंजिलें बदली हैं, हौसला नहीं; इस नए सफर में भी यात्री की यात्रा अभी भी चालू है...............
        </p>
      </div>

      {/* Section 4: The Vision */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-grid reverse">
            <div className="about-image-container">
              <img src="/images/artworks/SKU1a.jpeg" alt="Handloom Craft" className="about-image" />
            </div>
            <div className="about-text-content">
              <h2 className="text-serif">DHARASTUTI: Weaving the Soul</h2>
              <p className="text-sans">
                Developed under "ART Enterprise", DHARASTUTI is a vision of bringing the pure, authentic soul of Bharat’s agriculture, rituals, and craftsmanship into modern life. 
              </p>
              <p className="text-sans">
                Our mission is to promote "Bhartiya Cultural heritage" by providing a platform showcasing every handloom, art and traditions. We chose to keep the traditions live amongst the young strength who are often entirely unaware of the breathtaking diversity right in their backyard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Promise */}
      <section className="about-section" style={{ backgroundColor: '#1C1C1C', color: '#FFF' }}>
        <div className="about-container text-center">
          <h2 className="text-serif" style={{ color: '#FFF', fontSize: '2.5rem' }}>Our Promise</h2>
          <p className="text-sans" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
            Every piece in our collection—from natural dyed block prints to intricate handlooms—is a tribute to the master weavers of our divine land. We invite you to experience the authentic, divine soul of Bharat and wear our traditions with absolute pride.
          </p>
        </div>
      </section>
    </div>
  );
}