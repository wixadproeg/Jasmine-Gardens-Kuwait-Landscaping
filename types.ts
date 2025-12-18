
export interface Service {
  id: string;
  title: string;
  description: string;
  fullContent?: string;
  price?: string;
  images: string[];
  icon: string;
}

export interface CompanyInfo {
  name: string;
  specialty: string;
  location: string;
  serviceRange: string;
  phone: string;
  whatsapp: string;
  email: string;
  socials: {
    snapchat: string;
    instagram: string;
    tiktok: string;
    facebook: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}
