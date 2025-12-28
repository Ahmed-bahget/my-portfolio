import ahmed_image from './ahmed_image.png';
import code_icon from './code-icon.png';
import edu_icon from './edu-icon.png';
import project_icon from './project-icon.png';
import vscode from './vscode.png';
import mongodb from './mongodb.png';
import logo from './logo.png';
import mail_icon from './mail_icon.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import linkedin_icon from './linkedin_icon.png';
import github_icon from './github_icon.png';

export const assets = {
  ahmed_image,
  code_icon,
  edu_icon,
  project_icon,
  vscode,
  mongodb,
  logo,
  download_icon,
  header_bg_color,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  hand_icon,
  mail_icon,
  linkedin_icon,
  github_icon,
};

export const workData = [
  {
    title: 'Job Portal',
    description: 'MERN Job Portal App',
    bgImage: '/jobportal.png',
  },
  {
    title: 'Socially',
    description: 'Fullstack Social Media App',
    bgImage: '/socially.png',
  },
  {
    title: 'ZWEB Backend',
    description: 'Backend REST API',
    bgImage: '/zweb.png',
  },
  {
    title: 'Events Sharing App',
    description: 'Events & Community Platform',
    bgImage: '/eventsharing.png',
  },
]



export const projects = [
  {
    slug: "job-portal",
    title: "Job Portal Web Application",
    shortDescription: "Full-Stack MERN Job Platform",
    description:
      "A comprehensive job portal platform connecting job seekers with employers. Built using the MERN stack, featuring profile management, job postings, application tracking, and company management.",
    coverImage: "/jobportal.png",
    images: [],
    demoLink: "https://jop-portal-three.vercel.app/",
    repoLink: "https://github.com/Ahmed-bahget/Jop-Portal",
    videoLink: "https://player.cloudinary.com/embed/?cloud_name=dwans37rz&public_id=Jobportallinkedin_auoq7i&profile=cld-default",
    techStack: ["React", "Tailwind CSS", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "User registration, login, and profile management with avatar upload",
      "Company management, job posting, and applicant tracking",
      "Application tracking and status updates",
      "RESTful APIs with Express.js and MongoDB (Mongoose ODM)",
      "JWT-based authentication and secure password handling",
      "Responsive SPA frontend with React, Tailwind CSS, and Axios"
    ]
  },
  {
    slug: "socially",
    title: "Social Media Platform",
    shortDescription: "Real-Time Social Media Web App",
    description:
      "A full-featured social media application demonstrating advanced Next.js development with real-time interactions, performance optimization, and clean architecture. Includes posts, infinite scrolling feed, authentication, and media uploads.",
    coverImage: "/socially.png",
    images: [],
    demoLink: "https://socially-theta-beige.vercel.app/",
    repoLink: "https://github.com/Ahmed-bahget/socially",
    videoLink: "https://player.cloudinary.com/embed/?cloud_name=dwans37rz&public_id=Socially_wmv3qw&profile=cld-default",
    techStack: ["Next.js 16", "React 18", "TypeScript", "Tailwind CSS", "Shadcn UI", "Prisma ORM", "PostgreSQL", "Clerk", "UploadThing"],
    features: [
      "Secure authentication with Clerk",
      "Post creation with text and image uploads",
      "Real-time feed updates and infinite scrolling",
      "Like, comment, follow, and notification systems",
      "Server-side rendering and client-side caching optimizations",
      "Hybrid rendering architecture (server/client components)",
      "Responsive and accessible UI design"
    ]
  },
  {
    slug: "events-sharing-app",
    title: "Event Sharing App",
    shortDescription: "Interactive Event Management Web App",
    description:
      "An interactive web application that enables users to create, share, and attend events with an integrated chat system, friend management, and payment support for premium events. Built using React, TypeScript, Vite, and Radix UI, this project demonstrates a modular front-end architecture, responsive design, and real-time UI interactions.",
    coverImage: "/eventsharing.png",
    images: [],
    demoLink: "https://events-sharing-app.vercel.app/",
    repoLink: "https://github.com/Ahmed-bahget/Events-Sharing-App",
    videoLink: "",
    techStack: ["React", "TypeScript", "Vite", "Radix UI", "Tailwind CSS", "Lucide Icons", "Embla Carousel", "react-hook-form", "class-variance-authority", "clsx", "sonner"],
    features: [
      "Event creation, viewing, liking, and commenting",
      "Real-time attendance and premium event payments",
      "Friend management and private chat system",
      "Drawer-based chat interface with unread message counts",
      "User profiles with event participation history",
      "Responsive design using Tailwind CSS and Radix UI",
      "Modular front-end architecture with reusable components",
      "Toast notifications for real-time feedback"
    ]
  },
  {
    slug: "zweb-backend",
    title: "ZWeb",
    shortDescription: "Scalable User/Admin Backend",
    description:
      "Designed a secure backend system with OAuth authentication and role-based access control. Built a clean, scalable REST API layer for frontend integration, implementing robust user and admin management features.",
    coverImage: "/zweb.png",
    images: [],
    demoLink: "",
    repoLink: "https://github.com/Ahmed-bahget/ZWEB-backend",
    videoLink: "",
    techStack: ["Node.js", "Express.js", "MongoDB", "OAuth", "JWT", "Multer", "Bcrypt"],
    features: [
      "OAuth authentication and JWT-based token management",
      "Role-based access control for users and admins",
      "MVC architecture and secure API structure",
      "User and admin CRUD endpoints",
      "Avatar upload with file validation",
      "Password management with reset and update flows"
    ]
  }
];



export const serviceData = [
  { icon: assets.web_icon, title: 'Web development', description: 'MERN Stack development involves building full-stack web applications...', link: '' },
  { icon: assets.mobile_icon, title: 'Backend development', description: 'Node Js development involves building server-side applications...', link: '' },
  { icon: assets.ui_icon, title: 'Frontend development', description: 'React Js, Next Js development involves building interactive user interfaces...', link: '' },
]

export const infoList = [
  { icon: assets.code_icon, title: 'Skills', description: 'JavaScript, TypeScript, SQL, Node.js, Express.js, NestJS, React.js, Redux, Next.js, HTML, CSS, Tailwind CSS, MongoDB, PostgreSQL, MySQL, SQL Server, REST APIs, MVC, OOP, SOLID Principles, Design Patterns, Docker, Git, GitHub, CI/CD.' },
  { icon: assets.edu_icon, title: 'Education', description: "Bachelor's Degree in Computer Science, Zagazig University – Faculty of Engineering." },
  { icon: assets.project_icon, title: 'Experience', description: 'Full Stack / Backend Developer (Freelance), Egypt, 2024 – Present. Designed and developed RESTful APIs using Node.js, Express.js, React.js, and Next.js. Developed scalable backend services using MongoDB, PostgreSQL, and MySQL.' }
];

let arrayIcons = [
  {
    "name": "Node.js",
    "icon": "https://cdn.simpleicons.org/nodedotjs"
  },
  {
    "name": "React.js",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg"
  },
  {
    "name": "Next.js",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg"
  },
  {
    "name": "Tailwind CSS",
    "icon": "https://logo.svgcdn.com/logos/tailwindcss.svg"
  },
  {
    "name": "HTML5",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg"
  },
  {
    "name": "CSS3",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg"
  }
]
