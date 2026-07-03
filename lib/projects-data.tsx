export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    "id": "1",
    "title": "StudyNotion",
    "slug": "studynotion-edtech-platform",
    "description": "A fully functional EdTech platform that enables users to create, consume, and rate educational content.",
    "detailedDescription": "StudyNotion is a comprehensive EdTech platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It empowers instructors to create, manage, and sell courses, while giving students a seamless learning experience. It features secure OTP-based authentication, Razorpay payment integration, video content hosted via Cloudinary, course progress tracking, and a robust rating and review system.",
    "image": "/studyNotion.jpg",
    "tags": ["EdTech", "MERN", "Full-Stack", "E-learning", "Education"],
    "status": "active",
    "techStack": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Redux Toolkit",
      "Razorpay",
      "Cloudinary"
    ],
    "features": [
      "Secure OTP-based email authentication and password reset",
      "Role-Based Access Control (Student, Instructor, Admin)",
      "Course builder dashboard for instructors to create and manage sections/subsections",
      "Secure checkout and cart management with Razorpay integration",
      "Cloudinary integration for scalable video and image media uploads",
      "Student dashboard with course progress tracking and video playback",
      "Course rating and review system"
    ],
    "learningOutcomes": [
      "Full-stack EdTech application development with the MERN stack",
      "Advanced frontend state management using React Redux Toolkit",
      "Integrating third-party payment gateways (Razorpay) in a Node.js environment",
      "Handling, compressing, and storing media in the cloud using Cloudinary API",
      "Implementing complex MongoDB schema relationships (Users, Courses, Categories, Reviews)",
      "Creating secure OTP-based authentication and authorization flows"
    ],
    "links": {
      "visit": "https://studynotion-frontend-hszz.onrender.com/",
      "github": "https://github.com/surajbuild/studynotion",
      "howIBuilt": ""
    },
    "author": "Suraj Kumar",
    "authorAvatar": "/superman.jpg"
  },
  {
    "id": "2",
    "title": "Paste App",
    "slug": "paste-app",
    "description": "A fast and responsive React application for creating, managing, and viewing text snippets.",
    "detailedDescription": "Paste App is a frontend utility application built with React and Vite that allows users to seamlessly save and manage text snippets (pastes). It features robust state management using Redux Toolkit, client-side routing with React Router, and data persistence using the browser's Local Storage. Users can create new pastes, view a list of all saved pastes, edit existing ones, and delete them, all while receiving real-time toast notifications.",
    "image": "/pasteApp.jpg",
    "tags": ["React", "Frontend", "Redux", "Utility", "Vite"],
    "status": "active",
    "techStack": [
      "React",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Router",
      "Local Storage"
    ],
    "features": [
      "Create, read, update, and delete (CRUD) text pastes",
      "Dynamic routing to view individual paste details (e.g., /pastes/:id)",
      "Data persistence across browser sessions using Local Storage",
      "Duplicate prevention system for checking existing paste titles and content",
      "Interactive toast notifications for user feedback on actions",
      "Responsive layout configured with Tailwind CSS"
    ],
    "learningOutcomes": [
      "Managing global application state using Redux Toolkit (slices, actions, reducers)",
      "Persisting Redux state to the browser's Local Storage",
      "Implementing dynamic client-side routing with React Router DOM",
      "Handling conditional updates and array manipulations within Redux state",
      "Setting up and optimizing a React application with Vite"
    ],
    "links": {
      "visit": "https://paste-app-cyan-three.vercel.app",
      "github": "https://github.com/surajbuild/pasteapp",
      "howIBuilt": "",
    },
    "author": "Suraj Kumar",
    "authorAvatar": "/superman.jpg"
  },
  {
    "id": "3",
    "title": "FridgeMart SQL",
    "slug": "fridgemart-sql",
    "description": "A modern, full-stack e-commerce platform for refrigerator sales built with React, Node.js, Express, and MySQL.",
    "detailedDescription": "FridgeMart SQL is a comprehensive full-stack e-commerce web application dedicated to appliance sales. Built with a React frontend and a Node.js/Express backend powered by a MySQL relational database, it features secure JWT authentication, a persistent shopping cart, order tracking, and a dedicated role-based admin dashboard for managing users, inventory, and order statuses.",
    "image": "/FridgeMart.jpg",
    "tags": ["E-commerce", "Full-Stack", "MySQL", "React", "Node.js"],
    "status": "active",
    "techStack": [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Tailwind CSS",
      "Vite",
      "JWT",
      "Framer Motion"
    ],
    "features": [
      "Secure user authentication and authorization using JWT and bcrypt",
      "Product catalog with brand and price browsing capabilities",
      "Persistent shopping cart and end-to-end order placement system",
      "Admin dashboard for comprehensive user, product, and order management",
      "Role-based access control (Admin vs. User middleware)",
      "Responsive, mobile-first UI with Framer Motion animations and Toast notifications"
    ],
    "learningOutcomes": [
      "Designing and interacting with relational databases using MySQL (Tables: users, products, orders, cart)",
      "Implementing JWT-based authentication and role-based access control routes",
      "Building full-stack e-commerce flows from product browsing to order management",
      "Developing a secure administrative dashboard for managing application data via RESTful APIs",
      "Creating responsive and animated React interfaces with Tailwind CSS and Framer Motion"
    ],
    "links": {
      "visit": "",
      "github": "https://github.com/surajbuild/fridgemartsql",
      "howIBuilt": ""
    },
    "author": "Suraj Kumar",
    "authorAvatar": "/superman.jpg"
  },
  {
    "id": "4",
    "title": "SiteLense AI",
    "slug": "sitelense-ai",
    "description": "An AI-powered website intelligence platform that analyzes websites and delivers actionable insights on performance, SEO, technology stack, security, and user experience.",
    "detailedDescription": "SiteLense AI is a modern web intelligence platform that helps developers, founders, and businesses understand and improve their websites. By simply entering a URL, users receive a detailed AI-generated report covering SEO optimization, performance metrics, technology stack detection, security analysis, accessibility checks, and user experience recommendations. The platform transforms complex website data into clear, actionable insights, enabling users to make data-driven improvements quickly and efficiently.",
    "image": "/aiAnalyzer.jpg",
    "tags": [
      "AI",
      "SaaS",
      "Website Analysis",
      "SEO",
      "Full-Stack"
    ],
    "status": "active",
    "techStack": [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "AI APIs",
      "REST APIs",
      "Vercel"
    ],
    "features": [
      "AI-powered website analysis and optimization recommendations",
      "Automatic technology stack detection and reporting",
      "SEO audit with detailed improvement suggestions",
      "Performance evaluation using modern web metrics",
      "Security and website health assessment",
      "Accessibility and mobile responsiveness analysis",
      "Comprehensive website scoring system",
      "Interactive dashboard with detailed analytics",
      "Real-time URL-based website inspection",
      "Professional and responsive user interface"
    ],
    "learningOutcomes": [
      "Built a production-ready AI SaaS application using Next.js and TypeScript",
      "Integrated AI APIs to generate intelligent website insights",
      "Developed scalable frontend and backend architectures",
      "Implemented advanced data analysis and reporting workflows",
      "Enhanced understanding of SEO, web performance, and security best practices",
      "Created responsive and interactive user interfaces with Tailwind CSS",
      "Learned deployment, optimization, and monitoring on Vercel",
      "Designed systems that transform raw website data into actionable intelligence"
    ],
    "links": {
      "visit": "https://sitelense-ai.vercel.app",
      "github": "https://github.com/surajbuild/ai-analyzer-.git",
      "howIBuilt": ""
    },
    "author": "Suraj Kumar",
    "authorAvatar": "/superman.jpg"
  }

]

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(slug: string | undefined | null): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}