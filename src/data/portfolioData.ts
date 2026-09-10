import { Capability, ExperienceItem, Project, Certification } from '../types';

export const PERSONAL_INFO = {
  name: "Anushka Nath",
  title: "Commercial Strategy & Cybersecurity Assurance",
  tagline: "Commercial Strategy, Cybersecurity Assurance & Technology Operations",
  superHighlight: "I enjoy unconstrained exploration of complex problems, bringing together commercial strategy, cybersecurity compliance, and practical technology execution.",
  summary: "₹3 Cr annual portfolio, 65+ engagements — spearheaded commercial strategy, structured delivery workflows from scratch, and fostered alignment across auditors, sales, and client teams to optimise outcomes. Currently pursuing PGP TBM at Masters' Union.",
  oneLiner: "Spearheaded a ₹3 Cr audit & advisory portfolio across 65+ enterprise engagements at Crowe Advisory. Currently building 0-to-1 technology initiatives at Masters' Union.",
  bio: "I bridge commercial strategy, enterprise cybersecurity assurance, and technical execution. At Crowe Advisory, I led the operational backbone of a 3x scaling practice — coordinating VAPT, SOC 1/2, ISAE 3000/3402, and digital forensics while modeling revenue dashboards. On the side, I design and deploy AI-assisted applications (HomeBody, Scribbleverse, Style DNA) and volunteer in digital literacy.",
  email: "anushka.nath2027@mastersunion.org",
  secondaryEmail: "nath.anushka26@gmail.com",
  phone: "+91 9148942548",
  linkedin: "https://www.linkedin.com/in/anushkanath/",
  currentProgram: "PGP in Technology & Business Management, Masters' Union",
  location: "Gurgaon / Bengaluru / Kochi, India",
  profileImage: "",
  status: "Masters' Union · PGP TBM",
};

export const TELEMETRY_METRICS = [
  {
    id: "portfolio",
    value: "₹3 Cr",
    label: "Annual Portfolio Managed",
    sublabel: "EMEA, APAC & Americas",
    trend: "3x practice scale",
    trendType: "positive" as const,
    code: "REV_EXEC // CROWE"
  },
  {
    id: "engagements",
    value: "65+",
    label: "Global Audit Engagements",
    sublabel: "SOC 1/2, VAPT, ISAE 3000/3402",
    trend: "Cross-border delivery",
    trendType: "neutral" as const,
    code: "SEC_OPS // ASSURANCE"
  },
  {
    id: "auditors",
    value: "15+",
    label: "Technical Auditors",
    sublabel: "Cross-border delivery coordination",
    trend: "Multi-stakeholder delivery",
    trendType: "positive" as const,
    code: "OPS_ALIGN // TEAM"
  },
  {
    id: "apps",
    value: "3 Live",
    label: "Shipped Applications",
    sublabel: "HomeBody, Scribbleverse, Vestelle",
    trend: "Built 0-to-1 & deployed",
    trendType: "accent" as const,
    code: "APP_BUILD // LIVE"
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: "cybersecurity-assurance",
    tag: "> 01 // cybersecurity & assurance",
    title: "Cybersecurity & Assurance Edge",
    description: "End-to-end coordination of Vulnerability Assessment, Penetration Testing (VAPT), Architecture & Code Review, Digital Forensics, and SOC 1/2, ISAE/ASAE 3000 & 3402 assessments."
  },
  {
    id: "commercial-growth",
    tag: "> 02 // commercial & growth strategy",
    title: "Commercial Strategy & Proposal Governance",
    description: "Spearheaded technical qualification, client solutioning, RFP governance with CERT-In & federal BFSI banks, partner sales alignment, and account expansion."
  },
  {
    id: "operations-scale",
    tag: "> 03 // operations & delivery systems",
    title: "Operations & Delivery Architecture",
    description: "Sole SPOC across 5 stakeholder groups (partners, auditors, external consultants, contracting org, clients). Modeled real-time dashboards from scratch to eliminate execution bottlenecks."
  },
  {
    id: "application-building",
    tag: "> 04 // 0-to-1 application building & ai",
    title: "0-to-1 Application Building & AI Execution",
    description: "Design and ship live applications end-to-end with AI-assisted tools: user research, UX architecture, two-sided market dynamics, and interactive loops."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "homebody",
    slug: "homebody",
    title: "HomeBody",
    role: "Designer & Builder",
    status: "live",
    liveUrl: "https://homebodyindia.lovable.app",
    tagline: "An au-pair-inspired matching platform pairing student housing with verified household help.",
    oneLiner: "Au-pair inspired exchange platform connecting verified students seeking affordable accommodation with urban families needing flexible domestic support.",
    tags: ["marketplace", "ai-assisted", "web-app"],
    problem: "Identified an unmet dual need in India: acute shortage of affordable, safe student housing in metro hubs, alongside working families struggling to find trustworthy, verified household help. Conventional platforms treat these as disconnected verticals.",
    solution: "Designed and launched an au-pair inspired matching ecosystem where students exchange structured help (errands, tutoring, household support) for stay with vetted host families — mutual verification, schedule synchronization, and rule compatibility.",
    outcome: "Live MVP deployed with end-to-end student/family onboarding, compatibility filtering, and profile verification.",
    highlights: [
      "Identified market gap in affordable Indian student housing and unorganized domestic help",
      "Designed two-sided onboarding funnel balancing mutual safety heuristics with minimal sign-up friction",
      "Engineered schedule-compatibility matrix matching student study hours with family assistance windows",
      "Fully operational live deployment with authentication, profiles, and matching intake"
    ],
    stack: ["Lovable", "React", "Supabase", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "scribbleverse",
    slug: "scribbleverse",
    title: "Scribbleverse",
    role: "Game Designer & Builder",
    status: "live",
    liveUrl: "https://scribblverse.lovable.app",
    tagline: "Multiplayer 'exquisite corpse' collaborative drawing game for social play.",
    oneLiner: "A collaborative drawing game where players blindly sketch sequential canvas segments before the grand joint reveal.",
    tags: ["game-design", "real-time", "canvas"],
    problem: "Party games are typically either fiercely competitive or lack organic creative collaboration, leaving non-artistic participants feeling intimidated by blank canvases.",
    solution: "A digital multi-player adaptation of the surrealist 'exquisite corpse' drawing game: 3 to 8 players sketch contiguous sections of a canvas with only folded-edge reference points visible, passing turns asynchronously until the full collaborative creature is unveiled.",
    outcome: "Live and playable — real-time room matchmaking, drawing canvas, turn rotation, and composite unveiling.",
    highlights: [
      "Mapped the end-to-end player game loop: lobby generation, timeboxed turns, folded-edge guides, and dramatic reveal modal",
      "Architected room state mechanics for 3-8 concurrent participants passing turns seamlessly",
      "Designed intuitive, low-pressure canvas tools that eliminate blank-canvas intimidation",
      "Live rooms with instant invite code sharing and interactive canvas exports"
    ],
    stack: ["Lovable", "HTML5 Canvas", "WebSockets", "Tailwind CSS"]
  },
  {
    id: "style-dna",
    slug: "style-dna",
    title: "Style DNA",
    role: "AI Designer & Builder",
    status: "live",
    liveUrl: "https://vestelle.lovable.app",
    tagline: "Visual aesthetic inference engine transforming saved imagery into personalized jewellery wishlists.",
    oneLiner: "AI-driven jewellery discovery engine that decodes aesthetic cues from saved inspiration photos into curated collection matches.",
    tags: ["ai-assisted", "e-commerce", "computer-vision"],
    problem: "Shoppers struggle to articulate their visual tastes in keyword search boxes, and conventional multiple-choice style quizzes produce superficial, generic recommendations.",
    solution: "An aesthetic inference engine where users upload 10-20 inspiration screenshots they already have saved. The model extracts color harmony, metal finishes, geometry, and design eras, outputting a curated jewellery wishlist where each item provides a transparent rationale for why it matches.",
    outcome: "Live prototype featuring upload queue, style profiling, and explainable item recommendation cards.",
    highlights: [
      "Created multi-image moodboard upload flow parsing textures, silhouettes, and metal tones",
      "Formulated the aesthetic reasoning model: providing clear 'why this matches your vibe' explanations",
      "Engineered clean luxury editorial interface with instant wishlist curation",
      "Live application with image classification and dynamic catalog matching"
    ],
    stack: ["Lovable", "Vision AI API", "React", "Tailwind CSS"]
  },
  {
    id: "sinchan-kurumutu",
    slug: "sinchan-kurumutu",
    title: "Sinchan NGO (Project Kurumutu)",
    role: "Volunteer & Program Designer",
    status: "initiative",
    liveUrl: "#",
    tagline: "Urban-rural peer learning initiative bridging English and digital literacy gaps (Community Initiative).",
    oneLiner: "Standardized session structures and visual story pedagogy across cohorts, enabling program scale-up and rebranding.",
    tags: ["impact", "education", "community"],
    problem: "Learners in underserved communities faced significant gaps in conversational English and fundamental digital literacy, while conventional rote methods led to high drop-off.",
    solution: "Designed peer-learning sessions grounded in visual story pedagogy that linked learning concepts to students' lived experiences. Standardized session frameworks and volunteer onboarding to scale delivery.",
    outcome: "Successfully scaled cohorts; led initiative rebranding from Project Lahanti to Kurumutu. Note: This is an on-ground community volunteer initiative, not software.",
    highlights: [
      "Diagnosed digital and language literacy gaps through on-ground learner assessments",
      "Standardized curriculum templates and session delivery practices for volunteer cohorts",
      "Mentored and onboarded cross-functional volunteer teams",
      "Spearheaded rebranding of Project Lahanti to Kurumutu, reshaping strategic positioning"
    ],
    stack: ["Pedagogy Design", "Volunteer Ops", "Curriculum Architecture"]
  },
  {
    id: "book-the-gap",
    slug: "book-the-gap",
    title: "Book The Gap",
    role: "Team Member & Documentary Co-creator",
    status: "initiative",
    liveUrl: "https://bookthegap.weebly.com/",
    websiteUrl: "https://bookthegap.weebly.com/",
    videoUrl: "https://www.youtube.com/watch?v=yPln43BsJro",
    tagline: "Primary school library establishment and documentary on educational inequity.",
    oneLiner: "Fundraising via book drives, established multilingual library for Grades 1-5, and produced an advocacy documentary.",
    tags: ["impact", "research", "advocacy"],
    problem: "Field research and educator interviews revealed critical resource & reading infrastructure deficiencies in underfunded government schools.",
    solution: "Organized community used-book drives, collected and resold donated books to raise funds, and purchased English, Kannada, and Hindi books for a dedicated library for Grades 1–5.",
    outcome: "Built functioning library with ongoing community support; produced a documentary-style YouTube video to raise educational equity awareness.",
    highlights: [
      "Conducted on-ground interviews with headteachers to map student language needs",
      "Orchestrated community collection drives across schools and apartment complexes",
      "Official Initiative Website: https://bookthegap.weebly.com/",
      "Mini-Documentary Video: https://www.youtube.com/watch?v=yPln43BsJro"
    ],
    stack: ["Field Research", "Community Fundraising", "Video Production"]
  }
];

export const ESSAY_DATA = {
  title: "The Stepping Stone",
  subtitle: "Observations on High-Velocity Execution and Accountability.",
  standfirst: "What cross-functional execution and operational leadership look like behind the scenes — and why navigating the gap between authority and responsibility is the entire game.",
  tags: ["> FIELD_NOTES", "> OPERATIONS", "> STRATEGY"],
  date: "Autumn 2024",
  readTime: "7 min read",
  quote: "You will never have as much authority as you have responsibility. You're accountable for outcomes across functions you don't manage, with people who don't report to you, on timelines you didn't always set. The only currency that works here is rapport.",
  keshaAside: {
    intro: "(Read the next bit in Kesha's voice, if you must.)",
    lyrics: [
      "Wake up in the morning like it's already noon",
      "Calendar's stacked, gotta be in three rooms",
      "Skip the coffee, chug it black while I read the deck",
      "'Cause once the founder calls me in, there's no stepping back"
    ],
    reflection: "Cute. Except the real version doesn't have a chorus - it has leadership that commits deadlines without checking if you're free, and then looks to you to make the math work out. You learn fast that 'yes' isn't a personality trait, it's a liability. So now I say things like: here's my week, here's what's already committed, tell me what moves. Not because I like saying no, but because saying yes to everything gets you nowhere except burnt out and unreliable."
  },
  coreTakeaways: [
    {
      title: "Authority vs. Responsibility",
      content: "You're accountable for outcomes across functions you don't manage, with people who don't report to you, on timelines you didn't always set. You don't get rapport by pulling rank, because you have none. You get it by showing up early enough, often enough, useful enough, that people choose to listen to you instead of being told to."
    },
    {
      title: "Problem Solver & Operational Leverage",
      content: "You absorb whatever doesn't have an obvious owner yet. But the arrangement runs both ways: as long as you can defend your reasoning, you can move leadership. Push for the right hire, kill the initiative that's not working, change how the team operates. You have the ear — and that's its own kind of leverage."
    },
    {
      title: "Stepping Stone, Not Destination",
      content: "Cross-functional execution roles put you in every room. What you do with that access is the only part that's actually up to you. You can't know what you want to specialize in until you've been close enough to every function to feel which ones pull at you and which ones don't."
    }
  ],
  timeline: [
    {
      time: "04:00 AM",
      title: "The Zero-Noise Window",
      description: "I still wake up here, on purpose. It's the only stretch of the day with no noise, inside or outside - no calls, no Slack, no interruptions. Headphones in, workout playlist, and I clear whatever critical tasks need undivided focus."
    },
    {
      time: "06:30 AM",
      title: "Shower, Breakfast, GRC Pitch",
      description: "Today: pitch meeting in the morning, then a call with a prospective partner pitching ourselves as an add-on to their existing service catalog. The story we're telling them is simple: audit fatigue is real - companies have people permanently tied up coordinating and collecting evidence because so many audits run in parallel. We map controls across audits so work doesn't get duplicated."
    },
    {
      time: "08:50 AM",
      title: "Standup from Bengaluru Traffic",
      description: "From the car, because Bengaluru traffic does not care what time my calendar says. Someone else takes notes for me; I'll read them at the next red light."
    },
    {
      time: "Mid-Morning",
      title: "RFPs & The Push into BFSI",
      description: "Chasing proposals that put us in the orbit of national regulatory bodies like CERT-In - good for keeping empanelment current, better for credibility elsewhere. Alongside that, the push into BFSI is picking up - targeting federal banks across several jurisdictions."
    },
    {
      time: "Early Afternoon",
      title: "The Capacity Interview",
      description: "We're at capacity and need to bring someone in - I sit in on these to assess technical and cultural fit."
    },
    {
      time: "12:00 PM",
      title: "The Twenty-Minute Sprint",
      description: "A sudden deck request. I get it done - not because I had a head start, but because everything built into the morning meant I had the raw pieces and data already assembled."
    },
    {
      time: "Evening",
      title: "Team AI Training Workshop",
      description: "Facilitating workflow alignment between the technical team and business analysts using our internal tools."
    },
    {
      time: "End of Day",
      title: "Marketing Sync",
      description: "Reviewing outreach metrics and pipeline growth. The meeting where I do the least talking and the most listening."
    },
    {
      time: "Night / Home",
      title: "Tomorrow's Version of Today",
      description: "By the time I'm home, the morning version of me feels like a different person who did me a favor. That's the operating rhythm - you're always positioned for tomorrow's execution."
    }
  ]
};

export const CROWE_SECTIONS = [
  {
    id: "commercial-growth",
    category: "Commercial & Growth",
    bullets: [
      "Evolved from project coordinator into customer lifecycle manager as the practice scaled 3x in engagement volume.",
      "Owned execution of a ₹3 Cr audit & advisory portfolio across 65+ engagements spanning EMEA, APAC & the Americas.",
      "Led commercial proposals, client solutioning, and executive RFP qualification for CERT-In and federal BFSI institutions.",
      "Diagnosed profitability leaks in our Vulnerability Assessment service through data-informed root cause analysis.",
      "Enabled real-time revenue, utilisation, and profitability tracking by modelling executive dashboards from scratch.",
      "Mitigated the identified delivery-cost blind spot by evaluating project-effort-variance data across the service offering."
    ]
  },
  {
    id: "operations-scale",
    category: "Operations & Scale",
    bullets: [
      "Sole SPOC across 5 stakeholder groups - partners, auditors, external consultants, contracting organisation, and clients.",
      "Designed quality management system to meet an international standard mandate, replacing ad-hoc quality practices.",
      "Optimized delivery workflows, milestone governance, and multi-stakeholder operational cadence.",
      "Elevated resource utilisation 1.5x through data-driven allocation and capacity planning across 15+ auditors.",
      "Unlocked expansion revenue by identifying account growth opportunities and complementary service fits."
    ]
  },
  {
    id: "stakeholder-partner",
    category: "Stakeholder & Partner Management",
    bullets: [
      "Gained testimonials and client insight to support business growth by launching our first feedback program.",
      "Enhanced sales effectiveness by retraining partner sales teams on our solution playbooks and service bundling.",
      "Preserved a strategic global contractor relationship by managing executive stakeholders during a critical escalation.",
      "Boosted adoption of an audit offering by 15% by shifting positioning from compliance requirements to business value.",
      "Strengthened contractor governance through delivery oversight, feedback mechanisms, and review processes.",
      "Facilitated a presales colleague's transition into audit team by bridging their knowledge gap on service delivery process."
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "crowe",
    company: "Crowe Advisory Services (India) LLP",
    role: "Project Coordinator (Customer Lifecycle Manager)",
    period: "2022 – 2024",
    location: "Kochi, Kerala (Hybrid)",
    type: "experience",
    description: "Owned execution of a ₹3 Cr audit & advisory portfolio across 65+ engagements (EMEA, APAC, Americas). Evolved into customer lifecycle manager as practice scaled 3x in volume.",
    bullets: [
      "Spearheaded commercial strategy and proposal solutioning for enterprise RFPs with CERT-In and BFSI banks.",
      "Modeled executive dashboards from scratch for real-time revenue, utilization, and profitability tracking.",
      "Streamlined multi-stakeholder delivery workflows connecting 15+ technical auditors with partners and enterprise clients.",
      "Sole SPOC across 5 stakeholder groups: partners, auditors, external consultants, contracting organization, and clients.",
      "Managed engagements in VAPT, Code & Architecture Review, Digital Forensics, and SOC 1/2, ISAE 3000/3402."
    ],
    metrics: [
      "₹3 Cr Portfolio",
      "65+ Engagements",
      "15+ Auditors Coordinated"
    ]
  },
  {
    id: "medigrow",
    company: "MediGrow",
    role: "Business Development Intern",
    period: "Feb'24 – Mar'24",
    location: "Dubai, UAE (Remote)",
    type: "experience",
    description: "Expanded the prospect pipeline for a healthcare marketing startup through targeted market research and outreach.",
    bullets: [
      "Conducted lead generation and targeted data scraping for prospect identification across GCC clinics.",
      "Prepared and delivered commercial proposals for medical practice growth.",
      "Executed LinkedIn outreach and scheduling to strengthen prospective client connections.",
      "Supported executive discussions around startup business expansion strategies."
    ]
  },
  {
    id: "kloudmate",
    company: "KloudMate",
    role: "Sales & Marketing Intern",
    period: "Jan'23 – Dec'23",
    location: "Bengaluru, Karnataka",
    type: "experience",
    description: "Expanded B2B prospect pipelines through targeted segmentation and outbound outreach.",
    bullets: [
      "Identified cloud observability prospects using intelligence tools like Intricately, Apollo, and Lusha.",
      "Performed cold outbound outreach to relevant B2B engineering decision-makers.",
      "Maintained structured records of client interactions and sales pipeline stages on HubSpot CRM.",
      "Assisted with competitive landscape research to identify GTM opportunities."
    ]
  },
  {
    id: "masters-union",
    company: "Masters' Union",
    role: "PGP in Technology & Business Management",
    period: "2024 – 2026",
    location: "Gurgaon, India",
    type: "education",
    description: "Technology & Business Management postgraduate program focusing on 0-to-1 venture building, technology strategy, commercial finance, and operational leadership."
  },
  {
    id: "st-josephs",
    company: "St. Joseph's University",
    role: "B.A. Economics & Industrial Relations | CGPA: 8.89",
    period: "2021 – 2024",
    location: "Bengaluru, Karnataka",
    type: "education",
    description: "CGPA: 8.89. Awarded College Gold Medalist in German. Editor of Aatmasaat Vol. 4 (Newsletter for School of Humanities & Social Sciences) leading content curation, design, and editorial layout."
  },
  {
    id: "primus",
    company: "Primus Public School",
    role: "IGCSE High School (PCM & PCMB)",
    period: "2019 – 2021",
    location: "Bengaluru, Karnataka",
    type: "education",
    description: "IGCSE Class 10 (PCMB) - 90.63%ile | IGCSE Class 11 & 12 (PCM) - 89.50%ile. Four-year consecutive Diwali dance competition winner."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "KICKOFF Project Management", issuer: "Project Management Institute (PMI)", year: "2025" },
  { name: "Corporate Finance", issuer: "Verzeo", year: "2022" },
  { name: "AI Tools Workshop", issuer: "Be10X", year: "2026" },
  { name: "Big Data, Artificial Intelligence, and Ethics", issuer: "Coursera – UC Davis", year: "2022" },
  { name: "Digital Marketing & Advertising", issuer: "St. Joseph's University", year: "2022" },
  { name: "Introduction to Artificial Intelligence", issuer: "Infosys Springboard", year: "2022" },
  { name: "Artificial Intelligence & Machine Learning Fundamentals", issuer: "Infosys Springboard", year: "2022" },
  { name: "Hands-on AI with TensorFlow", issuer: "Infosys Springboard", year: "2022" }
];

export const EXTRA_CURRICULAR = [
  {
    title: "Bharatanatyam Classical Dance",
    detail: "Trained in Indian classical dance for 6+ years; developed discipline, spatial expression, and stage performance rigor."
  },
  {
    title: "Adult Gymnastics",
    detail: "Took up gymnastics as an adult — deliberately choosing to be a beginner again and embrace deliberate vulnerability."
  },
  {
    title: "College Gold Medalist in German",
    detail: "Secured top rank and academic Gold Medal at St. Joseph's University for German language proficiency."
  },
  {
    title: "Community & Palliative Volunteering",
    detail: "Volunteer at Karunashraya (palliative care meal prep), Samarthanam Trust (audiobook recording for visually impaired), and Robinhood Army."
  }
];

export const SKILLS_MATRIX = {
  business: [
    "Customer Lifecycle Management",
    "Strategic Planning",
    "Program Management",
    "Business Operations",
    "Stakeholder Management",
    "Cross-functional Collaboration",
    "Process Improvement (ISQM 1)",
    "Business Analysis",
    "Capacity Planning & Allocation",
    "Root Cause Analysis"
  ],
  technical: [
    "Advanced Excel & Modeling",
    "Executive Dashboarding & KPI Tracking",
    "CRM (HubSpot, Zoho)",
    "Microsoft Planner & Power Automate",
    "Jira & Agile Workflows",
    "Wrike",
    "Apollo & Lusha (B2B Lead Intelligence)",
    "Canva & Pitch Decks",
    "SQL / Data Queries",
    "Lovable / Rapid Application Development"
  ]
};
