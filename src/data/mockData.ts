export interface Artwork {
  id: string;
  code: string;
  title: string;
  collection: string;
  price: string;
  isAvailable: boolean;
  image: string;
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

export const artworks: Artwork[] = [
  {
    id: "ds-101",
    code: "DS-101",
    title: "Ethereal Bloom",
    collection: "Botanical Series",
    price: "₹18,500",
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=800",
    size: "24 x 36 inches",
    medium: "Acrylic on Canvas",
    description: "A delicate exploration of floral forms, using muted tones and minimalist composition to evoke a sense of quiet grace."
  },
  {
    id: "ds-102",
    code: "DS-102",
    title: "Golden Ratio",
    collection: "Sacred Geometry",
    price: "₹24,000",
    isAvailable: false,
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800",
    size: "30 x 30 inches",
    medium: "Gold Leaf & Ink on Archival Paper",
    description: "Precise geometric lines meeting at the golden ratio. An intricate piece focusing on balance and harmony."
  },
  {
    id: "ds-103",
    code: "DS-103",
    title: "Midnight Depth",
    collection: "Textured Abstracts",
    price: "₹32,000",
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800",
    size: "40 x 40 inches",
    medium: "Heavy Impasto Acrylic",
    description: "Rich, deeply textured layers of charcoal and navy blue create a mesmerizing, contemplative abyss."
  },
  {
    id: "ds-104",
    code: "DS-104",
    title: "Sahasrara",
    collection: "Intricate Mandalas",
    price: "₹15,000",
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1582201943021-e8e6b17da5be?auto=format&fit=crop&q=80&w=800",
    size: "20 x 20 inches",
    medium: "Fineliner on Cotton Paper",
    description: "A highly detailed, meditative mandala representing the crown chakra. Thousands of individual strokes."
  }
];