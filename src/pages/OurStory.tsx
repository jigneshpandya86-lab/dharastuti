import './OurStory.css';

export default function OurStory() {
  return (
    <div className="our-story-compact container">
      {/* Header Area */}
      <div className="about-header-compact">
        <h1 className="text-serif">Engineering a Revival of Tradition</h1>
        <img src="/images/logo.jpeg" alt="Dharastuti Logo" className="about-logo-top-right" />
      </div>

      {/* Main Content Area */}
      <div className="about-main-grid">
        {/* Left Side: Photo */}
        <div className="about-image-side">
          <img src="/images/owner.jpg" alt="Owner" />
          <p className="hindi-quote-compact">
            मंजिलें बदली हैं, हौसला नहीं; यात्री की यात्रा चालू है...
          </p>
        </div>

        {/* Right Side: Text */}
        <div className="about-content-scroll">
          <p className="about-lead-compact text-serif">
            My journey began as a mechanical engineer, sharpening technical expertise in maintenance and QA/QC inspection across heavy industries with giants like Apollo Tyres and Reliance.
          </p>
          
          <p className="text-sans-compact">
            After 11+ years in corporate engineering, I chose to redirect this expertise toward a higher purpose: serving mother earth and honoring my heritage as a Patel.
          </p>

          <p className="text-sans-compact">
            Transitioning to build something from scratch was challenging. Backed by the guidance of my Guru and faith in almighty, I started bridging the gap between engineering discipline and sustainable growth.
          </p>

          <p className="text-sans-compact">
            DHARASTUTI, developed under "ART Enterprise", is a vision of bringing the pure, authentic soul of Bharat’s craftsmanship into modern life. We promote Bhartiya Cultural heritage by providing a platform for every handloom and tradition.
          </p>
          
          <p className="text-sans-compact">
            We chose to keep traditions live amongst the young who are often unaware of the breathtaking diversity in their backyard—where weaving styles change at every step.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="about-promise-bar">
        <p className="text-sans">
          <strong>Our Promise:</strong> Every piece is a tribute to master weavers. Experience the authentic, divine soul of Bharat with pride.
        </p>
      </div>
    </div>
  );
}