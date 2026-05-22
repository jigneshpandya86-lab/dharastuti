export default function Contact() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Contact Us</h1>
      <div className="grid-2" style={{ gap: '4rem' }}>
        <div>
          <p className="text-sans" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            Have a question about our heritage collections, shipping, or just want to say hello? Get in touch using the form or through our direct channels.
          </p>
          <div className="text-sans" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p><strong>Email:</strong> dharastuti.art@gmail.com</p>
            <p><strong>WhatsApp:</strong> +91 97250 01354</p>
            <p><strong>Studio:</strong> Vadodara, Gujarat, India</p>
          </div>
        </div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="text-sans" style={{ fontSize: '0.9rem', opacity: 0.6 }}>Full Name</label>
            <input type="text" style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'inherit' }} placeholder="Your Name" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="text-sans" style={{ fontSize: '0.9rem', opacity: 0.6 }}>Email Address</label>
            <input type="email" style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'inherit' }} placeholder="email@example.com" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="text-sans" style={{ fontSize: '0.9rem', opacity: 0.6 }}>Message</label>
            <textarea rows={5} style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'inherit' }} placeholder="How can we help?"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}