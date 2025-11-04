import { FaLightbulb, FaPencilRuler, FaRocket, FaChartLine } from 'react-icons/fa';

const serviceSteps = [
  {
    id: 1,
    name: 'Ideation & Strategy',
    description: 'Identify user needs, market opportunities, and define product vision and goals.',
    icon: <FaLightbulb size={150} className="text-orange-400" />,
  },
  {
    id: 2,
    name: 'Planning & Design',
    description: 'Prioritize features, create a roadmap, and design prototypes for development.',
    icon: <FaPencilRuler size={150} className="text-blue-400" />,
  },
  {
    id: 3,
    name: 'Development & Launch',
    description: 'Build, test, validate, and release the product (or MVP) to the market.',
    icon: <FaRocket size={150} className="text-green-400" />,
  },
  {
    id: 4,
    name: 'Monitoring & Improvement',
    description: 'Track performance, gather feedback, and continuously improve the product.',
    icon: <FaChartLine size={150} className="text-purple-400" />,
  },
];

const servicesList = [
  {
    id: 1,
    title: 'Real Estate',
    products: 'Property listings websites, real estate apps, property management tools.',
    services: [
      'Building or managing real estate platforms (Zillow-type apps)',
      'Managing digital listings & customer experience',
      'Overseeing PropTech development',
      'Market analysis & user feedback collection',
    ],
    example: 'Product Manager for a real estate CRM or rental management app.',
  },
  {
    id: 2,
    title: 'Fintech / Banking',
    products: 'Banking apps, loan platforms, mobile wallets, investment tools.',
    services: [
      'Product roadmap planning',
      'Feature prioritization (e.g., bill payments or crypto wallet)',
      'UX research to improve onboarding',
      'Compliance and security oversight',
    ],
    example: 'Managing a digital banking product like a savings app or card platform.',
  },
  {
    id: 3,
    title: 'E-commerce / Retail',
    products: 'Shopping apps, online marketplaces, POS systems.',
    services: [
      'Optimize product listings, search, and checkout flow',
      'Data-driven pricing & recommendation systems',
      'Managing delivery and returns integrations',
      'Partner/vendor product onboarding',
    ],
    example: 'Product management for an online store like Jumia or Amazon.',
  },
  {
    id: 4,
    title: 'Healthcare / MedTech',
    products: 'Patient apps, telemedicine systems, hospital management software.',
    services: [
      'Coordinate with medical experts for compliant features',
      'Manage appointment, records, and payment features',
      'Ensure HIPAA (or equivalent) compliance',
    ],
    example: 'Managing a telehealth product or health tracking app.',
  },
  {
    id: 5,
    title: 'EdTech',
    products: 'Online learning platforms, tutoring apps, LMS.',
    services: [
      'Design student–teacher interaction flows',
      'Manage content uploads, tests, progress tracking',
      'Integrate payments or certification systems',
    ],
    example: 'Product manager for an e-learning platform like Udemy.',
  },
  {
    id: 6,
    title: 'Transportation & Logistics',
    products: 'Delivery tracking systems, ride-hailing apps, fleet management tools.',
    services: [
      'Route optimization product features',
      'Manage driver and user app interfaces',
      'Analytics on delivery performance',
    ],
    example: 'Product manager for a logistics tracking dashboard or dispatch app.',
  },
  {
    id: 7,
    title: 'Hospitality / Travel',
    products: 'Hotel booking sites, travel planning apps, property rental systems.',
    services: [
      'Feature design for reservations, reviews, and payment',
      'Partner integrations (airlines, hotels)',
      'Customer experience optimization',
    ],
    example: 'Managing a short-stay booking app or hotel management system.',
  },
  {
    id: 8,
    title: 'SaaS / Tech Products',
    products: 'Subscription software (e.g., CRM tools, analytics dashboards).',
    services: [
      'End-to-end product strategy',
      'Feature design and backlog management',
      'Growth & retention analysis',
    ],
    example: 'Managing a B2B SaaS dashboard or API-based product.',
  },
  {
    id: 9,
    title: 'Entertainment / Media',
    products: 'Streaming platforms, music apps, content creation tools.',
    services: [
      'Feature roadmap (playlists, recommendations)',
      'Data tracking for engagement',
      'Subscription management & monetization',
    ],
    example: 'Product manager for a podcast or movie streaming app.',
  },
  {
    id: 10,
    title: 'Agriculture / AgriTech',
    products: 'Farm management systems, produce marketplaces, weather apps.',
    services: [
      'Manage data dashboards for farmers',
      'Integrate satellite/weather data',
      'Connect farmers with buyers digitally',
    ],
    example: 'Product management for an app that helps farmers sell crops online.',
  },
];



export {
 serviceSteps, servicesList,
};