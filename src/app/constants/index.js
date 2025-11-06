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

const faqItems = [
  {
    q: "What does a product management service actually do?",
    a: "Product management services help businesses plan, develop, and launch products effectively. This includes market research, defining requirements, coordinating between teams, and ensuring the product meets customer and business goals.",
  },
  {
    q: "How does product management differ from project management?",
    a: "Product management focuses on the strategy, vision, and lifecycle of a product, while project management handles the execution and delivery of specific projects that support that strategy.",
  },
  {
    q: "Do I need a product manager for a small business or startup?",
    a: "Yes. Even small businesses benefit from product management because it ensures features are prioritized effectively, development stays aligned with customer needs, and limited resources are used strategically.",
  },
  {
    q: "What industries benefit most from product management services?",
    a: "Product management is valuable across all industries — from technology, construction, and real estate to finance and manufacturing — helping teams deliver impactful products efficiently.",
  },
  {
    q: "How do product managers measure success?",
    a: "They measure success using KPIs such as customer satisfaction, feature adoption, time-to-market, and business ROI. Continuous feedback loops ensure goals remain aligned with market needs.",
  },
  {
    q: "Can Berkshire help manage existing products?",
    a: "Absolutely. We assess current performance, analyze customer data, and develop strategies to optimize existing products for better results and market competitiveness.",
  },
];
export const projectPhases = [
  {
    id: 1,
    icon: "🏗️",
    title: "Construction Project Management",
    description: [
      "End-to-end planning, budgeting and scheduling for building projects",
      "Contractor and vendor coordination, procurement and quality assurance",
      "Permit management, site supervision and HSE compliance",
      "Risk management and milestone tracking to ensure timely handover",
    ],
    example:
      "Managing residential, commercial or infrastructure builds — ensuring budget discipline, contractor performance, and on-time delivery.",
  },
  {
    id: 2,
    icon: "💻",
    title: "IT & Software Project Management",
    description: [
      "Product roadmaps, sprint planning and Agile delivery oversight",
      "Stakeholder requirements, technical scope definition and QA",
      "System integrations, cloud migration and security compliance",
      "Release planning, user onboarding and performance monitoring",
    ],
    example:
      "Coordinating cross-functional teams to deliver web and mobile products that meet business objectives and user needs.",
  },
  {
    id: 3,
    icon: "🎯",
    title: "Event & Marketing Project Management",
    description: [
      "Campaign strategy, creative coordination and channel planning",
      "Logistics, vendor sourcing and on-site event execution",
      "Budget management and ROI tracking across channels",
      "Stakeholder communications and post-event performance analysis",
    ],
    example:
      "Delivering high-impact product launches, conferences and brand experiences with tight logistics and measurable outcomes.",
  },
  {
    id: 4,
    icon: "🌍",
    title: "N.G.O Project Management",
    description: [
      "Donor reporting, compliance and transparent fund management",
      "Program design, beneficiary engagement and needs assessment",
      "Monitoring & evaluation (M&E) and impact measurement",
      "Capacity building, local partner coordination and sustainability planning",
    ],
    example:
      "Managing community development, health or education programs to ensure effective use of funds and measurable social impact.",
  },
];

export {
 serviceSteps, servicesList, faqItems
};