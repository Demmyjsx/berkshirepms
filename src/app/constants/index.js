import {  FaPencilRuler, FaRocket, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';

// -------------------------------
// PROJECT MANAGEMENT PHASES
// -------------------------------


const serviceSteps = [
  {
    id: 1,
    name: "Initiation & Strategy",
    description:
      "Define project objectives, scope, and success criteria while identifying key stakeholders and resources.",
    image: "/innovation-strategy.jpg",
  },
  {
    id: 2,
    name: "Planning & Design",
    description:
      "Develop a detailed project plan including timelines, resource allocation, risk assessment, and design documentation.",
    image: "/planning.jpg",
  },
  {
    id: 3,
    name: "Execution & Delivery",
    description:
      "Coordinate teams, manage progress, ensure quality standards, and deliver the project within budget and schedule.",
    image: "/delivery.webp",
  },
  {
    id: 4,
    name: "Monitoring & Closure",
    description:
      "Track performance, manage changes, evaluate outcomes, and ensure successful handover with full documentation.",
    image: "/Monitoring.jpg",
  },
];

const mission = "Empower organizations to achieve projects with clarity and confidence—driving collaboration, innovation, and outstanding results for every initiative.";
const vision = "To be recognized globally as the leading provider of project management solutions, celebrated for creativity, reliability, and client-focused excellence.";
const values = [
  { label: 'Safety & Integrity', desc: 'We operate responsibly and ethically, prioritizing safety, security, and the highest standards in everything we do.' },
  { label: 'Collaborative Success', desc: 'We bring together the best expertise worldwide to solve challenges and achieve shared goals.' },
  { label: 'Innovation with Purpose', desc: 'We embrace fresh ideas and forward-thinking approaches that deliver real value to clients, communities, and our teams.' },
  { label: 'Excellence in Delivery', desc: 'We focus relentlessly on client satisfaction through superior project execution and operational expertise.' },
  { label: 'Sustainable Impact', desc: 'We act to positively influence the environment, enrich communities, and leave lasting legacies for future generations.' },
  { label: 'Growth Together', desc: 'We foster a welcoming, engaging workplace that helps every team member reach their full potential.' },
];

const faqItems = [
  {
    q: "What does a project management service actually do?",
    a: "Project management services help organizations plan, execute, and deliver projects effectively. This includes defining goals, managing resources, mitigating risks, and ensuring the project is completed on time, within scope, and on budget.",
  },
  {
    q: "How does project management differ from product management?",
    a: "Project management focuses on executing specific goals within defined timelines and resources, while product management is about guiding the long-term strategy and success of a product. A project manager ensures successful delivery; a product manager ensures ongoing value.",
  },
  {
    q: "Do small businesses or startups need project management?",
    a: "Yes. Even small businesses benefit from structured project management, as it improves efficiency, keeps budgets under control, and ensures every task aligns with business objectives.",
  },
  {
    q: "What industries benefit most from project management services?",
    a: "Virtually all industries benefit — from construction, finance, and healthcare to education and agriculture — as project management ensures organized execution, accountability, and results.",
  },
  {
    q: "How do project managers measure success?",
    a: "They use key performance indicators (KPIs) such as delivery time, cost control, stakeholder satisfaction, and achieved objectives. A successful project meets quality standards and delivers measurable impact.",
  },
  {
    q: "Can Berkshire help manage existing or ongoing projects?",
    a: "Absolutely. We provide project recovery, performance audits, and re-alignment strategies to bring existing or delayed projects back on track efficiently and sustainably.",
  },
];


export const projectPhases = [
  {
    id: 1,
    icon: "🏗️",
    title: "Construction Project Management",
    description: [
      "Comprehensive planning, budgeting, and scheduling for construction projects.",
      "Vendor supervision, material procurement, and site quality assurance.",
      "Regulatory compliance and risk management oversight.",
      "Progress tracking and timely project handover.",
    ],
    example:
      "Managing residential or commercial building projects from design to delivery with safety, quality, and cost efficiency.",
  },
  {
    id: 2,
    icon: "💻",
    title: "IT & Digital Transformation Project Management",
    description: [
      "Technology implementation planning and cross-team coordination.",
      "System integration, software deployment, and cloud migration management.",
      "Budget and schedule control through agile methodologies.",
      "Testing, rollout, and performance tracking post-launch.",
    ],
    example:
      "Overseeing a company’s digital infrastructure upgrade or enterprise system rollout from start to finish.",
  },
  {
    id: 3,
    icon: "🎯",
    title: "Event & Marketing Project Management",
    description: [
      "Campaign planning, vendor coordination, and logistics supervision.",
      "Creative design, scheduling, and brand consistency assurance.",
      "Budget management and ROI analysis across multiple events.",
      "Post-event evaluation and performance reporting.",
    ],
    example:
      "Delivering corporate conferences, brand activations, or national events with precision and measurable success.",
  },
  {
    id: 4,
    icon: "🌍",
    title: "N.G.O & Development Project Management",
    description: [
      "Donor reporting, budgeting, and compliance management.",
      "Program design, community engagement, and impact measurement.",
      "Monitoring and evaluation (M&E) for transparency and accountability.",
      "Capacity building and sustainability planning for long-term success.",
    ],
    example:
      "Managing humanitarian, educational, or healthcare projects to ensure resources are used effectively and goals are met.",
  },
];
const projectServices = [
  {
    id: 1,
    name: 'Construction Project Management',
    description:
      'Comprehensive oversight of construction projects — from planning and budgeting to supervision and final handover. Ensuring timely delivery, quality control, and adherence to safety standards.',
    image: '/construction.jpg',
  },
  {
    id: 2,
    name: 'IT & Software Project Management',
    description:
      'Coordinating agile software development, system integration, and technology rollouts. Managing cross-functional teams to deliver innovative digital solutions efficiently.',
    image: '/.jpg',
  },
  {
    id: 3,
    name: 'Event & Marketing Project Management',
    description:
      'Planning and executing impactful events, campaigns, and activations. Handling logistics, creative direction, and ROI tracking for seamless event experiences.',
    image: '/event-marketing.jpg',
  },
  {
    id: 4,
    name: 'N.G.O Project Management',
    description:
      'Overseeing social impact projects in education, healthcare, and community development. Ensuring transparent fund management and measurable, sustainable outcomes.',
    image: '/ngo.jpg',
  },
  {
    id: 5,
    name: 'Real Estate Project Management',
    description:
      'Managing residential, commercial, and mixed-use developments. Coordinating feasibility studies, design reviews, budgeting, and contractor performance.',
    image: '/real-estate.jpg',
  },
  {
    id: 6,
    name: 'Energy & Engineering Project Management',
    description:
      'Delivering renewable energy, oil & gas, and infrastructure projects with strong focus on safety, compliance, and sustainability performance.',
    image: '/energy-engineering.jpg',
  },
  {
    id: 7,
    name: 'Healthcare Project Management',
    description:
      'Managing hospital setups, telemedicine systems, and medical facility expansions. Ensuring compliance, patient safety, and operational excellence.',
    image: '/health.jpg',
  },
  {
    id: 8,
    name: 'Educational & Training Project Management',
    description:
      'Executing academic infrastructure, e-learning programs, and capacity-building initiatives. Monitoring progress and ensuring educational impact.',
    image: '/education.jpg',
  },
  {
    id: 9,
    name: 'Transportation & Logistics Project Management',
    description:
      'Planning and managing logistics systems, transport networks, and fleet optimization projects for improved mobility and efficiency.',
    image: '/Transportation.jpg',
  },
  {
    id: 10,
    name: 'Agricultural & Environmental Project Management',
    description:
      'Implementing sustainable agriculture, irrigation, and environmental conservation programs. Coordinating with local communities for long-term results.',
    image: '/agriculture.jpg',
  },
];


export { mission, vision, values, serviceSteps, projectServices, faqItems };