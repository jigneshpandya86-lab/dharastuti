import { useState } from 'react';
import ArtCard from '../components/ArtCard';
import { artworks } from '../data/mockData';
import { Filter } from 'lucide-react';
import './Collections.css';

export default function Collections() {
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Get unique categories from artworks
  const categories = ['all', ...new Set(artworks.map(a => a.category))];

  const filteredArtworks = artworks.filter(a => {
    const matchesAvailability = availabilityFilter === 'all' || (availabilityFilter === 'available' && a.isAvailable);
    const matchesCategory = categoryFilter === 'all' || a.category === categoryFilter;
    return matchesAvailability && matchesCategory;
  });

  return (
    <div className="collections-page">
      <div className="container">
        <header className="collections-header">
          <h1 className="text-serif">All Artworks</h1>
          <p className="text-sans">{filteredArtworks.length} Unique Works</p>
        </header>

        <div className="filter-bar">
          <div className="filter-controls">
            <button className="icon-btn filter-toggle" aria-label="Filters">
              <Filter size={20} />
              <span className="text-sans">Filter & Sort</span>
            </button>
            
            <div className="filter-options">
              <select 
                className="filter-select text-sans"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">Category: All</option>
                {categories.filter(c => c !== 'all').map(category => (
                  <option key={category} value={category}>Category: {category}</option>
                ))}
              </select>

              <select 
                className="filter-select text-sans"
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
              >
                <option value="all">Availability: All</option>
                <option value="available">Availability: Available Only</option>
              </select>
            </div>
          </div>
        </div>

        {filteredArtworks.length > 0 ? (
          <div className="grid-3">
            {filteredArtworks.map((art) => (
              <ArtCard key={art.id} artwork={art} />
            ))}
          </div>
        ) : (
          <div className="empty-state text-center">
            <p className="text-serif" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>All pieces currently found a home.</p>
            <p className="text-sans" style={{ marginBottom: '2rem', opacity: 0.8 }}>Request a commission?</p>
            <a href="https://wa.me/919725001354?text=Hello!%20I’d%20like%20to%20discuss%20a%20custom%20commission." target="_blank" rel="noopener noreferrer" className="btn btn-primary">Start a Commission</a>
          </div>
        )}
      </div>
    </div>
  );
}