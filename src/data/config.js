// Personal Information
export const personalInfo = {
  name: "Anto P V",
  title: "Developer, Designer, Engineer.",
  tagline: "Software Engineer @ KeyValue Software Systems",
  profileImage: "/favicon.svg",
  age: 24,
  location: "Kerala",
  role: "Associate Software Engineer",
  company: "KeyValye Software Systems, Kochi",
  bio: "I'm a software engineer focused on backend architecture and agentic AI systems. I've worked across AI-driven automation, cloud platforms, and large-scale backend systems, and I write about AI systems and life here.",
  aboutBio: "AI Engineer and Software Engineer (3 years) specializing in backend architecture and agentic AI systems, with a strong track record of designing production-grade AI workflows with real business impact. Sole architect behind AI-powered campaign automation for Siren and contributor to the conversational AI platform supporting shopper experiences used by tens of millions of users across U.S. healthcare and retail. Known for system-level thinking, ownership, and building reliable, scalable systems backed by clean architecture.",
  resumeUrl: "https://drive.google.com/file/d/1d4vdYvNsdjmxcTPGAOrfidq6WEpLUAJ1/view?usp=sharing",
  
  // About page specific data
  skills: {
    "Core": ["LLM-based Workflows","LangGraph","RAG","FastAPI","NestJs","Spring Boot","PostgreSQL"],
    "Infra": ["GCP(GCS, CSQL)","AWS (ECS, S3, Lambda, SQS, SNS)","Docker","Kubernetes","GitHub Actions","Docker"],
    "Platforms": ["Langsmith","Hugging Face","Wati"]
  },
  icebreakers: [
    "Clash of Clans",
    "Marvel Movies",
    "IPL",
    "Food",
    "Football",
    "Travel"
  ],
  experience: [
    {
      title: "Senior Software Development Engineer",
      status: "Current",
      company: "CVS, via Truefoundry",
      description: "Designing and implementing agentic AI workflows for the CVS shopper assistant, supporting millions of users across U.S. healthcare and retail."
    },
    {
      title: "Software Engineer",
      status: "Past",
      company: "KeyValue Software Systems",
      description: "Developed backend services for cloud-based applications, ensuring scalability and reliability."
    }
  ],
  highlights: [
    "Web Developer, IEEE MACE Student Branch, Kerala Section",
    "Siemens Mobility Project Manager Job Simulation on Forage: Managed KPIs and dashboards for rail infrastructure projects using analytical skills and data visualization (May 2024).",
    "Completed Google Professional IT Support provided by Google.",
    "Successfully finished Programming Foundations with JavaScript, HTML, CSS by Duke University.",
    "Completed Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning by Deeplearning.ai.",
    "Achieved certification in Using Python for Research offered by HarvardX.",
  ]
};

// Social Media Links
export const socialLinks = {
  github: "https://github.com/anto-pv",
  linkedin: "https://www.linkedin.com/in/anto-pv",
  instagram: "https://www.instagram.com/anto_p_v",
  youtube: "https://www.youtube.com/channel/UC_9r3s3zO9lHgtKAvBX-5Aw",
  codechef: "https://www.codechef.com/users/anto_pv",
  hackerrank: "https://www.hackerrank.com/antopv",
  codeforces: "https://codeforces.com/profile/anto-pv"
};

// Skills organized by category
export const skills = {
  languages: [
    { name: "C++", icon: "cpp" },
    { name: "Python", icon: "python" },
    { name: "JavaScript", icon: "js" }
  ],
  databases: [
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "psql" }
  ],
  web: [
    { name: "HTML", icon: "hml" },
    { name: "CSS", icon: "cs" },
    { name: "Sass", icon: "sass" },
    { name: "Figma", icon: "figma" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "NestJS", icon: "nest" }
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "NPM", icon: "npm" },
    { name: "Photoshop", icon: "ps" }
  ]
};

// Projects
export const projects = [
  {
    id: 1,
    title: "CloudCart",
    description: "This project aim to help people to buy and book services according to their needs, based on a time slot sitting at home thereby reducing the exposure to outside environment especially during this pandemic.",
    repoUrl: "https://github.com/anto-pv/CloudCart.git",
    images: {
      header: "p1h",
      detail: "p1i"
    }
  }
];

// Work Experience
export const experiences = [
  {
    id: 1,
    company: "Sysbreeze Technologies, Kinfra Techno Park, Kozhikode",
    position: "Intern",
    duration: "04-07-2019 to 20-07-2019",
    description: "Web Development Basics",
    technologies: ["HTML", "CSS", "JS"]
  }
];

// Navigation Links
export const navigationLinks = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/portfolio#projects", label: "Projects", hash: true },
  { path: "/portfolio#skills", label: "Skills", hash: true },
  { path: "/portfolio#experiences", label: "Experiences", hash: true }
];

