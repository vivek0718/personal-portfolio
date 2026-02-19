
import React from 'react';
import { Education } from './types';

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/vivek0718', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vivekvg07', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
  { name: 'Instagram', url: 'https://www.instagram.com/vivek_15.75/', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
];

export const PROJECTS = [
  {
    id: '1',
    title: 'Bakery Management System',
    description: 'A full-stack web application designed to streamline order and inventory management for a bakery business. The system enables real-time tracking of orders, stock updates, and secure data management.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    imageUrl: 'https://res.cloudinary.com/dlavjizfs/image/upload/v1771492089/Screenshot_2026-02-19_143733_hyzigf.png',
    demoUrl: 'https://srigurubakery.netlify.app/',
  },
  {
    id: '2',
    title: 'Online Voting Portal',
    description: 'A secure, role-based online voting platform designed to streamline elections and ensure transparency, reliability, and privacy for all users',
    tags: ['Spring Boot', 'React', 'MySQL','Tailwind CSS','Rest api'],
    imageUrl: 'https://res.cloudinary.com/dlavjizfs/image/upload/v1771492537/Screenshot_2026-02-19_144437_dxoo7k.png',
    demoUrl: 'https://elitevote.netlify.app/',
  },
  {
    id: '3',
    title: 'Online Quiz Platform',
    description: 'A comprehensive online quiz platform that allows users to create, take, and manage quizzes with real-time results and analytics.',
    tags: ['Spring Boot', 'React', 'MySQL','Tailwind CSS','Rest api'],
    imageUrl: 'https://res.cloudinary.com/dlavjizfs/image/upload/v1771494080/Screenshot_2026-02-19_151044_wy7bui.png',
    githubUrl: '#',
    demoUrl: '#',
  },
];

export const SKILLS = [
  { name: 'Java', icon: '☕', category: 'languages', proficiency: 90 },
  { name: 'HTML', icon: '🌐', category: 'languages', proficiency: 95 },
  { name: 'CSS', icon: '🎨', category: 'languages', proficiency: 90 },
  { name: 'JavaScript', icon: '📜', category: 'languages', proficiency: 88 },
  { name: 'TypeScript', icon: '📘', category: 'languages', proficiency: 75 },
  { name: 'React', icon: '⚛️', category: 'frontend', proficiency: 75 },
  { name: 'Tailwind CSS', icon: '💠', category: 'frontend', proficiency: 75 },
  { name: 'Spring Boot', icon: '🍃', category: 'backend', proficiency: 80 },
  { name: 'REST API', icon: '🔗', category: 'backend', proficiency: 75 },
  { name: 'MySQL', icon: '🗄️', category: 'backend', proficiency: 88 },
  { name: 'Git', icon: '🌿', category: 'tools', proficiency: 80 },
  { name: 'Docker', icon: '🐳', category: 'tools', proficiency: 70 },
];


export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Technology in Computer science and data science',
    institution: 'Kakinada Institute Of Engineering And Technology',
    period: '2022 - 2026',
    score: 'GPA: 7.3',
    tags: ['Data Structures','Web Development', 'Database Systems']
  },
  {
    degree: 'Intermediate',
    institution: 'Government Junior College',
    period: '2020-2022',
    score: 'GPA: 8.2',
    tags: ['Maths', 'Physics', 'Chemistry']
  }
];

export const USER_INFO = {
  name: 'Vivek Vardhan Geddamuri',
  title: 'Aspiring Full Stack Developer',
  location: 'Visakhapatnam, AP',
  email: 'vivekvardhangeddamuri@gmail.com',
  phone: '+918106347915',
  resume: 'https://res.cloudinary.com/dlavjizfs/image/upload/v1771497357/Screenshot_2026-02-19_160333_csj1fe.png', 
  certifications: [
    'Google Ads Apps Certification(Google)',
    'Prompt Engineering (IBM)',
    'Java Programming (Eduskills)',
    'MySql Database (LetsUpgrade)',
  ],
  profileImage: 'https://res.cloudinary.com/dlavjizfs/image/upload/v1753418382/vivek_pp_cqgoox.jpg'
};

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_4u7vm74', 
  TEMPLATE_ID: 'template_e93tdo3', 
  PUBLIC_KEY: 'zhW95gozIhSS-XRBo', 
};

export const EXPERIENCE = [
  {
  title: 'Full Stack Developer Intern',
  company: 'Eduskills Foundation',
  period: 'May 2024 – July 2024',
  description: 'As a Full Stack Developer Intern at Eduskills Foundation, I contributed to building and deploying web systems focused on AI-powered solutions for local language technologies. This role involved hands-on development with modern frameworks, API integration, and collaborative workflows to enhance system performance and user interfaces.',
  points: [
    'Developed and integrated RESTful APIs using Spring Boot, improving system response time by 35%.',
    'Built reusable React components and responsive interfaces, enhancing user experience and reducing UI load by 40%.',
    'Implemented structured Git workflows, cutting integration conflicts by 40% and improving team velocity.',
    'Contributed to the deployment of an AI-powered production web system for local language tech initiatives.'
  ]
},
  {
    title: 'Foundations of Modern Machine Learning Intern',
    company: 'I-Hub Data, IIIT Hyderabad',
    period: 'August 2023 – May 2024',
    description: 'This program, offered by iHub-Data at IIIT Hyderabad, provided a strong foundation in modern machine learning concepts, tools, and techniques. It was designed to bridge academic theory with real-world AI applications. Over the course of several months, I learned how to design, implement, and evaluate machine learning models using Python and popular ML libraries.',
    points: [
      'Gained hands-on experience through projects and practical assignments',
      'Developed a strong grasp of ML algorithms and performance tuning',
      'Secured Grade A, indicating high-level performance and understanding'
    ]
  }
];

export const ABOUT_ME = {
  heading: "Building Scalable Web Solutions ",
  content1: "I’m a Java Full Stack Developer skilled in Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and React, focused on creating scalable and user-friendly web applications. I write clean, efficient code and enjoy solving real-world problems through technology. Experienced in REST APIs, responsive UI, and database design, I bring both logic and creativity to my work. I’m seeking opportunities to grow, collaborate, and build impactful digital solutions.",
  focusAreas: [
    {
      title: "Web Development",
      description: "Creating responsive and interactive web applications using Java, Spring Boot, React, HTML, CSS, and JavaScript.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Backend Development",
      description: "Designing and implementing RESTful APIs, managing databases with MySQL, and ensuring efficient server-side performance using Spring Boot.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    }
  ]
};