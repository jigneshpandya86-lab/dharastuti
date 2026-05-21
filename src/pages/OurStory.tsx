import './Home.css'; // Reuse container styles

export default function OurStory() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Our Story</h1>
      <div className="text-sans" style={{ maxWidth: '800px', lineHeight: '1.8', fontSize: '1.1rem' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Welcome to Dharastuti Art, a sanctuary for one-of-a-kind handcrafted pieces that blend traditional techniques with modern aesthetics. 
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Founded by Dharastuti, our studio is dedicated to the belief that art should be as unique as the spaces it inhabits. Every piece you see here is a "1 of 1"—a promise that your chosen artwork will never be replicated or mass-produced.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          From intricate mandalas that invite meditation to bold, textured abstracts that command attention, each creation is a journey into color, form, and emotion. We use premium archival materials to ensure that your investment remains a vibrant part of your collection for generations.
        </p>
        <p>
          Thank you for supporting independent art and for choosing to bring a piece of our studio into your home.
        </p>
      </div>
    </div>
  );
}