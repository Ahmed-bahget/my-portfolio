// "use client"

// import { motion } from 'framer-motion'
// import { Code, GraduationCap, Briefcase } from 'lucide-react'
// import React from 'react'

// const infoList = [
//   {
//     icon: Code,
//     title: "Skills",
//     items: [
//       {
//         heading: "Languages",
//         content: "JavaScript, TypeScript, SQL",
//       },
//       {
//         heading: "Backend",
//         content: "Node.js, Express.js, NestJS",
//       },
//       {
//         heading: "Frontend",
//         content: "React.js, Next.js",
//       },
//       {
//         heading: "Styling",
//         content: "HTML, CSS, Tailwind CSS",
//       },
//       {
//         heading: "Databases",
//         content: "MongoDB, PostgreSQL, MySQL, SQL Server",
//       },
//       {
//         heading: "Concepts",
//         content: "REST APIs, MVC, OOP, SOLID, Design Patterns",
//       },
//       {
//         heading: "DevOps",
//         content: "Docker, Git, GitHub, CI/CD",
//       },
//     ],
//   },
//   // {
//   //   icon: GraduationCap,
//   //   title: 'Education',
//   //   items: [
//   //     "Bachelor's Degree in Computer Science",
//   //     'Zagazig University – Faculty of Engineering',
//   //   ]
//   // },
//   {
//     icon: Briefcase,
//     title: "Experience",
//     items: [
//       {
//         role: "Backend Developer",
//         company: "Pitches Booking Startup (Yalla Play)",
//         location: "Remote",
//         responsibilities: [
//           "Led backend architecture of a sports pitch booking platform built to scale to 500+ concurrent users using NestJS with a layered Controller–Service–Repository architecture.",
//           "Designed the PostgreSQL database schema from scratch, covering users, pitches, schedules, bookings, and payments with proper normalization, indexing, Prisma ORM, and Neon.",
//           "Built a dynamic slot generation engine that computes available time slots in real time from schedule rules, eliminating the need for a dedicated slots table.",
//           "Engineered a secure authentication system using JWT with token blacklisting and implemented global RBAC using APP_GUARD and a custom Public decorator.",
//           "Optimized high-traffic booking endpoints to achieve sub-100ms response times under simulated 500-user load through query optimization and indexing.",
//           "Documented APIs with Swagger UI and collaborated in an Agile environment through sprint planning, architecture discussions, and peer code reviews.",
//         ],
//       },
//     ],
//   }
// ]

// const tools = [
//   { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
//   { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
//   { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
//   { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
//   { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
//   { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
//   { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
//   { name: "Redux", icon: "https://cdn.simpleicons.org/redux" },
// ]

// const About = () => {
//   return (
//     <motion.section
//       id="about"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="w-full px-[12%] py-20 bg-white"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-sm sm:text-base font-semibold uppercase tracking-wide mb-2 mt-10 sm:mt-0 text-gray-600"
//           >
//             Introduction
//           </motion.p>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900"
//           >
//             About Me
//           </motion.h1>
//         </div>

//         {/* Introduction */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="max-w-3xl mx-auto mb-16"
//         >
//           <p className="text-lg sm:text-xl leading-relaxed font-ovo max-w-2xl mx-auto text-center text-md text-gray-500">
//             I'm a Full Stack Developer passionate about building reliable, secure, and scalable web applications. My experience includes designing backend architectures with Node.js and NestJS, developing RESTful APIs, optimizing PostgreSQL, MySQL, and MongoDB databases, and creating responsive frontend experiences with React and Next.js.          </p>
//         </motion.div>
//         {/* Info Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//           {infoList.map(({ icon: Icon, title, items }, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * idx, duration: 0.5 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 
//                 hover:border-gray-400 hover:shadow-xl hover:-translate-y-2
//                 transition-all duration-300 flex flex-col h-full"
//             >
//               {/* Icon & Title */}
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-14 h-14 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h3>
//               </div>
//               {/* Content */}
//               <div className="flex-1">
//                 {title === "Experience" ? (
//                   items.map((exp, i) => (
//                     <div key={i}>
//                       <h4 className="text-lg font-bold text-gray-900">
//                         {exp.role}
//                       </h4>

//                       <p className="text-sm text-gray-500 mb-4">
//                         {exp.company} | {exp.location}
//                       </p>

//                       <ul className="list-disc pl-5 space-y-2">
//                         {exp.responsibilities.map((item, idx) => (
//                           <li
//                             key={idx}
//                             className="text-gray-600 text-sm leading-relaxed"
//                           >
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))
//                 ) : (
//                   <ul className="space-y-4">
//                     {items.map((item, i) => (
//                       <li key={i}>
//                         {typeof item === "string" ? (
//                           <span className="text-gray-600">{item}</span>
//                         ) : (
//                           <>
//                             <h2 className="text-lg font-semibold text-gray-900">
//                               {item.heading}
//                             </h2>
//                             <p className="text-gray-600">{item.content}</p>
//                           </>
//                         )}
//                       </li>
//                     ))}
//                   </ul>)}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         {/* Tools Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto"
//         >
//           <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
//             Tools I Use
//           </h4>
//           <div className="flex flex-wrap justify-center lg:justify-start gap-6">
//             {tools.map(({ icon, name }, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.05 * idx }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 className="group relative"
//               >
//                 <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center p-3
//                   group-hover:border-gray-400 group-hover:shadow-lg transition-all duration-300">
//                   <img src={icon} alt={name} className="w-full h-full object-contain" />
//                 </div>

//                 {/* Tooltip */}
//                 <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300
//                   whitespace-nowrap">
//                   <span className="text-xs sm:text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-lg shadow-md">
//                     {name}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   )
// }

// export default About
"use client"

import { motion } from 'motion/react'
import { Code, Briefcase, ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const skillsData = {
  "Software Engineering": ["SOLID", "OOP", "Data Structures & Algorithms", "Design Patterns", "Clean Code", "Refactoring", "Problem Solving"],
  "System Design & Architecture": ["Layered Architecture", "MVC", "Modular Monolith", "Controller-Service-Repository Pattern", "RESTful API Design", "Scalability", "Performance Optimization", "Caching Fundamentals", "Asynchronous Processing"],
  "Frameworks & Libraries": ["NestJS", "Express.js", "ASP.NET Core", "React.js", "Next.js", "Redux"],
  "Programming Languages": ["TypeScript", "JavaScript (ES6+)", "C#", "C++", "SQL"],
  "Databases & Data Access": ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Mongoose", "Database Schema Design", "Relationships", "Indexing", "Query Optimization", "Transactions"],
  "API Development & Integration": ["REST APIs", "API Versioning", "Pagination", "Filtering & Sorting", "DTOs", "Request Validation", "Error Handling", "Swagger", "WebSockets", "Third-Party API"],
  "Security & Authentication": ["JWT", "OAuth 2.0", "Role-Based Access Control", "Authentication & Authorization", "Password Hashing (Bcrypt, argon2)", "Input Validation", "Rate Limiting", "CORS", "Secure Configuration"],
  "DevOps & Tools": ["Git", "GitHub", "Docker", "Docker Compose", "CI/CD Fundamentals", "Environment Configuration", "Linux Fundamentals", "Postman", "npm", "Database Migrations", "Application Logging"],
  "Software Development Practices": ["Agile / Scrum", "Git Branching Strategies", "Code Documentation", "Requirements Analysis", "Feature Implementation", "Maintainable Code", "Technical Documentation"]
}

const experienceData = [
  {
    role: "Software Engineer (Backend Developer)",
    company: "Pitches Booking Startup (Yalla Play)",
    location: "Remote",
    responsibilities: [
      "Architected the backend of a booking platform built to scale to 500+ concurrent users, using NestJS with a layered Controller-Service-Repository structure to isolate transport, business logic, and data access.",
      "Designed the PostgreSQL schema from scratch (users, pitches, schedules, bookings, payments) with normalization and indexing aligned to access patterns, using Prisma ORM on Neon cloud.",
      "Optimized high-traffic booking endpoints to sub-100ms response times under a simulated 500-user load via query analysis and targeted indexing.",
      "Documented all APIs with Swagger UI as the contract for consumers, and contributed to sprint planning, architecture reviews, and peer code reviews.",
    ],
  },
]

const tools = [
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
]

const SkillsCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const categories = Object.keys(skillsData);
  const previewCategories = categories.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 
        hover:border-gray-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
          <Code className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Skills</h3>
      </div>
      <div className="flex-1 space-y-4">
        {(isExpanded ? categories : previewCategories).map((category) => (
          <div key={category}>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {skillsData[category].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-6 flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors duration-200 border border-gray-200"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Show All Skills <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </motion.div>
  );
};

const ExperienceCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 
        hover:border-gray-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Experience</h3>
      </div>
      <div className="flex-1">
        {experienceData.map((exp, i) => (
          <div key={i}>
            <h4 className="text-lg font-bold text-gray-900">
              {exp.role}
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              {exp.company} | {exp.location}
            </p>
            <ul className={`list-disc pl-5 space-y-2 transition-all duration-300 ${isExpanded ? 'max-h-full' : 'max-h-48 overflow-hidden'}`}>
              {exp.responsibilities.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-600 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
            {!isExpanded && exp.responsibilities.length > 2 && (
              <div className="absolute bottom-16 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-6 flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors duration-200 border border-gray-200"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Read More <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-[12%] py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base font-semibold uppercase tracking-wide mb-2 mt-10 sm:mt-0 text-gray-600"
          >
            Introduction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900"
          >
            About Me
          </motion.h1>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg sm:text-xl leading-relaxed font-ovo max-w-2xl mx-auto text-center text-md text-gray-600">
            I'm a Software Engineer passionate about building reliable, secure, and scalable web applications. With a Bachelor's Degree in Computer Science from Zagazig University – Faculty of Engineering, I combine strong academic foundations with hands-on experience to deliver high-quality software solutions.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <SkillsCard />
          <ExperienceCard />
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Tech Stack
          </h4>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {tools.map(({ icon, name }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * idx }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="w-16 sm:w-18 h-16 sm:h-18 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center p-3
                  group-hover:border-gray-400 group-hover:shadow-lg transition-all duration-300">
                  <img src={icon} alt={name} className="w-full h-full object-contain" />
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  whitespace-nowrap z-10">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-lg shadow-md border border-gray-200">
                    {name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About