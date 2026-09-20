export const siteConfig = {
  name: 'Urmil Bhavsar',
  role: 'Full Stack Developer',
  location: 'Ahmedabad, Gujarat',
  openToRelocate: true,
  experience: '2+ years',
  instagram: 'https://www.instagram.com/urmildraws/',
  linkedin: 'https://www.linkedin.com/in/urmil-bhavsar/',
  email: 'urmilwork1@gmail.com',
  resume: '/Urmil_Bhavsar_FSD_Resume.pdf',
  github: null,
};

export const projects = [
  {
    number: '01',
    name: 'Manage Services',
    label: 'Production freelance full-stack application',
    summary:
      'Built a full-stack production app with custom admin panels, dynamic content workflows, backend APIs, and secure VPS deployment for live business use.',
    tech: ['Full Stack', 'APIs', 'Admin Panels', 'Deployment'],
    link: 'https://www.manageservices.co.in',
    mode: 'left',
    accent: 'manage',
  },
  {
    number: '02',
    name: 'Sunlink Properties',
    label: 'Freelance property platform and admin system',
    summary:
      'Developed a production-ready property website and backend admin workflows for managing listings, content, and operational updates.',
    tech: ['Frontend', 'Backend', 'Admin Dashboard', 'Deployment'],
    link: 'https://sunlinkproperties.com/',
    mode: 'right',
    accent: 'data',
  },
];

export const stackGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'JavaScript'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'SQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & Infrastructure',
    items: ['AWS S3', 'AWS SES', 'Docker', 'Jenkins', 'VPS'],
  },
  {
    title: 'APIs & Architecture',
    items: ['REST APIs', 'OpenAPI/Swagger', 'WebSockets', 'Apache Kafka'],
  },
  {
    title: 'Testing',
    items: ['Vitest', 'Jest', 'Karma'],
  },
  {
    title: 'AI',
    items: ['AI Integration'],
  },
];

export const experiences = [
  {
    company: 'Techify Solutions Private Limited',
    title: 'Full Stack Developer',
    date: 'Oct 2025 — Present',
    detail:
      'Architected enterprise and client-facing systems with a focus on CRM microservices, event-driven integrations, healthcare workflows, and release reliability.',
    technologies: ['Node.js', 'React.js', 'PostgreSQL', 'Redis', 'Kafka', 'AWS', 'Docker', 'Jenkins'],
    accomplishments: [
      'Unified CRM operations across three platforms by architecting the AiCardVault CRM microservice and integrating HubSpot, Salesforce, and Zoho.',
      'Automated billing and collections provisioning through data seeding for users, roles, permissions, and application configuration.',
      'Enabled real-time patient engagement for Entel using Kafka-based manual and scheduled push-notification workflows.',
      'Improved release confidence by implementing Vitest test cases and automated microservice HTML reports across the platform.',
      'Delivered the Tribhuvandas Foundation healthcare survey platform end-to-end as the sole backend owner, including conditional workflows, RBAC, offline sync, and Redis caching.',
      'Integrated AWS S3 and AWS SES to streamline storage, email delivery, and operational efficiency across healthcare applications.',
    ],
  },
  {
    company: 'GRT Technologies LLP',
    title: 'Full Stack Developer',
    date: 'Feb 2025 — Oct 2025',
    detail:
      'Built modern web experiences and backend systems for banking, HRMS, and client portal applications while improving maintainability and delivery speed.',
    technologies: ['Angular', 'React.js', 'Node.js', 'NestJS', 'PostgreSQL', 'VPS'],
    accomplishments: [
      'Modernized ICICI Bank’s web presence by developing responsive, accessible Angular components for a website modernization initiative.',
      'Reduced manual integration effort by automating REST API generation from OpenAPI/Swagger specs for the LION (Apple) client.',
      'Led API development and deployment for the HRMS and Amayra Crystals backend systems from concept to production.',
      'Built AI-powered chat, speech-to-text, and data visualization features for natural-language database querying.',
      'Delivered billing, archiving, and admin workflows across client platforms while improving code quality through Angular unit testing and review gates.',
    ],
  },
  {
    company: 'Xceltec Interactive Private Limited',
    title: 'Software Developer',
    date: 'Jun 2024 — Jan 2025',
    detail:
      'Independently managed end-to-end development of business platforms, taking ownership of architecture, frontend, backend, APIs, deployment, and team onboarding.',
    technologies: ['Angular', 'Node.js', 'Express.js', 'SQL', 'Google Maps API'],
    accomplishments: [
      'Led the end-to-end development of MarineCP, a maritime charter party platform with grooved admin and user workflows, API integration, and deployment.',
      'Improved system reliability and performance for P6 risk management software while adding new features and workflow enhancements.',
      'Conducted technical interviews for MEAN stack roles and delivered structured onboarding/training programs for new hires.',
    ],
  },
  {
    company: 'Reveation Technologies LLP',
    title: 'MERN Stack Intern',
    date: 'Feb 2024 — May 2024',
    detail:
      'Worked across frontend and backend feature development for e-commerce, jewelry valuation, and company website redevelopment projects.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'SQL'],
    accomplishments: [
      'Developed and maintained frontend and backend features for e-commerce platforms, including cart, wishlist, and checkout flows.',
      'Enhanced a jewelry valuation system to improve the capture and management of jewelry details.',
      'Led the frontend and backend redevelopment of the company website to improve responsiveness and user experience.',
    ],
  },
];

export const artwork = [
  {
    src: '/drawing_1.jpg',
    alt: 'Black and white pencil portrait drawing of a person behind a fence.',
  },
  {
    src: '/drawing_2.jpg',
    alt: 'Black and white pencil portrait illustration of a character with a stylized face.',
  },
  {
    src: '/drawing_3.jpg',
    alt: 'Pencil portrait drawing of a person holding a mask and sketching with a pencil.',
  },
];

export const education = {
  year: '2019 — 2024',
  degree: 'Bachelor of Engineering',
  field: 'Information Technology',
  college: 'Government Engineering College, Modasa',
};
