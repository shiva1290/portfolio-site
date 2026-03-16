// Portfolio data - centralized data management
export const personalInfo = {
  name: "Shiva Gupta",
  title: "Full-Stack Developer & Software Engineer",
  email: "shivaguptacse@gmail.com",
  phone: "+91 8219268543",
  location: "India",
  linkedin: "https://www.linkedin.com/in/shivaguptacse/",
  github: "https://github.com/shiva1290",
  codingProfiles: "https://codolio.com/profile/shivagupta24",
  resumePath: "https://drive.google.com/drive/folders/1g3ma235YPKZjOaNXsv4kO9v0onTHW1Kl",
  summary: `Computer Science undergraduate with strong foundations in Data Structures 
    and Algorithms (700+ problems solved) and hands-on experience building and 
    deploying full-stack web applications using React, Spring Boot, and RESTful APIs.`,
  approach: `I architect production-grade backends with Spring Boot and secure 
    authentication (JWT, Spring Security), design relational schemas in PostgreSQL, 
    and build responsive React frontends — always prioritizing clean code, 
    scalability, and maintainability.`
};

export const stats = [
  { value: "700+", label: "DSA Problems Solved" },
  { value: "Top 1%", label: "AMCAT College Rank" },
  { value: "Top 5%", label: "NPTEL Cloud Computing" },
  { value: "8.45", label: "CGPA at Chandigarh University" }
];

export const projects = [
  {
    id: 1,
    title: "ClassWise – University Management Dashboard",
    description: `A full-stack dashboard with a React/Refine frontend and Spring Boot REST API 
      to manage departments, subjects, classes, and faculty. Features role-based access 
      control with session-based authentication supporting admin, teacher, and student 
      workflows, plus backend safeguards including rate limiting and Spring Security.`,
    tech: ["React", "Spring Boot", "PostgreSQL", "TypeScript", "Java"],
    github: "https://github.com/shiva1290",
    live: "https://classwise-frontend-tolx.vercel.app"
  },
  {
    id: 2,
    title: "ApplyRec – Job Application Tracker",
    description: `A full-stack job application tracker supporting multi-stage hiring workflows 
      (Applied, OA, Interview, Offer, Rejected) with search, filtering, and analytics 
      dashboard. Built with 10+ RESTful APIs, JWT authentication, and bcrypt password 
      hashing in Spring Boot. Deployed on Vercel + Render with managed PostgreSQL.`,
    tech: ["React", "Java", "Spring Boot", "PostgreSQL", "JWT"],
    github: "https://github.com/shiva1290",
    live: "https://applyrec-frontend.vercel.app"
  }
];

export const skills = {
  programming: [
    { name: "C++", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "Python (Basic)", level: 50 },
    { name: "SQL", level: 80 }
  ],
  frontend: [
    { name: "React.js", level: 88 },
    { name: "HTML5 & CSS3", level: 90 },
    { name: "State Management", level: 80 },
    { name: "TypeScript", level: 70 }
  ],
  backend: [
    { name: "Java & Spring Boot", level: 85 },
    { name: "RESTful APIs", level: 88 },
    { name: "Authentication (JWT)", level: 85 },
    { name: "Node.js & Express", level: 75 }
  ],
  databases: [
    { name: "PostgreSQL", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 70 }
  ],
  coreCS: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Operating Systems",
    "Computer Networks"
  ],
  tools: [
    "Git & GitHub",
    "Postman",
    "Vercel",
    "Render"
  ]
};

export const experience = [
  {
    id: 1,
    title: "Co-Founder",
    company: "Revibe Academy",
    period: "2021 - 2023",
    description: `Co-founded a social media marketing agency serving 5–10 active clients; 
      managed end-to-end content, ad, and delivery pipelines using data-driven 
      workflows and automation tools. Leveraged platform analytics (Meta Ads Manager, 
      YouTube Studio) to track KPIs and optimize content strategy — improving average 
      client engagement rates by over 30%.`
  }
];

export const extracurricular = [
  {
    id: 1,
    title: "Executive Member",
    organization: "IEEE Computer Society, Chandigarh University",
    description: "Organized large-scale technical workshops and coordinated student technical initiatives."
  },
  {
    id: 2,
    title: "Volunteer",
    organization: "Muskurahat Foundation",
    description: "Contributed to community outreach initiatives for underprivileged children."
  },
  {
    id: 3,
    title: "Class Representative (3× Elected)",
    organization: "Dept. of Career Planning, Chandigarh University",
    description: "Elected three consecutive times to represent peers, coordinate academic communications, and liaise between students and faculty."
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Chandigarh University, Chandigarh, India",
    period: "2023 - 2027",
    grade: "CGPA: 8.45"
  },
  {
    id: 2,
    degree: "12th Standard",
    institution: "Saraswati Paradise International Public School",
    period: "2022 - 2023",
    grade: "Percentage: 84.40%"
  },
  {
    id: 3,
    degree: "10th Standard",
    institution: "Saraswati Paradise International Public School",
    period: "2019 - 2020",
    grade: "Percentage: 97.00%"
  }
];

export const certifications = [
  {
    id: 1,
    title: "NPTEL Cloud Computing (Silver Medalist)",
    issuer: "IIT Kharagpur",
    date: "May 2025",
    description: "Cloud services, virtualization, distributed systems",
    icon: "medal",
    link: "https://drive.google.com/file/d/1Dr1dTd8VvEDHTiKY9SEXW6vY_WGIwemv/view"
  },
  {
    id: 2,
    title: "The Web Developer Bootcamp 2025",
    issuer: "Udemy",
    date: "July 2025",
    description: "Full-stack MERN: React, Node, Express, MongoDB",
    icon: "js",
    link: "https://www.udemy.com/certificate/UC-c676c14b-1137-493b-a292-fd513a594875/"
  },
  {
    id: 3,
    title: "Introduction to Generative AI",
    issuer: "Google",
    date: "July 2024",
    description: "Foundations of LLMs and AI applications",
    icon: "google",
    link: "https://www.cloudskillsboost.google/public_profiles/b647a586-18ae-42e5-b260-b7a3a4f7e792"
  }
];

export const achievements = [
  {
    id: 1,
    title: "700+ DSA Problems Solved",
    description: `Solved over 700 Data Structures and Algorithms problems across 
      LeetCode and TakeUForward, building deep problem-solving 
      skills and competitive programming expertise.`,
    icon: "code"
  },
  {
    id: 2,
    title: "Top 1% AMCAT Rank",
    description: `Ranked in the Top 1% of students in college-wide AMCAT exam 
      across two consecutive semesters, demonstrating consistent 
      excellence in aptitude and technical skills assessment.`,
    icon: "trophy"
  },
  {
    id: 3,
    title: "Top 5% in NPTEL Cloud Computing",
    description: `Ranked in the Top 5% in NPTEL Cloud Computing course from 
      IIT Kharagpur, earning a Silver Medal for exceptional 
      performance in cloud services, virtualization, and distributed systems.`,
    icon: "cloud"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
