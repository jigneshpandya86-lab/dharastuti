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
}

export const collections = [
  "Natural Dyed Block Prints",
  "Tie & Dye Bandhej",
  "Narayanpet Handlooms",
  "Bengal Jamdani",
  "Unstitched Dress Materials",
  "Premium Fabrics",
  "Gents' Kurtas",
  "Timeless Sarees"
];

export const artworks: Artwork[] = artworksData;