import type {
  Achievement,
  ArchitecturePillar,
  Experience,
  Project,
  SkillCategory,
  SocialLink,
} from '@/types/content'

export const personal = {
  name: 'Aashish Mallick',
  roles: [
    'Senior AI Engineer',
    'Solution Architect',
    'Full Stack Engineer',
    'Cloud Engineer',
    'Technical Leader',
  ],
  bio: "Senior AI Engineer | Solution Architect | Full Stack Engineer with 7+ years of software engineering experience, including leading enterprise Generative AI initiatives since Sep 2025. Experienced in architecting and delivering LLM-powered applications, AI Agents, Retrieval-Augmented Generation (RAG) platforms, and AI observability solutions on Google Cloud using Gemini, Vertex AI, and Python. Proven expertise in designing secure, scalable, and governed AI systems with Responsible AI, LLM evaluation, AI governance, and multi-model orchestration for regulated U.S. healthcare environments. Strong background in solution architecture, cloud-native systems, and full-stack engineering, with a passion for building production-ready AI platforms that deliver measurable business impact.",
  availability: 'Currently building AI platforms @ enGen Global',
  resumeUrl: '/resume.pdf',
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aashish360/', icon: 'linkedin' },
  { label: 'GitHub', url: 'https://github.com/mallick360/', icon: 'github' },
]

export const experiences: Experience[] = [
  {
    company: 'enGen Global',
    role: 'SDE-III',
    location: 'Hyderabad',
    duration: 'Sep 2025 - Present',
    bullets: [
      'Architected and implemented enterprise <b>Generative AI (GenAI) Retrieval-Augmented Generation (RAG)</b> solutions for U.S. healthcare, enabling secure, policy-driven AI assistants for individual users and collaborative teams while implementing <b>AI guardrails, prompt governance, and Responsible AI</b> practices.',
      'Built a GenAI-powered coaching platform for customer service representatives using <b>Gemini Live Audio</b>, enabling real-time conversational training, voice-based learning simulations, personalized feedback, and improved service quality and operational readiness.',
      'Designed <b>Generative AI observability</b> and <b>LLM evaluation pipelines</b> to continuously monitor hallucinations, model drift, feature drift, response quality, latency, and system reliability, ensuring consistent performance of production GenAI applications.',
      'Developed an enterprise <b>AI Agent</b> and GenAI observability framework, standardizing deployment governance, evaluation metrics, operational monitoring, performance tracking, and lifecycle management to improve reliability, traceability, and enterprise adoption of AI Agents.',
      'Collaborated with engineering, security, and business stakeholders to implement secure knowledge retrieval, fine-grained access controls, AI governance, and policy enforcement for enterprise Generative AI applications operating on sensitive healthcare data.',
      'Researched and prototyped the integration of <b>Microsoft Azure AI Services</b> with the <b>Gemini</b> ecosystem, contributing to a unified multi-model GenAI platform supporting AI Agents, LLM orchestration, secure enterprise integrations, and scalable AI solutions.',
      'Established reusable GenAI platform capabilities, evaluation frameworks, deployment standards, and engineering best practices that accelerated the delivery of governed, production-ready, enterprise-scale Generative AI applications in a regulated U.S. healthcare environment.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'Flask',
      'Docker',
      'Google Cloud Platform (GCP)',
      'Vertex AI',
      'Gemini',
      'Kafka',
      'React.js',
      'JavaScript',
      'TypeScript',
      'BigQuery',
      'Cloud SQL',
      'Firestore',
    ],
  },
  {
    company: 'Only Much Louder',
    role: 'SDE-III',
    location: 'Bangalore',
    duration: 'April 2024 - Sep 2025',
    bullets: [
      'Led development of a high-scale creator analytics microservice for Hyp.io using Django, GoLang, PostgreSQL, and React, serving <b>100+ customers with insights across 280M+ social media creators</b>.',
      'Implemented Agency Contract Management and Plan features with <b>contract workflows</b>, credits-based billing, transaction history APIs, and client- and sales-facing UIs — streamlining operations and efficiently handling <b>1000+ activities</b> simultaneously.',
      'Led <b>GDPR compliance</b> for Hypothesis by implementing encryption, access controls, and privacy-first workflows on AWS, securing <b>1000+ user</b> records and passing <b>audits with zero violations</b>.',
      'Implemented ABAC for granular 10+ view/edit permissions based on roles and context, enhancing security and flexibility across the platform.',
      'Achieved <b>sub-second data retrieval latency</b> by integrating Meta Graph API with secure OAuth 2.0, powering real-time insights and <b>post-level analytics</b> for over <b>200K creators</b>.',
      'Launched the Listicles view featuring <b>120+ AI-curated influencer lists</b> across <b>10+ categories</b> and <b>10+ locations</b>, enhancing content discovery and <b>user engagement</b>.',
      'Architected and deployed scalable, production-grade cloud applications using AWS services like EC2, ECS, RDS, and Lambda — ensuring <b>99.99%</b> uptime, <b>sub-200ms</b> response times, and secure processing of millions of API requests each month.',
      'Led and mentored a 6-member engineering team, boosting <b>sprint velocity by 30%</b>, reducing review time, and delivering high-impact features with <b>zero critical issues</b>, while fostering a culture of clean code and ownership.',
    ],
  },
  {
    company: 'Only Much Louder',
    role: 'SDE-II',
    location: 'Bangalore',
    duration: 'March 2023 - March 2024',
    bullets: [
      'Engineered a responsive frontend for the Hypothesis platform using ReactJS and MUI, delivering <b>20+ dynamic business flows</b> to streamline campaign management and creator discovery.',
      'Built and deployed an <b>SEO-optimized Next.js app</b> serving 100+ daily users, integrating Strapi CMS with custom plugins for scalable content management.',
      'Designed and maintained a reusable MUI-based design system with <b>50+ custom components</b> for consistent and scalable UI across product and marketing site.',
    ],
  },
  {
    company: "Byju's - The Learning App",
    role: 'SDE-II',
    location: 'Bangalore',
    duration: 'March 2022 - March 2023',
    bullets: [
      'Created an <b>automated PDF report generation system</b> for <b>10K student performance analytics</b> using <b>Handlebars.js</b> for templating and <b>Puppeteer</b> for rendering.',
      'Designed a <b>video feedback collection interface</b> that enables 10K users to <b>leave timestamped feedback</b> at specific moments within a video.',
      'Built the frontend interface for <b>tutor task management and scheduling</b>, enabling efficient 100+ assignment tracking and calendar-based planning.',
      'Engineered <b>CMS features</b> including <b>batch management, subjective test scheduling</b>, and <b>monthly assessment planning</b> to streamline 1000+ academic workflows.',
    ],
  },
  {
    company: '10times Internet Pvt. Ltd.',
    role: 'SDE-I',
    location: 'Noida',
    duration: 'Jan 2019 - March 2022',
    bullets: [
      'Built a <b>real-time communication platform</b> supporting <b>1000+ daily active users</b>, featuring <b>low-latency video conferencing</b> and <b>instant messaging</b> for smooth and reliable virtual collaboration.',
      'Handled a SaaS project which included CRM, 10+ third-party integrations, CMS generating <b>1000+ organic leads</b> based on user interests and location.',
      'Built a modular, <b>server-side Email Templating Engine</b> to streamline the creation of <b>100+ marketing</b> and <b>35+ product engagement emails</b>, enabling dynamic content generation and improving maintainability across campaigns.',
      'Integrated and managed <b>Stripe</b> for oDASH and maintained <b>Razorpay</b> integration, enabling 100+ of secure, seamless online transactions monthly and <b>ensuring reliable payment processing</b> for both domestic and international users.',
      'Engineered a <b>real-time chat system</b> for <b>10times.com</b> using Firebase, seamless real-time communication for 100+ users across the platform.',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'School of Innovation India from Facebook at SV.CO',
    category: 'Project',
    description:
      'Developed an immersive <b>VR experience</b> using <b>Unity</b> and <b>Meta Quest</b>, enabling users to explore a virtual city and <b>interact with 3D objects</b> in real time.',
    image: '/images/project-1.webp',
  },
  {
    title: 'Document Tracker',
    category: 'WebApp',
    description:
      'Built a <b>standalone JavaScript library</b> that enables users to <b>track and manage documents</b>, designed for seamless integration across web applications.',
    image: '/images/project-2.webp',
    stack: ['HTML5/CSS', 'Bootstrap 4', 'PHP', 'JavaScript', 'MySQL', 'Socket.io'],
  },
  {
    title: 'Echoes and Shadows',
    category: 'Windows Game',
    description:
      'Developed a <b>standalone RPG game</b> where players assume the role of an ancient island warrior, battling monsters to avenge the destruction of her village.',
    image: '/images/project-3.webp',
    stack: ['Unity3D', 'Adobe Photoshop'],
    githubUrl: 'https://github.com/aashish360/EAS/',
  },
]

const icon = (file: string) => `/images/icons/${file}`

export const skills: SkillCategory[] = [
  {
    heading: 'Languages',
    items: [
      { name: 'Python', icon: icon('python.png') },
      { name: 'JavaScript', icon: icon('javascript.png') },
      { name: 'TypeScript', icon: icon('typescript.png') },
      { name: 'GoLang', icon: icon('golang.png') },
      { name: 'SQL', icon: icon('sql.png') },
      { name: 'NoSQL', icon: icon('nosql.png') },
      { name: 'HTML5', icon: icon('html5.png') },
      { name: 'CSS3', icon: icon('css3.png') },
    ],
  },
  {
    heading: 'Frameworks',
    items: [
      { name: 'Django', icon: icon('django.png') },
      { name: 'FastAPI', icon: icon('fastapi.svg') },
      { name: 'Flask', icon: icon('flask.svg') },
      { name: 'ReactJS', icon: icon('reactjs.png') },
      { name: 'NextJS', icon: icon('nextjs.png') },
      { name: 'Redux', icon: icon('redux.png') },
      { name: 'Node.js', icon: icon('nodejs.png') },
      { name: 'Kibana', icon: icon('kibana.png') },
      { name: 'Material UI', icon: icon('mui.png') },
      { name: 'Storybook', icon: icon('storybook.png') },
    ],
  },
  {
    heading: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: icon('postgresql.png') },
      { name: 'MongoDB', icon: icon('mongodb.png') },
      { name: 'MySQL', icon: icon('mysql.png') },
      { name: 'Firebase', icon: icon('firebase.png') },
      { name: 'Firestore', icon: icon('firebase.png') },
      { name: 'Cloud SQL', icon: icon('gcp.svg') },
    ],
  },
  {
    heading: 'Cloud & DevOps',
    items: [
      { name: 'Docker', icon: icon('docker.png') },
      { name: 'GCP', icon: icon('gcp.svg') },
      { name: 'Vertex AI', icon: icon('gcp.svg') },
      { name: 'Gemini', icon: icon('gemini.svg') },
      { name: 'BigQuery', icon: icon('bigquery.svg') },
      { name: 'Kafka', icon: icon('kafka.svg') },
      { name: 'AWS VPC', icon: icon('aws_vpc.svg') },
      { name: 'AWS Load Balancer', icon: icon('aws_loadbalancer.svg') },
      { name: 'AWS Lambda', icon: icon('aws_lambda.svg') },
      { name: 'AWS SQS', icon: icon('aws_sqs.svg') },
      { name: 'AWS Cloudformation', icon: icon('aws_cloudformation.svg') },
      { name: 'AWS EC2', icon: icon('aws_ec2.svg') },
      { name: 'AWS ECS', icon: icon('aws_ecs.svg') },
      { name: 'AWS RDS', icon: icon('aws_rds.svg') },
      { name: 'AWS Cloudwatch', icon: icon('aws_cloudwatch.svg') },
      { name: 'AWS API Gateway', icon: icon('aws_apigateway.svg') },
      { name: 'AWS Amplify', icon: icon('aws_amplify.svg') },
    ],
  },
  {
    heading: 'Tools',
    items: [
      { name: 'Git', icon: icon('git.png') },
      { name: 'Github', icon: icon('github.png') },
      { name: 'Postman', icon: icon('postman.png') },
      { name: 'Figma', icon: icon('figma.png') },
    ],
  },
]

export const achievements: Achievement[] = [
  { value: 7, suffix: '+', label: 'Years of Engineering Experience' },
  { value: 280, suffix: 'M+', label: 'Creators Analyzed (Hyp.io)' },
  { value: 100, suffix: '+', label: 'Enterprise Customers Served' },
  { value: 200, suffix: 'K+', label: 'Creators — Real-Time Analytics' },
  { value: 99.99, suffix: '%', label: 'Cloud Infrastructure Uptime' },
  { value: 30, suffix: '%', label: 'Sprint Velocity Improvement' },
]

export const architecturePillars: ArchitecturePillar[] = [
  {
    title: 'GenAI, RAG & AI Agents',
    description:
      'Enterprise-grade generative AI systems — from retrieval pipelines to autonomous agents — built for regulated, high-stakes environments.',
    items: [
      'Retrieval-Augmented Generation (RAG)',
      'AI Agents & orchestration',
      'Gemini, Vertex AI & Azure AI Services',
      'LLM evaluation & observability',
      'AI guardrails & prompt governance',
      'Responsible AI practices',
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Service-oriented backends powering high-scale, multi-tenant platforms.',
    items: [
      'Python — FastAPI, Flask, Django',
      'GoLang microservices',
      'Node.js',
      'ABAC permission systems',
      'REST API design',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Production-grade cloud architecture across two major providers.',
    items: [
      'GCP — Vertex AI, BigQuery, Cloud SQL, Firestore',
      'AWS — EC2, ECS, RDS, Lambda, API Gateway',
      'Docker containers',
      'Infrastructure as Code (CloudFormation)',
    ],
  },
  {
    title: 'Data & Messaging',
    description: 'Data systems and event streaming underpinning real-time features.',
    items: ['Apache Kafka', 'PostgreSQL, MongoDB, MySQL', 'Firebase & Firestore', 'AWS SQS'],
  },
  {
    title: 'Frontend Engineering',
    description: 'Design systems and interfaces used by real customers at scale.',
    items: ['React & Next.js', 'TypeScript', 'Redux', 'Material UI design systems (50+ components)'],
  },
  {
    title: 'Observability, Security & Compliance',
    description: 'Governance and monitoring for systems handling sensitive data.',
    items: [
      'GDPR compliance & privacy-first workflows',
      'GenAI observability (hallucination & drift monitoring)',
      'AWS CloudWatch & Kibana',
      'Zero-violation security audits',
    ],
  },
]

export const emailjsConfig = {
  serviceId: 'service_g3lsmzq',
  templateId: 'template_ygoyp4w',
  publicKey: '5aXvd9HhtXdrv97IB',
}
