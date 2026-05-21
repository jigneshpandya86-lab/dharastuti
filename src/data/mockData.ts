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
}

export const collections = [
  "Intricate Mandalas",
  "Textured Abstracts",
  "Sacred Geometry",
  "Botanical Series",
  "Monochrome Charcoal",
  "Mixed Media Canvas"
];

export const artworks: Artwork[] = artworksData;