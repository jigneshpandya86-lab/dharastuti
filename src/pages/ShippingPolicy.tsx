export default function ShippingPolicy() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Shipping & Delivery</h1>
      <div className="text-sans" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Local Delivery (Vadodara)</h2>
        <p>We offer complimentary hand-delivery or studio pickup for clients within Vadodara. Please select your preference at checkout or contact us via WhatsApp to schedule a time.</p>
        
        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Domestic Shipping (India)</h2>
        <p>All artworks are professionally packed using multiple layers of protective materials and high-quality crating to ensure safe arrival. We ship via premium art couriers with tracking provided.</p>
        <p><strong>Processing Time:</strong> Artworks are typically dispatched within 3-5 business days of payment confirmation.</p>
        
        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>International Shipping</h2>
        <p>We do ship internationally. Please contact us directly for a customized shipping quote based on the artwork size and your location.</p>
        
        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Returns & Exchanges</h2>
        <p>Due to the unique, one-of-a-kind nature of handcrafted art, all sales are final. However, if an item arrives damaged, please contact us within 24 hours of receipt with photos of the packaging and the artwork so we can resolve the issue immediately.</p>
      </div>
    </div>
  );
}