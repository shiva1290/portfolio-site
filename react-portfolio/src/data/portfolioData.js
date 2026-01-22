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
  summary: `Full-Stack Developer passionate about building scalable web applications 
    using React, Node.js, Express, and MongoDB. With 500+ DSA problems solved 
    and hands-on experience in creating production-ready applications, 
    I turn complex ideas into elegant, efficient solutions.`,
  approach: `I design robust RESTful APIs with clean architecture principles, 
    implement secure authentication with JWT, and follow best practices 
    for database design. My code prioritizes scalability, maintainability, 
    and performance.`
};

export const stats = [
  { value: "500+", label: "DSA Problems Solved" },
  { value: "Top 1%", label: "AMCAT College Rank" },
  { value: "Top 5%", label: "NPTEL Cloud Computing" },
  { value: "8.45", label: "CGPA at Chandigarh University" }
];

export const projects = [
  {
    id: 1,
    title: "ApplyRec – Job Application Tracker",
    description: `A full-stack web application to track job applications across multiple 
      hiring stages with secure JWT-based authentication. Features RESTful APIs 
      and optimized database schema with indexing for fast search and filtering.`,
    tech: ["React", "Node.js", "Express", "MySQL", "JWT Auth"],
    github: "https://github.com/shiva1290",
    live: "https://applyrec.vercel.app/"
  },
  {
    id: 2,
    title: "LifeOS – Personal Productivity Platform",
    description: `A modular productivity platform featuring tasks, goals, analytics dashboards, 
      and responsive UI across devices. Built with scalable backend APIs supporting 
      pagination, filtering, and Git-based version control.`,
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/shiva1290",
    live: "https://life.shivagupta.top"
  },
  {
    id: 3,
    title: "Modern Portfolio Website",
    description: `A sleek, responsive personal portfolio featuring dynamic animations, 
      dark/light modes, and 3D effects. Built with vanilla HTML, CSS and 
      JavaScript with focus on performance and accessibility.`,
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/shiva1290/portfolio-site",
    live: null
  }
];

export const skills = {
  programming: [
    { name: "C++ (Proficient)", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Java", level: 75 }
  ],
  webBackend: [
    { name: "React.js", level: 85 },
    { name: "Node.js & Express.js", level: 80 },
    { name: "REST APIs", level: 85 },
    { name: "HTML + CSS", level: 90 }
  ],
  databases: [
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Data Structures & Algorithms", level: 90 }
  ],
  technical: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Basic System Design",
    "Git & GitHub",
    "Postman",
    "Vercel",
    "Railway"
  ],
  soft: [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Self-learning",
    "Technical Writing"
  ]
};

export const experience = [
  {
    id: 1,
    title: "Executive Member",
    company: "IEEE Computer Society, Chandigarh University",
    period: "2023 - 2024",
    description: `Coordinated and executed 5+ workshops and events with 1000+ attendees, 
      contributing to technical planning, logistics, and execution. Worked with 
      cross-functional student teams to standardize workflows and improve event 
      delivery efficiency.`
  },
  {
    id: 2,
    title: "Co-Founder",
    company: "Revibe Academy (Early-stage Startup)",
    period: "2021 - 2023",
    description: `Co-founded and operated an early-stage startup serving 5–10 clients; 
      handled operations, analytics review, and process optimization. Worked 
      directly with clients to gather requirements, iterate on offerings, 
      and manage delivery timelines.`
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
    title: "Top 1% AMCAT Rank",
    description: `Ranked in the Top 1% of students in college-wide AMCAT exam 
      across two consecutive semesters, demonstrating consistent 
      excellence in aptitude and technical skills assessment.`,
    icon: "trophy"
  },
  {
    id: 2,
    title: "500+ DSA Problems Solved",
    description: `Solved over 500 Data Structures and Algorithms problems on 
      LeetCode and TakeUForward, building strong problem-solving 
      skills and competitive programming expertise.`,
    icon: "code"
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
