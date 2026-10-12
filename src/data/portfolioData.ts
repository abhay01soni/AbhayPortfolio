export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: "Full Stack" | "Frontend" | "Backend";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  content?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Abhay Soni",
    initials: "AS",
    headline: "Turning ideas into digital experiences.",
    shortIntro:
      "I'm a Computer Science Engineering student and aspiring full-stack developer, passionate about building modern, scalable, and user-friendly web applications using the MERN stack.",
    statusBadge: "Open to new opportunities",
    email: "abhaysoni8726@gmail.com",
    location: "India",
    resumeUrl: "/resume.pdf",
    aboutBio: [
      "Hello! I'm Abhay, a Computer Science Engineering student with an obsession for creating exceptional digital products. My journey in software engineering started when I built my first interactive web application and discovered the satisfaction of transforming lines of code into engaging user experiences.",
      "Fast-forward to today, I focus on engineering robust full-stack applications with the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. I thrive at the intersection of clean architecture, delightful user interfaces, and high-performance server logic.",
      "When I'm not coding, you can find me diving into open-source repositories, exploring system design concepts, experimenting with modern UI animations, or writing technical guides for fellow developers."
    ],
    skills: {
      languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / Sass", "SQL", "C++"],
      frameworks: ["React.js", "Next.js (App Router)", "Node.js", "Express.js", "Tailwind CSS", "Redux Toolkit"],
      databases: ["MongoDB & Mongoose", "PostgreSQL", "MySQL", "Redis"],
      tools: ["Git & GitHub", "RESTful APIs", "Postman", "Docker", "Vercel", "Vite", "Linux"]
    }
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
      ariaLabel: "Visit Abhay Soni on GitHub"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
      ariaLabel: "Visit Abhay Soni on LinkedIn"
    },
    {
      name: "X/Twitter",
      url: "https://x.com",
      icon: "twitter",
      ariaLabel: "Visit Abhay Soni on X (Twitter)"
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "instagram",
      ariaLabel: "Visit Abhay Soni on Instagram"
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com",
      icon: "stackoverflow",
      ariaLabel: "Visit Abhay Soni on Stack Overflow"
    }
  ] as SocialLink[],

  experiences: [
    {
      id: "exp-1",
      role: "Full-Stack Developer Intern",
      company: "TechSphere Solutions",
      companyUrl: "https://example.com",
      period: "Jan 2024 - Present",
      location: "Remote",
      description: [
        "Architect and implement scalable full-stack features using React, Next.js, Node.js, and MongoDB, resulting in a 35% reduction in page load latency.",
        "Engineer resilient REST APIs and secure JWT token authentication with role-based authorization for multi-tenant users.",
        "Refactor legacy client components to Next.js App Router Server Components, optimizing Core Web Vitals and SEO performance.",
        "Collaborate in cross-functional agile sprints, participating actively in peer code reviews and automated CI/CD deployment pipelines."
      ],
      skills: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "exp-2",
      role: "Frontend Developer Intern",
      company: "Nexus Digital Labs",
      companyUrl: "https://example.com",
      period: "Jul 2023 - Dec 2023",
      location: "Bengaluru, India",
      description: [
        "Developed responsive user interfaces and data-driven dashboards using React, TypeScript, and Tailwind CSS for 10k+ monthly active users.",
        "Integrated central state management with Redux Toolkit, decreasing redundant API fetch cycles by 40% and enhancing UI responsiveness.",
        "Conducted thorough accessibility audits to ensure full WCAG AA standard compliance across mobile, tablet, and desktop displays.",
        "Authored reusable UI component kits with strict typing and comprehensive prop validation."
      ],
      skills: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "REST APIs"]
    },
    {
      id: "exp-3",
      role: "Open Source Lead & Tech Mentor",
      company: "Developer Student Club",
      companyUrl: "https://example.com",
      period: "Aug 2022 - Jun 2023",
      location: "Campus Chapter",
      description: [
        "Led hands-on workshops on MERN stack web development, Git version control, and modern JavaScript fundamentals for 250+ aspiring engineers.",
        "Mentored student teams building campus community tools, providing design feedback and debugging assistance.",
        "Maintained open-source repository templates and documentation guides for community hackathon participants."
      ],
      skills: ["JavaScript", "React", "Node.js", "Git", "Community Mentorship"]
    }
  ] as Experience[],

  projects: [
    {
      id: "project-1",
      title: "DevFlow Collaboration Hub",
      description:
        "A full-stack project workspace for engineering teams with real-time Kanban boards, markdown docs, and instant team chat.",
      longDescription:
        "Engineered with Next.js, Node.js, and MongoDB. Features live task synchronization using Socket.io, role-based project permissions, interactive comment threads, and automated GitHub activity feed webhooks.",
      tags: ["Next.js", "React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.devflow.app",
      featured: true,
      category: "Full Stack"
    },
    {
      id: "project-2",
      title: "PulseAnalytics Platform",
      description:
        "Modern SaaS telemetry and analytics dashboard featuring interactive charts, funnel tracking, and real-time visitor insights.",
      longDescription:
        "A lightweight analytics dashboard built to visualize user retention, page performance, and geographic distribution without compromising user privacy. Built with React, TypeScript, Express, and Chart.js.",
      tags: ["React", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://pulse.analytics-demo.app",
      featured: true,
      category: "Full Stack"
    },
    {
      id: "project-3",
      title: "CineVerse Media Discovery",
      description:
        "Sleek movie and streaming discovery application with fluid animations, curated collections, and personalized bookmarks.",
      longDescription:
        "Utilizes TMDB API with Next.js incremental static regeneration, smooth micro-interactions, responsive trailers player, and an intelligent recommendation algorithm based on user genre preferences.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "TMDB API", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://cineverse.explore.app",
      featured: true,
      category: "Frontend"
    },
    {
      id: "project-4",
      title: "ShopSphere E-Commerce Engine",
      description:
        "Full-featured headless MERN e-commerce application with dynamic product filtering, shopping cart, and Stripe checkout.",
      longDescription:
        "Complete shopping experience with administrative inventory management, real-time stock deductions, order status emails, and webhooks integration for instant payment verification.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://shopsphere.store.app",
      featured: false,
      category: "Full Stack"
    },
    {
      id: "project-5",
      title: "CodeVault Snippet Manager",
      description:
        "Developer productivity tool to organize, tag, and search code snippets with syntax highlighting and quick clipboard sharing.",
      longDescription:
        "Fast client-first utility built with React, TypeScript, and IndexedDB for offline-first resilience. Includes custom language themes and keyboard shortcuts.",
      tags: ["React", "TypeScript", "Tailwind CSS", "IndexedDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://codevault.snippet.app",
      featured: false,
      category: "Frontend"
    },
    {
      id: "project-6",
      title: "CloudTask REST API",
      description:
        "High-throughput task scheduling microservice with Redis caching, rate limiting, and automated Swagger/OpenAPI docs.",
      longDescription:
        "Dockerized backend service handling asynchronous background jobs, secure authentication, and webhook notifications with comprehensive Jest unit test coverage.",
      tags: ["Node.js", "Express.js", "Redis", "Docker", "Jest"],
      githubUrl: "https://github.com",
      liveUrl: "https://api.cloudtask.dev",
      featured: false,
      category: "Backend"
    }
  ] as Project[],

  blogPosts: [
    {
      id: "post-1",
      title: "Demystifying Server Actions and Data Fetching in Next.js App Router",
      excerpt:
        "A practical walkthrough of how Server Components and Server Actions eliminate client-side boilerplate while keeping data mutations secure and ultra-fast.",
      date: "Oct 4, 2026",
      readTime: "6 min read",
      tags: ["Next.js", "React", "Architecture"],
      slug: "demystifying-server-actions-nextjs",
      content:
        "Next.js App Router introduces a paradigm shift in how React applications interact with backend data. By combining React Server Components (RSC) with Server Actions, developers can colocate mutation logic alongside UI components without having to manually construct boilerplate API route handlers. In this guide, we break down caching layers, revalidation patterns, and optimistic UI updates for production applications."
    },
    {
      id: "post-2",
      title: "Mastering State Management: Zustand vs. Redux Toolkit in 2026",
      excerpt:
        "Comparing developer ergonomics, bundle impact, TypeScript inference, and asynchronous workflows when deciding your frontend state strategy.",
      date: "Sep 18, 2026",
      readTime: "5 min read",
      tags: ["React", "TypeScript", "State Management"],
      slug: "zustand-vs-redux-toolkit-2026",
      content:
        "Choosing the right state management tool can make or break a team's velocity. While Redux Toolkit continues to offer unmatched predictability and DevTools maturity for enterprise architectures, lightweight primitives like Zustand have rapidly gained traction due to their zero-boilerplate API and seamless TypeScript integration. We explore real-world scenarios to help you pick the best tool."
    },
    {
      id: "post-3",
      title: "Building Real-Time Web Applications with Socket.io and Node.js",
      excerpt:
        "Architecting resilient bidirectional event pipelines: connection lifecycles, horizontal scaling with Redis adapters, and reconnection strategies.",
      date: "Aug 29, 2026",
      readTime: "8 min read",
      tags: ["Node.js", "WebSockets", "Backend"],
      slug: "building-real-time-apps-socketio-nodejs",
      content:
        "Real-time functionality is no longer a luxury—it's expected in modern web experiences. Whether you are building collaborative whiteboards, instant chat feeds, or live notification alerts, understanding WebSockets under high concurrency is crucial. This post covers heartbeats, Redis pub/sub backplanes, and graceful fallback handling in Express/Node.js servers."
    }
  ] as BlogPost[],

  skillCategories: [
    {
      title: "Front-end",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux Toolkit"
      ]
    },
    {
      title: "Back-end",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.io",
        "JWT Auth",
        "GraphQL"
      ]
    },
    {
      title: "Database",
      skills: [
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
        "MySQL",
        "Redis"
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "Vercel",
        "Linux",
        "CI/CD",
        "AWS"
      ]
    }
  ] as SkillCategory[],

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]
};
