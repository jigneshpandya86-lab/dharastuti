import artworksData from './artworks.json';

export interface Artwork {
  id: string;
  sku: string;
  title: string;
  collection: string;
  category: string;
  price: string;
  isAvailable: boolean;
  images: string[];
  size: string;
  medium: string;
  description: string;
  pattern?: string;
  washingTips?: string;
  stock?: number;
}

export const collections = [
  { label: "Vaalai Pattu", image: "/images/artworks/SKU5a.jpeg" },
  { label: "Kanchi Cotton", image: "/images/artworks/SKU6a.jpeg" },
  { label: "Natural Dyed Block Prints", image: "/images/artworks/SKU1a.jpeg" },
  { label: "Tie & Dye Bandhej", image: "/images/artworks/SKU2a.jpeg" },
  { label: "Narayanpet Handlooms", image: "/images/artworks/SKU3a.jpeg" },
  { label: "Bengal Jamdani", image: "/images/artworks/SKU4a.jpeg" },
  { label: "Unstitched Dress Materials", image: "/images/artworks/SKU1b.jpeg" },
  { label: "Timeless Sarees", image: "/images/artworks/SKU2b.jpeg" }
];

export const artworks: Artwork[] = artworksData;