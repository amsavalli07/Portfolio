import resumePath from '@/assets/Amsavalli_R_Resume.pdf';

export const personal = {
  name: 'AMSAVALLI',
  role: 'Data Science & AI/ML Engineer | Python Developer',
  experience: '3+ Years',
  location: 'Tenkasi, Tamil Nadu, India',
  phone: '+91 9092542266',
  email: 'sramsavalli07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amsavalli-ravichandran/',
  github: 'https://github.com/amsavalli07',
  resumePath,
  headline: 'Building Intelligent Solutions Through Python, Data Science & Artificial Intelligence.',
  intro:
    'I am a Data Science and AI/ML Engineer with 3+ years of software engineering experience, specializing in Python development, backend engineering, machine learning, deep learning, and AI-powered applications. I enjoy transforming complex problems into scalable, intelligent, and production-ready solutions.',
};

export const roles = [
  'Data Science Engineer',
  'AI/ML Engineer',
  'Python Developer',
  'Backend Developer',
];

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export const aboutParagraphs = [
  'I am a passionate Data Science and AI/ML Engineer with over 3 years of experience developing scalable applications, backend systems, and intelligent software solutions.',
  'My technical expertise includes Python, FastAPI, Django, REST API development, SQL, MongoDB, Machine Learning, Deep Learning, Computer Vision, and AI integration.',
  'I have hands-on experience building production applications, developing data processing workflows, implementing machine learning models, integrating AI-powered features, and deploying applications on cloud and Linux-based environments.',
  'I continuously explore emerging technologies in Artificial Intelligence and focus on building practical solutions that create business value.',
];

export const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Technical Skill Areas' },
  { value: '5+', label: 'Projects' },
  { value: 'Multiple', label: 'Production Applications' },
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend Development',  
    icon: 'Server',
    skills: ['FastAPI', 'Django', 'Flask', 'REST APIs', 'Async Programming', 'WebSockets'],
  },
  {
    title: 'Data Science',
    icon: 'BarChart3',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Exploratory Data Analysis', 'Data Cleaning', 'Data Preprocessing'],
  },
  {
    title: 'Machine Learning',
    icon: 'Brain',
    skills: ['Scikit-learn', 'Regression', 'Classification', 'Random Forest', 'Model Training', 'Model Evaluation'],
  },
  {
    title: 'Deep Learning',
    icon: 'Network',
    skills: ['PyTorch', 'TensorFlow', 'CNN', 'Transfer Learning', 'U-Net', 'Image Segmentation'],
  },
  {
    title: 'Computer Vision',
    icon: 'Eye',
    skills: ['Image Analysis', 'Image Recognition', 'OCR', 'Image Preprocessing'],
  },
  {
    title: 'AI and NLP',
    icon: 'Sparkles',
    skills: ['OpenAI', 'Natural Language Processing', 'Conversational AI', 'AI Agents'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud and DevOps',
    icon: 'Cloud',
    skills: ['AWS', 'Azure', 'Docker', 'Git', 'GitHub', 'Linux', 'CI/CD'],
  },
];

export const experience = [
  {
    position: 'Python Developer',
    company: 'KiteCareer',
    duration: 'December 2023 – Present',
    points: [
      'Developed scalable Python applications and REST APIs using FastAPI and Django.',
      'Designed and managed database operations using MySQL and MongoDB.',
      'Optimized database schemas and queries, improving query performance by approximately 30%.',
      'Developed data processing and transformation workflows using Python.',
      'Worked with JSON, CSV, and Excel data formats.',
      'Improved backend application performance through API and database optimization.',
      'Developed production-ready backend services and integrations.',
    ],
  },
];

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: 'AI / ML' | 'Python Backend' | 'Web Applications' | 'Data Science';
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  query: string;
};  

export const projects: Project[] = [
  {
    id: 1,
    title: 'CraveCall.ai',
    subtitle: 'AI-Powered Voice Agent',
    category: 'AI / ML',
    description:
      'Contributed to an AI-powered voice agent platform designed to automate customer calls, order placement, bookings, and appointment scheduling. Integrated AI-driven workflows with backend APIs and real-time communication services to support automated customer interactions.',
    tech: ['Python', 'FastAPI', 'React.js', 'MongoDB', 'WebSockets', 'Twilio'],
    liveUrl: 'https://cravecall.ai',
    query: 'ai voice assistant phone call',
  },
  {
    id: 2,
    title: 'AI-Powered Matrimony Platform',
    subtitle: 'Intelligent Matchmaking',
    category: 'AI / ML',
    description:
      'Developed an AI-driven matrimony platform with intelligent matchmaking capabilities. Implemented backend APIs, user profile management, authentication, and machine learning-based recommendation workflows.',
    tech: ['Python', 'FastAPI', 'React.js', 'MongoDB', 'Stability AI'],
    liveUrl: 'https://mediumturquoise-sandpiper-294230.hostingersite.com',
    query: 'matrimony matchmaking heart connection',
  },
  {
    id: 3,
    title: 'Shopana.ai',
    subtitle: 'Social Media Automation Tool',
    category: 'Web Applications',
    description:
      'Developed a social media automation platform for Instagram and Facebook, enabling media uploads, post scheduling, and publishing through Meta Graph API. Integrated Cloudinary for media storage and Make.com for workflow automation.',
    tech: ['Python', 'FastAPI', 'React.js', 'MongoDB Atlas', 'Meta Graph API', 'Cloudinary', 'Make.com'],
    liveUrl: 'https://shopana.ai',
    query: 'social media scheduling instagram phone',
  },
  {
    id: 4,
    title: 'Profitkart',
    subtitle: 'Multi-Vendor E-Commerce Platform',
    category: 'Python Backend',
    description:
      'Developed backend functionality for a multi-vendor e-commerce platform connecting vendors and customers through a unified marketplace. Implemented vendor management, product management, order processing, employee permissions, delivery management, subscription management, add-on purchases, notification workflows, and reporting APIs. Worked on subscription-based product and order limits, vendor operations, and production deployment.',
    tech: ['Python', 'FastAPI', 'MongoDB', 'REST APIs', 'JWT Authentication', 'Git', 'Linux', 'VPS Deployment'],
    liveUrl: 'https://www.profitkart.in',
    query: 'ecommerce online shopping marketplace',
  },
  {
    id: 5,
    title: 'Inclusive Innovative Street',
    subtitle: 'AI-Powered Urban Analytics',
    category: 'Data Science',
    description:
      'Worked on an AI-powered urban analytics platform using machine learning, geospatial analytics, and optimization techniques to analyze street infrastructure. Used OpenStreetMap data and structured geospatial classifications to identify safe routes and accessibility features.',
    tech: ['Python', 'Machine Learning', 'Geospatial Analytics', 'OpenStreetMap', 'Data Processing'],
    query: 'city street map urban planning',
  },
  // {
  //   id: 6,
  //   title: 'Review Management',
  //   subtitle: 'AI-Powered Review Management Platform',
  //   category: 'Backend',
  //   description:
  //     'The development of a review management platform designed to help businesses manage and monitor customer reviews across multiple platforms. Integrated Google Business Profile APIs to fetch and manage business reviews, implemented secure OAuth 2.0 authentication, and developed scalable REST APIs using FastAPI and PostgreSQL to streamline review management and customer feedback operations.'
  //   tech: ['Python', 'FastAPI', 'PostgreSQL', 'Google Business Profile API', 'OAuth 2.0', 'REST API'],
  //   liveUrl: 'https://steelblue-finch-612951.hostingersite.com/',
  //   query: 'business customer review management dashboard',
  // },
];

export const projectFilters = ['All', 'AI / ML', 'Python Backend', 'Web Applications', 'Data Science'] as const;

export const education = [
  {
    degree: 'Master of Computer Application (MCA)',
    institution: 'Indira Gandhi National Open University, Tiruvandrum',
    year: '2020',
    cgpa: '7.5',
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'J.P. College of Arts & Science, Ayikudy',
    year: '2014',
    cgpa: '7.9',
  },
];

export const heroBadges = ['Python', 'FastAPI', 'AI', 'ML', 'TensorFlow', 'PyTorch', 'DevOps'];
