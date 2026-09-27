export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'wedding' | 'portrait' | 'couple';
  categoryLabel: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  caption: string;
  location: string;
  year?: string;
  dimensions?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  deliverables: string[];
  image?: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  eventDate: string;
  location: string;
  message: string;
}
