export const siteConfig = {
  name: 'Urmil Bhavsar',
  role: 'Full Stack Developer • Backend Engineer • AI Systems Engineer',
  location: 'Ahmedabad, Gujarat',
  openToRelocate: true,
  experience: '2.7+ years',
  instagram: 'https://www.instagram.com/urmildraws/',
  linkedin: 'https://www.linkedin.com/in/urmil-bhavsar/',
  email: 'urmilwork1@gmail.com',
  resume: '/assets/Urmil_Bhavsar_FSD_Resume.pdf',
  github: null,
};

export const projects = [
  {
    number: '01',
    name: 'Entel',
    label: 'Hospital ICU & Clinical Enterprise Platform',
    summary:
      'Architected an event-driven transactional outbox pattern with Apache Kafka to reliably dispatch notifications across 20+ operational events, implementing VVIP patient identity masking, OTP authentication, token revocation, S3-backed consent tracking, and Vitest coverage across 10+ microservices.',
    impact:
      'Guaranteed 100% at-least-once notification delivery without distributed transaction failures while meeting strict healthcare compliance standards.',
    tech: ['Node.js', 'NestJS', 'React.js', 'Apache Kafka', 'AWS S3', 'AWS SES', 'Docker', 'Vitest'],
    link: null,
    badge: 'Enterprise Architecture',
    mode: 'left',
    accent: 'data',
  },
  {
    number: '02',
    name: 'Tribhuvandas Foundation',
    label: 'Community Health Platform & AI Transliteration',
    summary:
      'Integrated Sarvam AI (105B) multilingual models to phonetically match, clean, and normalize Gujarati and English patient names into relational tables; built conditional survey validation rules, maternal/infant lifecycle triggers, and automated Excel reporting.',
    impact:
      'Restructured survey, follow-up, and reporting APIs using composite indexing and recursive CTEs, reducing latency by ~1 second (consistently sub-800 ms).',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Sarvam AI (105B)', 'Recursive CTEs', 'ExcelJS'],
    link: null,
    badge: 'AI & Healthcare Systems',
    mode: 'right',
    accent: 'api',
  },
  {
    number: '03',
    name: 'AiCardVault',
    label: 'B2B SaaS & Multi-Tenant CRM Integrations',
    summary:
      'Architected a standalone CRM integration microservice connecting HubSpot, Zoho, and Salesforce with OAuth 2.0 token management, automated refresh lifecycles, and bi-directional lead sync webhooks, backed by recursive CTE tenant isolation.',
    impact:
      'Mitigated brute-force threats via Redis login throttling, maintained zero tenant data leakage, and achieved smooth rendering of 10,000+ lead records via React DOM virtualization.',
    tech: ['TypeScript', 'Express.js', 'React.js', 'PostgreSQL', 'Redis', 'OAuth 2.0', 'Virtualization'],
    link: null,
    badge: 'B2B SaaS & Microservices',
    mode: 'left',
    accent: 'hrms',
  },
  {
    number: '04',
    name: 'AI SQL Agent',
    label: 'Natural-Language Data Analytics Engine',
    summary:
      'Implemented a Text-to-SQL generation pipeline using LangChain with schema-aware prompt engineering, SQL safety validation, automated PostgreSQL execution, Speech-to-Text (STT) input, and dynamic Angular charting.',
    impact:
      'Eliminated manual SQL reporting bottlenecks, allowing operational teams to derive real-time analytical charts directly from spoken and written inquiries.',
    tech: ['Python', 'LangChain', 'LLMs (OpenAI/Claude)', 'Speech-to-Text', 'PostgreSQL', 'Angular'],
    link: null,
    badge: 'Agentic AI & Analytics',
    mode: 'right',
    accent: 'data',
  },
  {
    number: '05',
    name: 'Apple LION',
    label: 'Enterprise API Modernization & Code Generation',
    summary:
      'Engineered an automated service generator that transformed OpenAPI/Swagger contract definitions into strongly-typed TypeScript API client libraries and validation schemas.',
    impact:
      'Removed repetitive boilerplate, enforced compile-time type safety across API boundaries, and accelerated partner integration turnaround.',
    tech: ['NestJS', 'Angular', 'PostgreSQL', 'Swagger / OpenAPI', 'TypeScript', 'REST APIs'],
    link: null,
    badge: 'Enterprise API Architecture',
    mode: 'left',
    accent: 'api',
  },
  {
    number: '06',
    name: 'Manage Services',
    label: 'Corporate Car Rental Production Platform & Admin',
    summary:
      'Independently designed, built, and launched a corporate car rental platform with custom administrative dashboards enabling non-technical business owners to manage vehicle fleets, bookings, and client inquiries without code intervention.',
    impact:
      'Configured and provisioned Hostinger Linux VPS environments with Nginx reverse proxy routing, DNS records, automated SSL certificates via Certbot, and Node.js process management for 99.9% uptime.',
    tech: ['Full Stack', 'Node.js', 'Admin Panels', 'Linux VPS', 'Nginx', 'Certbot SSL'],
    link: 'https://www.manageservices.co.in',
    badge: 'Live Production',
    mode: 'right',
    accent: 'manage',
  },
  {
    number: '07',
    name: 'Sunlink Properties',
    label: 'Commercial Real Estate Platform & CMS',
    summary:
      'Developed a commercial real estate platform with custom administrative dashboards enabling business owners to manage property catalogs, commercial listings, and client inquiries seamlessly.',
    impact:
      'Engineered complete production deployment on Linux VPS with Nginx reverse proxy, automated Certbot SSL, and high-availability Node.js backend workflows.',
    tech: ['React.js', 'Node.js', 'Admin Dashboard', 'Linux VPS', 'Nginx', 'Certbot SSL'],
    link: 'https://sunlinkproperties.com/',
    badge: 'Live Production',
    mode: 'left',
    accent: 'data',
  },
];

export const stackGroups = [
  {
    title: 'Languages & Frameworks',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'Node.js', 'Express.js', 'NestJS', 'React.js', 'Angular'],
  },
  {
    title: 'Backend & Distributed Systems',
    items: ['Microservices', 'Backend-for-Frontend (BFF)', 'Event-Driven Architecture', 'REST APIs', 'OpenAPI/Swagger', 'WebSockets', 'OAuth 2.0 (HubSpot, Zoho, Salesforce)', 'Rate Limiting'],
  },
  {
    title: 'AI & Agentic Engineering',
    items: ['AI SQL Agents (Text-to-SQL)', 'LLM Integration (OpenAI/Claude)', 'LangChain', 'RAG Systems', 'Prompt Engineering', 'Speech-to-Text (STT)', 'Sarvam AI (105B Transliteration)'],
  },
  {
    title: 'Databases & Caching',
    items: ['PostgreSQL (Recursive CTEs, Index Tuning, Composite Keys)', 'MySQL', 'MongoDB', 'Redis (Throttling, In-Memory Caching)', 'Vector Search Concepts (pgvector, ChromaDB)'],
  },
  {
    title: 'DevOps & Cloud Infrastructure',
    items: ['Docker', 'Jenkins (CI/CD Pipelines)', 'AWS S3', 'AWS SES', 'Linux VPS', 'Nginx Reverse Proxy', 'Certbot SSL'],
  },
  {
    title: 'Data Engineering & Testing',
    items: ['Web Scraping & Crawling (BeautifulSoup)', 'Unstructured Document Parsing', 'Apache Kafka', 'Vitest', 'Jest', 'Karma'],
  },
];

export const experiences = [
  {
    company: 'Techify Solutions Private Limited',
    title: 'Full Stack Developer',
    date: 'Oct 2025 – Oct 2026',
    detail:
      'Architected distributed microservices, multi-tenant authorization frameworks, and AI-powered production systems with a focus on transactional reliability, event-driven messaging, and high-throughput CRM integrations.',
    technologies: ['Node.js', 'NestJS', 'React.js', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Sarvam AI', 'AWS S3', 'AWS SES', 'Docker', 'Jenkins', 'Vitest'],
    accomplishments: [
      'Engineered an event-driven transactional outbox architecture using Apache Kafka, Node.js, and NestJS to reliably dispatch push, WhatsApp, and OTP notifications across 20+ clinical and operational events, ensuring 100% at-least-once delivery with VVIP patient identity masking.',
      'Architected multi-tenant authorization frameworks utilizing PostgreSQL recursive CTE organizational hierarchies, granular role-based access control (RBAC), and Redis-backed login rate throttling, maintaining zero tenant data leakage across enterprise healthcare and B2B SaaS deployments.',
      'Spearheaded standalone CRM integration microservices for HubSpot, Zoho, and Salesforce featuring OAuth 2.0 lifecycles, automated token refresh routines, and bi-directional webhook synchronization alongside virtualized React data tables rendering 10,000+ lead records smoothly.',
      'Optimized data-intensive healthcare reporting, conditional survey, and dashboard APIs through composite indexing, batched data loading, and query refactoring, reducing API latency by ~1 second (consistently sub-800 ms) while integrating Sarvam AI (105B) for Gujarati/English phonetic name transliteration.',
      'Automated compliance consent storage and transactional messaging via AWS S3 and AWS SES, containerizing 10+ microservices with Docker and Jenkins CI/CD pipelines backed by Vitest integration test suites.',
    ],
  },
  {
    company: 'GRT Technologies LLP',
    title: 'Full Stack Developer',
    date: 'Jun 2024 – Oct 2025',
    detail:
      'Engineered enterprise full-stack applications, RESTful microservices, and AI-driven automation pipelines for banking, retail analytics, commercial billing, and maritime charter systems.',
    technologies: ['Node.js', 'Express.js', 'NestJS', 'React.js', 'Angular', 'PostgreSQL', 'MySQL', 'Python', 'LangChain', 'OpenAPI/Swagger', 'Google Maps API', 'Karma', 'Jest'],
    accomplishments: [
      'Developed enterprise full-stack applications and RESTful microservices using Node.js, Express.js, NestJS, React.js, Angular, and PostgreSQL, delivering accessible frontend modernization components for ICICI Bank and analytics dashboards for Symphony RetailAI (SRAI) and CINDE AI replenishment systems.',
      'Automated REST API client and validation schema generation from OpenAPI/Swagger specifications for Apple (LION) enterprise integrations, eliminating manual boilerplate and accelerating partner integration turnaround across client platforms.',
      'Built automated Python and Node.js document parsing and web extraction pipelines alongside a LangChain-powered AI SQL Agent (Text-to-SQL with Speech-to-Text), reducing recruiter batch screening time by several hours per batch and enabling non-technical teams to run real-time PostgreSQL analytics.',
      'Engineered billing workflows, automated PDF invoice generation, and Razorpay payment gateway integrations across 4+ commercial platforms (Amayra Crystals, National Transafe, MedicosWorld, and StarVibe), while maintaining P6 deal-risk forecasting microservices and enforcing Google Maps API caching and quota controls for MarineCP that prevented billing overages.',
      'Mentored junior engineers on React, Angular, and Node.js asynchronous architecture, conducting technical interviews for MEAN/full-stack candidates and enforcing Karma and Jest unit test gates to sustain 80%+ code coverage across pull requests.',
    ],
  },
  {
    company: 'Reveation Technologies LLP',
    title: 'MERN Stack Intern',
    date: 'Feb 2024 – May 2024',
    detail:
      'Developed stateful e-commerce modules and refactored responsive user interfaces for client-facing web storefronts and valuation platforms.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    accomplishments: [
      'Developed stateful e-commerce modules for client storefronts (including Keshroot) using MySQL, Express.js, React.js, and Node.js, engineering persistent shopping carts, wishlists, and secure checkout payment routes.',
      'Refactored user interface modules for a jewelry valuation system, optimizing web layouts for cross-device mobile responsiveness and faster client-side rendering.',
    ],
  },
];

export const artwork = [
  {
    src: '/assets/drawing_1.jpg',
    alt: 'Black and white pencil portrait drawing of a person behind a fence.',
  },
  {
    src: '/assets/drawing_2.jpg',
    alt: 'Black and white pencil portrait illustration of a character with a stylized face.',
  },
  {
    src: '/assets/drawing_3.jpg',
    alt: 'Pencil portrait drawing of a person holding a mask and sketching with a pencil.',
  },
];

export const education = {
  year: '2019 — 2024',
  degree: 'Bachelor of Engineering in Information Technology',
  field: 'Information Technology (GTU)',
  college: 'Government Engineering College, Modasa',
};
