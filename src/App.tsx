import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Navigation from './components/Navigation';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Collections from './pages/Collections';
import ArtworkDetail from './pages/ArtworkDetail';
import OurStory from './pages/OurStory';
import Commissions from './pages/Commissions';
import Exhibitions from './pages/Exhibitions';
import Workshops from './pages/Workshops';
import Testimonials from './pages/Testimonials';
import ShippingPolicy from './pages/ShippingPolicy';
import Contact from './pages/Contact';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="app-container">
      <ScrollToTop />
      <Header 
        onMenuOpen={() => setIsNavOpen(true)} 
        onCartOpen={() => setIsCartOpen(true)} 
      />
      <Navigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/artworks/:id" element={<ArtworkDetail />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;