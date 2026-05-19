export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
};

export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type AuthUser = {
  email: string;
  name: string;
};

export type ToastType = 'success' | 'error' | 'info';

export type Toast = {
  id: string;
  message: string;
  type: ToastType;
};
