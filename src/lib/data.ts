import type { Service, Testimonial, TeamMember, PricingPlan } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    icon: '💻',
    title: 'Custom Web Applications',
    description:
      'End-to-end web application development tailored to your unique business requirements. From concept to deployment, we build scalable, performant solutions.',
    features: [
      'React / Next.js frontends',
      'Node.js / Python backends',
      'REST & GraphQL APIs',
      'Cloud deployment (AWS, GCP, Azure)',
    ],
    color: 'blue',
  },
  {
    id: '2',
    icon: '📱',
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications that deliver a native-like experience on iOS and Android with a single, maintainable codebase.',
    features: [
      'React Native & Expo',
      'iOS & Android deployment',
      'Push notifications',
      'Offline-first architecture',
    ],
    color: 'cyan',
  },
  {
    id: '3',
    icon: '☁️',
    title: 'Cloud & DevOps',
    description:
      'Modernise your infrastructure with cloud-native architecture, CI/CD pipelines, containerisation, and automated scaling strategies.',
    features: [
      'Docker & Kubernetes',
      'CI/CD pipelines',
      'Infrastructure as Code',
      'Cost optimisation',
    ],
    color: 'violet',
  },
  {
    id: '4',
    icon: '🤖',
    title: 'AI & ML Integration',
    description:
      'Supercharge your product with artificial intelligence — from intelligent chatbots and recommendation engines to custom ML model deployment.',
    features: [
      'LLM integration (GPT, Gemini)',
      'Custom model training',
      'Data pipelines',
      'Real-time inference APIs',
    ],
    color: 'orange',
  },
  {
    id: '5',
    icon: '🔒',
    title: 'Security & Compliance',
    description:
      'Protect your business with penetration testing, code audits, and compliance frameworks (GDPR, ISO 27001, SOC 2).',
    features: [
      'Penetration testing',
      'GDPR compliance',
      'SSO & identity management',
      'Security monitoring',
    ],
    color: 'blue',
  },
  {
    id: '6',
    icon: '🚀',
    title: 'Product Strategy & MVP',
    description:
      'Turn your idea into a market-ready product fast. We help you prioritise, design, and ship a validated MVP in weeks, not months.',
    features: [
      'Product discovery workshops',
      'UX/UI design',
      'Rapid prototyping',
      'Go-to-market support',
    ],
    color: 'cyan',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'FinCore Ltd',
    quote:
      'Kotla transformed our legacy system into a modern cloud platform in under 6 months. The team is world-class and the delivery was flawless.',
    avatar: 'SM',
  },
  {
    id: '2',
    name: 'James Okafor',
    role: 'CEO',
    company: 'NovaTech Ventures',
    quote:
      'Their AI integration doubled our customer engagement metrics within the first quarter. Kotla truly understands how to build for scale.',
    avatar: 'JO',
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Product Lead',
    company: 'GreenShift',
    quote:
      'From wireframe to live product in 8 weeks — an incredible feat. The team\'s communication and technical depth are unmatched.',
    avatar: 'PS',
  },
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Kotla',
    role: 'Founder & CEO',
    bio: 'Former Google engineer with 12 years experience building products used by millions.',
    avatar: 'AK',
  },
  {
    id: '2',
    name: 'Maya Chen',
    role: 'Head of Engineering',
    bio: 'Full-stack architect specialising in distributed systems and real-time applications.',
    avatar: 'MC',
  },
  {
    id: '3',
    name: 'David Osei',
    role: 'Lead Designer',
    bio: 'Award-winning UX designer who blends data-driven insights with beautiful interfaces.',
    avatar: 'DO',
  },
  {
    id: '4',
    name: 'Lena Bauer',
    role: 'AI / ML Engineer',
    bio: 'PhD in Machine Learning, passionate about making AI accessible to every business.',
    avatar: 'LB',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: 'Starter',
    price: '$4,999',
    period: 'project',
    description: 'Perfect for startups validating their idea with an MVP.',
    features: [
      'Up to 5 core features',
      'Responsive web app',
      'Basic API integration',
      '30-day post-launch support',
      'Source code handover',
    ],
    highlighted: false,
  },
  {
    id: '2',
    name: 'Growth',
    price: '$14,999',
    period: 'project',
    description: 'For growing businesses that need a robust, scalable product.',
    features: [
      'Unlimited features',
      'Web + mobile app',
      'Custom API & integrations',
      'Cloud deployment setup',
      '90-day support & SLA',
      'Dedicated project manager',
    ],
    highlighted: true,
  },
  {
    id: '3',
    name: 'Enterprise',
    price: 'Custom',
    period: 'engagement',
    description: 'Tailored solutions for large organisations and complex requirements.',
    features: [
      'Full product team (6–12 members)',
      'Multi-platform delivery',
      'AI/ML feature integration',
      'Security & compliance audit',
      '12-month retainer available',
      'Executive business reviews',
    ],
    highlighted: false,
  },
];

export const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '8', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
];
