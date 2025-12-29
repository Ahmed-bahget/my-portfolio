"use client"

import { motion } from 'framer-motion'
import { Code, GraduationCap, Briefcase } from 'lucide-react'
import React from 'react'

const infoList = [
  {
    icon: Code,
    title: 'Skills',
    items: [
      'Languages: JavaScript, TypeScript, SQL',
      'Backend: Node.js, Express.js, NestJS',
      'Frontend: React.js, Redux, Next.js',
      'Styling: HTML, CSS, Tailwind CSS',
      'Databases: MongoDB, PostgreSQL, MySQL, SQL Server',
      'Concepts: REST APIs, MVC, OOP, SOLID, Design Patterns',
      'DevOps: Docker, Git, GitHub, CI/CD'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Education',
    items: [
      "Bachelor's Degree in Computer Science",
      'Zagazig University – Faculty of Engineering',
    ]
  },
  {
    icon: Briefcase,
    title: 'Experience',
    items: [
      'Full Stack / Backend Developer (Freelance)',
      '• Designed RESTful APIs using Node.js, Express.js, React.js, and Next.js',
      '• Developed scalable backend services with MongoDB, PostgreSQL, MySQL'
    ]
  }
]

const tools = [
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "Redux", icon: "https://cdn.simpleicons.org/redux" },
]

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
            className="text-sm sm:text-base font-semibold uppercase tracking-wide mb-2 mt-10 sm:mt-0 text-gray-600"
          >
            Introduction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg sm:text-xl leading-relaxed font-ovo max-w-2xl mx-auto text-center text-md text-gray-500">
            I'm a fullstack developer with experience in Node.js, MongoDB, React.js, Redux, and Next.js. I build secure, maintainable, and scalable applications with modern web technologies.
          </p>
        </motion.div>
        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {infoList.map(({ icon: Icon, title, items }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 
                hover:border-gray-400 hover:shadow-xl hover:-translate-y-2
                transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h3>
              </div>
              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
            Tools I Use
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {tools.map(({ icon, name }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * idx }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative"
              >
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center p-3
                  group-hover:border-gray-400 group-hover:shadow-lg transition-all duration-300">
                  <img src={icon} alt={name} className="w-full h-full object-contain" />
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  whitespace-nowrap">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-lg shadow-md">
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
