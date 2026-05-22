export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // elegant text pricing (e.g., "₦15,000" or "$30")
  category: "dining" | "cocktails" | "lounge";
  tag?: string; // e.g. "Chef's Special", "Premium", "Exclusive"
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  avatarPlaceholder: string; // initials
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: "dining" | "vip_lounge" | "terrace";
  specialRequests?: string;
}

export interface PrivateEventData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  guestsCount: string;
  date: string;
  message?: string;
}
