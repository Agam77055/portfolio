/* =============================================================
   Pit-Wall portfolio content — resume-accurate, no metric numbers
   ============================================================= */

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Profile' },
  { id: 'experience', label: 'Career' },
  { id: 'setup', label: 'Setup' },
  { id: 'research', label: 'R&D' },
  { id: 'podium', label: 'Podium' },
  { id: 'projects', label: 'Builds' },
  { id: 'contact', label: 'Pit Radio' },
]

export const RESUME_URL = '/assets/resume/Agam_Singh_Resume_SWE.pdf'

export const SOCIALS = {
  github: 'https://github.com/Agam77055',
  linkedin: 'https://www.linkedin.com/in/agam-harpreet-singh',
  leetcode: 'https://leetcode.com/u/Agam770/',
  email: 'agamhsingh@gmail.com',
  phone: '+91 982-177-2005',
}

export const HERO_META = [
  { label: 'Driver', value: 'Agam Harpreet Singh' },
  { label: 'Discipline', value: 'AI · Full-Stack · <strong>F1</strong>' },
  { label: 'Constructor', value: 'IIT Jodhpur · BTech AI & DS' },
  { label: 'Status', value: '<strong>Open to Work</strong>' },
]

/* roles cycled under the name in the hero */
export const ROLES = [
  'SOFTWARE ENGINEER',
  'AI / ML RESEARCHER',
  'FULL-STACK DEVELOPER',
  'SYSTEMS & HPC',
]

export const TICKER = [
  'PYTHON', 'PYTORCH', 'TENSORFLOW', 'NEXT.JS', 'REACT', 'TYPESCRIPT',
  'NODE.JS', 'NESTJS', 'CUDA', 'DOCKER', 'MONGODB', 'KUBERNETES', 'FERRARI 🏎️',
]

/* ---------------- experience (Career Mode) ---------------- */
export interface Experience {
  round: string
  team: string
  role: string
  type: string
  period: string
  status?: 'LIVE'
  fastestLap?: boolean
  summary: string
  tech: string[]
  accent: string
}

export const EXPERIENCES: Experience[] = [
  {
    round: 'R04',
    team: 'MongoDB',
    role: 'Software Engineer Intern',
    type: 'Kubernetes Team · Gurgaon · On-site',
    period: 'May 2026 — Present',
    status: 'LIVE',
    accent: '#00ED64',
    summary:
      'Prototyping agentic-AI tooling for cloud-native development — LLM-driven agents that automate and streamline infrastructure workflows across the Kubernetes team.',
    tech: ['Kubernetes', 'Agentic AI', 'LLMs', 'Go'],
  },
  {
    round: 'R03',
    team: 'AfterQuery',
    role: 'SDE / Research Contractor',
    type: 'YC W25 · Remote',
    period: 'Oct 2025 — Jun 2026',
    fastestLap: true,
    accent: '#ff6a00',
    summary:
      'Engineered adversarial test suites that surface failure modes in frontier LLMs (incl. Claude Opus 4.8) on real-world SWE tasks, and benchmarked AI solutions to ML-competition problems against structured rubrics.',
    tech: ['LLM Eval', 'Python', 'Adversarial', 'Rubrics'],
  },
  {
    round: 'R02',
    team: 'CarSaarthi',
    role: 'SDE Intern',
    type: 'Remote',
    period: 'Sep 2025 — Dec 2025',
    accent: '#3b82f6',
    summary:
      'Architected the full stack — NestJS backend + React Native (Expo) app — with JWT / Apple / Google sign-in, SecureStore, OTP login, and a SaarthiCoin wallet for a clean cross-screen experience.',
    tech: ['NestJS', 'React Native', 'Expo', 'JWT'],
  },
  {
    round: 'R01',
    team: 'Acro Edge Systems',
    role: 'SDE Intern',
    type: 'Noida · Remote',
    period: 'May 2025 — Aug 2025',
    accent: '#22d3ee',
    summary:
      'Built a TypeScript engine that backtests historical NIFTY data via the Zerodha Kite API and streams realtime quotes over WebSockets, plus an MCP server exposing live market data to downstream AI apps.',
    tech: ['TypeScript', 'WebSockets', 'MCP', 'Zerodha API'],
  },
]

/* ---------------- setup sheet (skills, no numbers) ---------------- */
export interface StackCard {
  name: string
  compound: 'soft' | 'medium' | 'hard' | 'inter' | 'wet' | 'dev'
  label: string
  pills: string[]
}

export const STACK: StackCard[] = [
  { name: 'Languages', compound: 'soft', label: 'Soft Compound', pills: ['Python', 'C', 'C++', 'CUDA', 'Java', 'TypeScript', 'JavaScript', 'Verilog'] },
  { name: 'Front End', compound: 'medium', label: 'Medium', pills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Figma', 'HTML5'] },
  { name: 'Back End', compound: 'hard', label: 'Hard Compound', pills: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'Redis'] },
  { name: 'AI / ML & Data', compound: 'inter', label: 'Intermediate', pills: ['PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'OpenCV'] },
  { name: 'Systems & DevOps', compound: 'wet', label: 'Wet', pills: ['OpenMP', 'Docker', 'GitHub Actions', 'GCP', 'Azure', 'Linux / Bash'] },
  { name: 'Tools', compound: 'dev', label: 'Dev Compound', pills: ['VS Code', 'Git', 'Jupyter', 'Linux'] },
]

/* devicon classes for the Setup-section background collage */
export const TECH_COLLAGE = [
  'devicon-python-plain', 'devicon-react-original', 'devicon-typescript-plain', 'devicon-nextjs-plain',
  'devicon-pytorch-original', 'devicon-tensorflow-original', 'devicon-cplusplus-plain', 'devicon-c-plain',
  'devicon-nodejs-plain', 'devicon-nestjs-plain', 'devicon-mongodb-plain', 'devicon-postgresql-plain',
  'devicon-redis-plain', 'devicon-docker-plain', 'devicon-kubernetes-plain', 'devicon-git-plain',
  'devicon-githubactions-plain', 'devicon-googlecloud-plain', 'devicon-azure-plain', 'devicon-linux-plain',
  'devicon-pandas-plain', 'devicon-numpy-plain', 'devicon-scikitlearn-plain', 'devicon-opencv-plain',
  'devicon-tailwindcss-plain', 'devicon-vitejs-plain', 'devicon-figma-plain', 'devicon-java-plain',
  'devicon-javascript-plain', 'devicon-express-original', 'devicon-vercel-original', 'devicon-bash-plain',
]

/* ---------------- research (R&D) ---------------- */
export interface Paper {
  title: string
  authors: string
  venue: string
  status: 'ACCEPTED' | 'UNDER REVIEW'
  tags: string[]
  accent: string
}

export const PAPERS: Paper[] = [
  {
    title: 'DyGMIS — Fast & Scalable Fully Dynamic MIS Maintenance on Large Evolving Graphs',
    authors: 'P. Nijhara, A. Trivedi, A. H. Singh',
    venue: 'ICPP 2026',
    status: 'UNDER REVIEW',
    tags: ['Parallel', 'OpenMP', 'Graphs'],
    accent: '#06d96e',
  },
  {
    title: 'Fast & Accurate MIS on Dynamic Graphs',
    authors: 'A. H. Singh, N. Sharma, A. Trivedi',
    venue: 'IEEE HiPC 2025',
    status: 'ACCEPTED',
    tags: ['HPC', 'Dynamic Graphs', 'CUDA'],
    accent: '#00d2be',
  },
  {
    title: 'Efficient Parallel Algorithms for Dynamic Percolation Centrality',
    authors: 'P. Nijhara, A. H. Singh',
    venue: 'ICPP 2025',
    status: 'ACCEPTED',
    tags: ['Centrality', 'HPC', 'Algorithms'],
    accent: '#ffd400',
  },
]

export const LAB = 'SPADE Lab · IIT Jodhpur · Prof. Dip Sankar Banerjee'

/* ---------------- podium (achievements) ---------------- */
export interface Achievement {
  place: string
  sub: string
  trophy: 'monaco' | 'monza' | 'cap'
  event: string
  desc: string
  tags: string[]
  year: string
  cat: string
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    place: '3', sub: 'RD', trophy: 'monza',
    event: 'Predictathon',
    desc: 'Out of 650+ teams in a national data-science hackathon — built a deepfake detector with EfficientNetB0, CNNs & Transformers distinguishing real from manipulated media.',
    tags: ['Deep Learning', 'EfficientNet', 'Transformers'],
    year: '2025', cat: 'Data Science',
  },
  {
    place: '3', sub: 'RD', trophy: 'monaco',
    event: 'Inter IIT Tech Meet 13.0',
    desc: "Podium across all 23 IITs at IIT Bombay in ISRO's Data Analytics High-Prep Challenge — analysing Chandrayaan-2 XRF spectral data to map lunar surface elements using Kriging, ML, and 3D surface mapping.",
    tags: ['ISRO Data', 'Kriging', '3D Mapping', 'Team of 8'],
    year: '2024', cat: 'Lunar Research',
  },
  {
    place: '★', sub: 'LEAD', trophy: 'cap',
    event: 'AI & Automation Coordinator',
    desc: 'Leading 60+ students at the Robotics Society, IIT Jodhpur — organising workshops and events reaching 300+ participants.',
    tags: ['Leadership', 'Robotics Society', 'Community'],
    year: '2025–2026', cat: 'Robotics Society',
  },
  {
    place: '★', sub: 'LEAD', trophy: 'cap',
    event: 'Overall Coordinator',
    desc: "Overall Coordinator at the Students' International Relations Cell, IIT Jodhpur — leading the Web Development and Media team.",
    tags: ['Leadership', 'Web Dev', 'Media'],
    year: '2025–2026', cat: "Int'l Relations Cell",
  },
]

/* ---------------- builds (projects, no metric numbers) ---------------- */
export interface Project {
  build: string
  cat: string
  title: string
  desc: string
  img?: string
  imgTop?: boolean
  video?: boolean
  trophy?: string
  tech: string[]
  stats: { lbl: string; val: string; tone?: 'green' | 'yellow' }[]
  links: { label: string; href: string; primary?: boolean }[]
}

export const PROJECTS: Project[] = [
  {
    build: 'BUILD 01',
    cat: 'Deep Learning Course Project',
    title: 'GreedyViG-CIFAR',
    desc: 'Diagnosed four compounding bugs in a Vision-GNN pipeline — including a silent no-op that disabled all graph convolutions — then redesigned the stem with learnable soft-threshold graph connectivity, SE attention and dual max+mean aggregation for a major top-1 lift on CIFAR-100.',
    img: '/assets/images/greedyvig.jpg',
    tech: ['PyTorch', 'Vision GNN', 'SE Attention', 'CIFAR-100'],
    stats: [
      { lbl: 'Type', val: 'Research / DL' },
      { lbl: 'Focus', val: 'Graph Convolutions' },
    ],
    links: [
      { label: 'Read Report →', href: '/assets/reports/GreedyViG.pdf', primary: true },
      { label: 'Watch Video', href: 'https://www.youtube.com/watch?v=HXRYf8B09wQ' },
      { label: 'GitHub', href: 'https://github.com/Agam77055/GreedyViG-CIFAR100' },
    ],
  },
  {
    build: 'BUILD 02',
    cat: 'Computer Vision Course Project',
    title: 'HeteroVisionGNN',
    desc: 'A cross-modal heterogeneous graph neural network for weakly-supervised crime anomaly detection on UCF-Crime — grounding DINOv2 visual entities against RoBERTa-extracted report entities through a GATv2 + Heterogeneous Graph Transformer pipeline with a multiple-instance-learning ranking objective.',
    img: '/assets/images/herovisiongnn.png',
    imgTop: true,
    tech: ['PyTorch', 'DINOv2', 'RoBERTa', 'HGT'],
    stats: [
      { lbl: 'Type', val: 'Research / CV' },
      { lbl: 'Benchmark', val: 'UCF-Crime' },
    ],
    links: [{ label: 'Read Report →', href: '/assets/reports/HeteroVisionGNN.pdf', primary: true }],
  },
  {
    build: 'BUILD 03',
    cat: 'AI · NLP · Published',
    title: 'ChatSphere',
    desc: 'An NLP chatbot framework built from scratch in Python for college environments — custom TF-IDF vectorisation, a Random-Forest intent model, and containerised deployment. Published on Ready Tensor.',
    img: '/assets/images/Chat-Sphere.png',
    tech: ['Python', 'Flask', 'NLP', 'Docker', 'React'],
    stats: [
      { lbl: 'Type', val: 'ML Project' },
    ],
    links: [
      { label: 'Live Demo →', href: 'https://prml-project-tan.vercel.app', primary: true },
      { label: 'GitHub', href: 'https://github.com/Agam77055/ChatSphere' },
      { label: 'Paper', href: 'https://app.readytensor.ai/publications/pVfa3uz9TrrB' },
    ],
  },
  {
    build: 'BUILD 04',
    cat: 'Full-Stack · E-commerce',
    title: 'NextCommerce',
    desc: 'A modern e-commerce platform with an intelligent recommendation engine based on purchase history and recently-viewed items — cart management, Google OAuth, and a fully responsive Next.js front-end.',
    img: '/assets/images/Next-Commerce.png',
    tech: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Express'],
    stats: [
      { lbl: 'Stack', val: 'MERN + TS' },
      { lbl: 'Auth', val: 'Google OAuth' },
    ],
    links: [
      { label: 'Live Demo →', href: 'https://ecommerce-website-seven-green.vercel.app', primary: true },
      { label: 'GitHub', href: 'https://github.com/Agam77055/NextCommerce' },
    ],
  },
  {
    build: 'BUILD 05',
    cat: 'Deep Learning · Computer Vision',
    title: 'Deepfake Detection',
    desc: 'An image-classification system on the EfficientNetB0 backbone with transfer learning, distinguishing real from manipulated media. Took the podium against a national field at Predictathon.',
    img: '/assets/images/Deepfake.png',
    trophy: '🏆 3rd · Predictathon',
    tech: ['Python', 'TensorFlow', 'EfficientNetB0', 'Transfer Learning'],
    stats: [
      { lbl: 'Architecture', val: 'EfficientNetB0' },
      { lbl: 'Award', val: 'Bronze · 2025', tone: 'yellow' },
    ],
    links: [{ label: 'GitHub →', href: 'https://github.com/Agam77055/Deepfake-Detection-Model', primary: true }],
  },
  {
    build: 'BUILD 06',
    cat: 'Space Tech · ML · ISRO',
    title: 'Chandrayaan-2 Analysis',
    desc: "A data-analysis platform for ISRO's Chandrayaan-2 XRF spectral data — Kriging interpolation, 3D lunar surface mapping, and detection of Calcium & Titanium signatures. Podium across all 23 IITs at Inter IIT Tech Meet 13.0.",
    img: '/assets/images/ISRO.png',
    trophy: '🏆 3rd · Inter IIT',
    tech: ['Python', 'Machine Learning', 'Statistical Analysis', '3D Visualisation'],
    stats: [
      { lbl: 'Field', val: 'Lunar Research' },
      { lbl: 'Award', val: 'Bronze · 2024', tone: 'yellow' },
    ],
    links: [
      { label: 'Read Report →', href: 'https://drive.google.com/file/d/1hggjVvJFMUwDth0YVdie0aq7KhXaJgKZ/view?usp=sharing', primary: true },
      { label: 'Problem Statement', href: 'https://drive.google.com/file/d/1oWBa8j3_s7mD7AKZawfo1Rfe-Zlbc9SL/view?usp=sharing' },
    ],
  },
]
