import './Home.css'; // Reuse container styles

export default function OurStory() {
  return (
    <div className="page-container">
      <div className="about-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <img src="/images/logo.jpeg" alt="Dharastuti Logo" style={{ height: '120px', marginBottom: '2rem' }} />
        <h1 className="text-serif">Engineering a Revival of Tradition</h1>
      </div>

      <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
        <div className="owner-section">
          <img 
            src="/images/owner.jpg" 
            alt="Owner" 
            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} 
          />
        </div>

        <div className="text-sans text-content">
          <p className="lead" style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '2rem' }}>
            My journey began as a young mechanical engineer, sharpening my technical expertise in maintenance and QA/QC inspection across heavy industries with giants like Apollo Tyres, SGS India, and Reliance. For over a decade, I managed critical projects, shutdowns, and piping-welding inspections, including pivotal operations at Cairn India’s Rajasthan Northern Area Development.
          </p>

          <p>
            However, after more than 11 years in the corporate engineering sector, I chose to redirect this expertise toward a higher purpose: serving mother earth and honoring my heritage as a Patel. Transitioning from the corporate sector to build something from the scratch was little challenging. Backed by the guidance of my Guru and faith in almighty, I started bridging the gap between engineering discipline and sustainable growth to create a better journey ahead.
          </p>

          <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginTop: '2rem', color: '#666' }}>
            मंजिलें बदली हैं, हौसला नहीं; इस नए सफर में भी यात्री की यात्रा अभी भी चालू है...............
          </p>

          <hr style={{ margin: '3rem 0', border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />

          <h2 className="text-serif">The Spark: DHARASTUTI</h2>
          <p>
            Developed under "ART Enterprise", DHARASTUTI is a vision of bringing the pure, authentic soul of Bharat’s agriculture, rituals, and craftsmanship into modern life. 
          </p>
          <p>
            Our mission is to promote "Bhartiya Cultural heritage" by providing a platform showcasing every handloom, art and traditions. We chose to keep the traditions live amongst the young strength who are often entirely unaware of the breathtaking diversity right in their backyard.
          </p>
          
          <h2 className="text-serif">Our Promise</h2>
          <p>
            Every piece in our collection—from natural dyed block prints to intricate handlooms—is a tribute to the master weavers of our divine land. We invite you to experience the authentic, divine soul of Bharat and wear our traditions with absolute pride.
          </p>
        </div>
      </div>
    </div>
  );
}