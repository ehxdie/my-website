// All site content in one place. Facts come from the CV (Oct 2026), the live demos and the project repos.

export const profile = {
  name: 'Edidiong Ephraim',
  role: 'Lead Software Engineer',
  location: 'Nigeria · working remotely',
  email: 'ephraimedy@gmail.com',
  cv: 'https://docs.google.com/document/d/1_H8IMPC_mGm9nt3ne3XLF5OHlY96AnzaARMXE4HGmLE/edit?usp=sharing',
  github: 'https://github.com/ehxdie',
  linkedin: 'https://www.linkedin.com/in/edidiong-ephraim/',
  formAction: 'https://getform.io/f/d04d86fd-8da9-4703-b5a2-32ead47f7d91',
};

export const stack = [
  'TypeScript', 'Go', 'Rust', 'Haskell', 'Solidity', 'Node.js', 'React', 'Vue', 'Next.js', 'PostgreSQL',
  'Redis', 'Prisma', 'Docker', 'Stripe', 'Twilio', 'Sum-Sub', 'LlamaIndex', 'Pinecone', 'MQL5', 'GitHub Actions',
];

export const sirius = {
  name: 'Sirius',
  tagline: 'An automated trading platform built to pass prop-firm challenges.',
  summary:
    'A full system, from research to live execution: a MetaTrader 5 bridge streams market data and account state into a TypeScript server, which runs six systematic strategies, checks every order against the prop firm’s rules, and places trades through the EA. A React dashboard shows the account, the rules and every decision the engine makes.',
  stats: [
    { value: '10.5M', label: 'candles of 5-minute data, 2006 to today' },
    { value: '6', label: 'strategies kept, after testing many published ideas and an ML model' },
    { value: '80%', label: 'simulated FTMO 1-Step pass rate at realistic costs' },
  ],
  built: [
    'MQL5 Expert Advisor that streams bars, account, positions and deals, and executes queued orders idempotently',
    'Backtester with exact FTMO 1-Step / 2-Step rules, rolling starts and Monte-Carlo forward-test limits',
    'Live engine with a risk guard (daily and maximum loss floors, open-risk cap), news guard and kill switch',
    'Research pipeline: data cleaning, out-of-sample tests and live-cost stress tests before anything ships',
    'Dashboard with live FTMO rule status, strategy results, order log and slippage tracking',
  ],
  stackList: ['TypeScript', 'Node.js', 'Fastify', 'Prisma', 'PostgreSQL', 'Docker', 'MQL5', 'React', 'Tailwind', 'socket.io'],
  status: 'Forward testing on a demo account · private repository',
  images: [
    { src: '/work/sirius-ftmo.jpg', alt: 'Sirius dashboard: live FTMO rule status with daily loss, risk cap and profit target meters' },
    { src: '/work/sirius-backtest.jpg', alt: 'Sirius backtest: FTMO pass rates at every risk level, account growth and forward-test limits' },
  ],
};

export interface Work { name: string; kind: string; year: string; summary: string; points: string[]; stack: string[]; link?: string; repo?: string; image: string }

export const clientWork: Work[] = [
  {
    name: 'Governance Hub',
    kind: 'Client demo · GRC platform',
    year: '2026',
    summary: 'A governance, risk and compliance hub for a payments group: KPIs, regulatory obligations, admin-access reviews, gaps and escalations, with a full audit log.',
    points: ['Five roles, from Super Admin to Auditor', 'Microsoft Entra ID sign-in with number-matching MFA (simulated)', 'Leaver and expired-access detection with escalation deadlines'],
    stack: [],
    link: 'https://governance-hub-demo.vercel.app',
    image: '/work/governance.jpg',
  },
  {
    name: 'Afro Genie Games',
    kind: 'Client demo · consumer product',
    year: '2026',
    summary: 'Daily puzzle games for Afro Genie, a platform for African song lyrics and AI translations: four new puzzles every day on lyrics, artists, groups and trivia.',
    points: ['Built into the existing Afro Genie site and navigation', 'Puzzles reset at local midnight', 'Genre browsing across Afrobeats, Amapiano, Highlife and more'],
    stack: [],
    link: 'https://afro-genie-games-demo.vercel.app',
    image: '/work/afrogenie.jpg',
  },
  {
    name: 'Danak Logistics',
    kind: 'Client website',
    year: '2026',
    summary: 'Company website for a Nigerian marine logistics and offshore support firm, covering logistics, marine services, procurement and facilities management.',
    points: ['Animated, SEO-ready multi-page site', 'Contact form wired to email', 'Fully responsive'],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion'],
    link: 'https://danak-ten.vercel.app',
    repo: 'https://github.com/ehxdie/Danak',
    image: '/work/danak.jpg',
  },
  {
    name: 'Phone OTP Verification',
    kind: 'Client demo · auth flow',
    year: '2026',
    summary: 'A phone verification flow: country picker, 6-digit SMS code and a three-step progress UI, backed by a documented API.',
    points: ['Twilio Verify on an Express API', 'Helmet, request logging and Swagger docs', 'Country-aware number input'],
    stack: ['React', 'Vite', 'TypeScript', 'Express', 'Twilio'],
    link: 'https://otp-verification-smoky.vercel.app',
    repo: 'https://github.com/ehxdie/Otp_verification',
    image: '/work/otp.jpg',
  },
];

export const projects: Work[] = [
  {
    name: 'Ragie AI Slack Connector',
    kind: 'RAG over Slack',
    year: '2025',
    summary: 'Retrieval-augmented answers over Slack channels: messages are stored and chunked with the Ragie API, and Groq generates the responses.',
    points: [],
    stack: ['Vue', 'TypeScript', 'Node.js', 'Postgres', 'Docker', 'AWS'],
    link: 'https://ragie-ai-slack-connector.vercel.app/',
    repo: 'https://github.com/ehxdie/ragie-ai-slack-connector',
    image: '/work/ragie.jpg',
  },
  {
    name: 'Copy-Chain',
    kind: 'VS Code extension',
    year: '2025',
    summary: 'Chained copy and clipboard buffers for VS Code, written in Haskell and compiled to WebAssembly.',
    points: [],
    stack: ['Haskell', 'WebAssembly', 'TypeScript'],
    repo: 'https://github.com/ehxdie/haskell-copy-extension',
    image: '',
  },
  {
    name: 'FitFlex',
    kind: 'Full-stack app',
    year: '2023',
    summary: 'Custom workout plans with a Rust (Warp) REST backend on MongoDB, all in Docker.',
    points: [],
    stack: ['React', 'Rust', 'Warp', 'MongoDB', 'Docker'],
    link: 'https://fitflex-ten.vercel.app/',
    repo: 'https://github.com/ehxdie/MERN-CRUD--workout-app-',
    image: '/work/fitflex.jpg',
  },
  {
    name: 'Blockchain voting',
    kind: 'MSc thesis',
    year: '2023',
    summary: 'Secure electronic voting on Ethereum: a Solidity contract on the Sepolia testnet, MetaMask sign-in, tested with Chai and Mocha.',
    points: [],
    stack: ['Solidity', 'React', 'MetaMask'],
    link: 'https://ehxdie.github.io/voting-application/',
    repo: 'https://github.com/ehxdie/voting-application',
    image: '/work/voting.jpg',
  },
  {
    name: 'Real-estate scraper',
    kind: 'Data tool',
    year: '2026',
    summary: 'Collects Craigslist property listings, enriches them from detail pages, filters by price and type, and exports CSV and JSON.',
    points: [],
    stack: ['Python'],
    repo: 'https://github.com/ehxdie/real_estate_scraper',
    image: '',
  },
];

export interface Role { company: string; title: string; dates: string; place: string; points: string[]; stack: string[] }

export const experience: Role[] = [
  {
    company: 'TM-Labs',
    title: 'Lead Software Engineer (contract)',
    dates: 'Apr 2025 – present',
    place: 'Remote',
    points: [
      'Built a USD→NGN virtual card system funding naira wallets from abroad, with Stripe, Yellowcard and Fern',
      'Led end-to-end KYC with Sum-Sub, automating regulated onboarding',
      'Stripe checkout and webhooks for eSIM sales, plus provisioning, top-ups and usage tracking',
      'Migrated users from a legacy card platform to the main app with no disruption to funding',
    ],
    stack: ['TypeScript', 'Go', 'Postgres', 'Prisma', 'Docker', 'Stripe', 'Sum-Sub'],
  },
  {
    company: 'Ajarra',
    title: 'Lead Software Engineer (contract)',
    dates: 'May – Nov 2025',
    place: 'Remote',
    points: [
      'Google, Apple and Facebook sign-in with JWT, and Twilio SMS OTP for sign-up and sensitive actions',
      'Moved real-time chat from PostgreSQL to Redis Pub/Sub for lower latency',
      'Escrow and automated vendor payouts with Flutterwave and Paystack',
      'Moved the backend from Render to a VPS with GitHub Actions CI/CD',
    ],
    stack: ['TypeScript', 'Prisma', 'Postgres', 'Redis', 'Flutterwave', 'Paystack'],
  },
  {
    company: 'Loopit',
    title: 'Full Stack Developer (contract)',
    dates: 'Oct 2024 – Apr 2025',
    place: 'Remote',
    points: [
      'RAG over Slack with Create-llama and a Pinecone vector store (70% faster queries)',
      'Gemini embeddings in LlamaIndex for Slack messages (60% better retrieval accuracy)',
      'React and TypeScript interface for exploring the indexed data',
    ],
    stack: ['TypeScript', 'React', 'LlamaIndex', 'Pinecone'],
  },
  {
    company: 'Norm',
    title: 'Full Stack Developer',
    dates: 'Jan 2024 – present',
    place: 'Remote',
    points: [
      'Moved the backend from Prisma to Flask (30% faster responses)',
      'New data models that cut data errors and improved reliability',
      'Canvas editor with fabric.js for animated, interactive graphics',
    ],
    stack: ['TypeScript', 'React', 'Flask', 'Postgres'],
  },
  {
    company: 'Decorp',
    title: 'Software Engineer (contract)',
    dates: 'Mar – Jun 2024',
    place: 'Remote',
    points: ['Self-hosted MedusaJS e-commerce on Coolify, halving hosting cost', 'Tuned PostgreSQL and Redis; large concurrent file uploads'],
    stack: ['Medusa', 'Next.js', 'Postgres', 'Redis', 'Docker'],
  },
  {
    company: 'The Ginger Collective',
    title: 'Full Stack Developer',
    dates: 'Jan 2023 – Jan 2024',
    place: 'Lagos',
    points: ['Shipped several full-stack apps with payments, geolocation and SMS integrations', 'Introduced Agile/Scrum; schema redesign raised backend throughput 22%'],
    stack: ['React', 'Next.js', 'MongoDB', 'Postgres', 'Prisma'],
  },
];

export const education = [
  { degree: 'MSc Computer Science, Cybersecurity', school: 'Baze University, Abuja', years: '2022 – 2023', grade: '4.2 / 5.0' },
  { degree: 'BSc Industrial Physics', school: 'Covenant University, Ota', years: '2017 – 2021', grade: '4.18 / 5.0' },
];

export const certifications = [
  { name: 'Google IT Automation with Python', href: 'https://www.coursera.org/account/accomplishments/professional-cert/NWYNCEWCJ7ED' },
  { name: 'Learn Ethical Hacking from Scratch', href: 'https://www.udemy.com/certificate/UC-b785736e-4127-4189-a183-ae0f1b4ea19e/' },
  { name: 'JavaScript Algorithms and Data Structures', href: 'https://www.freecodecamp.org/certification/fccae603b21-2c08-4c5d-ac60-570ee44d7929/javascript-algorithms-and-data-structures' },
  { name: 'Front End Development Libraries', href: 'https://www.freecodecamp.org/certification/fccae603b21-2c08-4c5d-ac60-570ee44d7929/front-end-development-libraries' },
];
