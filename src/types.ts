export type ProductCategory = 'all' | 'cakes' | 'mandazi' | 'buns' | 'loaves' | 'packages';

export interface BakeryItem {
  id: string;
  name: string;
  category: 'cakes' | 'mandazi' | 'buns' | 'loaves' | 'packages';
  priceUGX: number;
  priceUSD: number;
  unit: string;
  description: string;
  ingredients: string[];
  image: string;
  badge?: string;
  isPopular?: boolean;
  serves?: string;
  flavorOptions?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cakes' | 'mandazi' | 'buns' | 'loaves' | 'classes';
  image: string;
  caption: string;
  tags: string[];
  occasion?: string;
}

export interface ClassCourse {
  id: string;
  title: string;
  day: 'Saturday' | 'Sunday';
  time: string;
  duration: string;
  instructor: string;
  priceUGX: number;
  priceUSD: number;
  seatsTotal: number;
  seatsBooked: number;
  level: 'Beginner' | 'Intermediate' | 'All Levels' | 'Kids';
  description: string;
  curriculum: string[];
  image: string;
  nextDate: string;
}

export interface CeremonyBookingRequest {
  referenceCode: string;
  ceremonyType: string;
  date: string;
  guestCount: number;
  tierCount: string;
  selectedFlavors: string[];
  finishStyle: string;
  inscriptions: string;
  themeColors: string;
  addMandaziBites: boolean;
  mandaziQuantity: number;
  addSweetBuns: boolean;
  bunsQuantity: number;
  deliveryMethod: 'pickup' | 'delivery';
  deliveryAddress: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialNotes: string;
  estimatedTotalUGX: number;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface BasketItem {
  item: BakeryItem;
  quantity: number;
  selectedFlavor?: string;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  ceremony: string;
  quote: string;
  rating: number;
  avatar: string;
  date: string;
}
