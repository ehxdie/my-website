// All site content in one place. Facts come from the CV (updated Oct 2026), the live demos and the project repos.

export const profile = {
  name: 'Edidiong Ephraim',
  role: 'Software Engineer · Lead Backend',
  location: 'Abuja, Nigeria · Remote',
  email: 'ephraimedy@gmail.com',
  cv: '/Ephraim-Edidiong-CV.pdf', // downloaded by the CV buttons
  github: 'https://github.com/ehxdie',
  linkedin: 'https://www.linkedin.com/in/edidiong-ephraim/',
  formAction: 'https://getform.io/f/d04d86fd-8da9-4703-b5a2-32ead47f7d91',
};

export const stack = [
  'TypeScript', 'Rust', 'Haskell', 'Solidity', 'C#', 'Node.js', 'React', 'Vue', 'Next.js', 'PostgreSQL',
  'Redis', 'Prisma', 'Docker', 'Stripe', 'Twilio', 'Sum-Sub', 'LlamaIndex', 'Pinecone', 'MQL5', 'GitHub Actions',
];

export const sirius = {
  name: 'Sirius',
  tagline: 'An automated trading EA that researches, sizes and runs its own trades.',
  summary:
    'A full trading system, from research to live execution: a MetaTrader 5 Expert Advisor streams market data and account state into a TypeScript engine, which runs six systematic strategies across forex, gold and the Nasdaq, sizes every position from its stop, checks it against hard risk limits, and sends the order back to the EA. A React dashboard shows the account, the risk and every decision the engine makes.',
  stats: [
    { value: '10.5M', label: 'candles of 5-minute data, 2006 to today' },
    { value: '6', label: 'strategies kept, after testing many published ideas and an ML model' },
    { value: '1.22', label: 'profit factor over 4,200+ backtested trades, with trading costs doubled' },
  ],
  built: [
    'MQL5 Expert Advisor that streams bars, account, positions and deals, and executes queued orders idempotently',
    'Backtester with realistic costs, out-of-sample checks and Monte-Carlo forward-test limits',
    'Live engine with a risk guard (daily and maximum loss floors, open-risk cap), news guard and kill switch',
    'Research pipeline: data cleaning, out-of-sample tests and live-cost stress tests before anything ships',
    'Dashboard with live risk status, strategy results, order log and slippage tracking',
  ],
  stackList: ['TypeScript', 'Node.js', 'Fastify', 'Prisma', 'PostgreSQL', 'Docker', 'MQL5', 'React', 'Tailwind', 'socket.io'],
  status: 'Forward testing on a demo account · private repository',
  images: [
    { src: '/work/sirius-engine.jpg', alt: 'Sirius dashboard: automated trading controls, kill switch, orders sent to MT5 and the engine log' },
    { src: '/work/sirius-growth.jpg', alt: 'Sirius backtest: account growth from closed trades and the forward-test limits used to judge live results' },
  ],
};

export interface Work { name: string; kind: string; year: string; summary: string; points: string[]; stack: string[]; link?: string; repo?: string; image: string }

export const clientWork: Work[] = [
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
    name: 'Blockchain voting system',
    kind: 'MSc thesis',
    year: '2023',
    summary: 'Secure electronic voting on Ethereum: a Solidity contract on the Sepolia testnet, MetaMask sign-in, tested with Chai and Mocha.',
    points: [],
    stack: ['Solidity', 'React', 'MetaMask'],
    link: 'https://ehxdie.github.io/voting-application/',
    repo: 'https://github.com/ehxdie/voting-application',
    image: '/work/voting.jpg',
  },
];

export interface Role { company: string; title: string; dates: string; place: string; points: string[]; stack: string[] }

export const experience: Role[] = [
  {
    company: 'AB Investments',
    title: 'Software Engineer / Web Scraper (contract)',
    dates: 'Apr 2026 – present',
    place: 'Remote',
    points: [
      'Built PMOS, a Kanban-style property operations system with role-based access for leasing, maintenance, unit turns and tenant escalations',
      '“Driving for Dollars” lead pipeline: ingests listings, geocodes addresses, queries county GIS parcels and skip-traces owners into de-duplicated lead sheets',
      'Discord bot that logs team messages and property leads straight into a master Google Sheet',
      'Automated web scrapers and market lead-generation tools for real-estate data',
    ],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Express', 'Discord.js', 'Google Sheets API', 'Cheerio'],
  },
  {
    company: 'TM Labs',
    title: 'Lead Backend Engineer (contract)',
    dates: 'Apr 2025 – Aug 2026',
    place: 'Remote',
    points: [
      'Built a USD→NGN virtual card system funding naira wallets from abroad with Stripe onRamp',
      'Led end-to-end KYC with Sum-Sub, automating regulated onboarding',
      'Stripe checkout and webhooks for eSIM sales, plus provisioning, top-ups and usage tracking',
      'Launched the core payment app, migrating users from a legacy card platform with no disruption to funding',
    ],
    stack: ['TypeScript', 'Postgres', 'Prisma', 'Docker', 'Stripe', 'Sum-Sub', 'Yellowcard', 'Fern'],
  },
  {
    company: 'Ajarra',
    title: 'Lead Backend Engineer (contract)',
    dates: 'May – Nov 2025',
    place: 'Remote',
    points: [
      'Google, Apple and Facebook sign-in with JWT, and Twilio SMS OTP for sign-up and sensitive actions',
      'Moved real-time chat from PostgreSQL to Redis Pub/Sub for lower latency',
      'Escrow and automated vendor payouts with Flutterwave and Paystack',
      'Admin dashboard with analytics and contract management; moved the backend to a VPS with GitHub Actions CI/CD',
    ],
    stack: ['TypeScript', 'Prisma', 'Postgres', 'Redis', 'Dojah', 'Flutterwave', 'Paystack'],
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
    dates: 'Jan – Oct 2024',
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

