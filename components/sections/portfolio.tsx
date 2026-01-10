"use client"

import { useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ExternalLink, Github, Sparkles, X } from "lucide-react"

const projectsData = [
  // Featured / High-Tech (AI, Data & IoT)
  {
    id: "sigma-umkm",
    title: "SIGMA-UMKM",
    category: "AI & Data",
    role: "System Architect & Data Engineer",
    featured: true,
    tech: ["Apache Cassandra", "MongoDB", "Docker", "Next.js 16", "TypeScript"],
    tags: ["Polyglot Persistence", "NoSQL", "Architecture"],
    image: "/placeholder.svg",
    gridSpan: "tall",
    parallaxSpeed: 0.3,
    context: "Centralized monitoring ecosystem supporting SDGs 8, tracking the legality of Indonesian MSMEs",
    problem: "Handling distinct data workloads: dynamic geospatial profiles (flexible schema) and high-velocity financial audit trails (time-series data).",
    solution: "Architected a hybrid database system using MongoDB for geospatial flexibility and Apache Cassandra for ultra-fast financial audit trails. Optimized partition keys for sub-millisecond retrieval.",
    features: ["Polyglot Persistence Architecture", "Sub-millisecond Time-Series Queries", "RBAC Security", "Zod API Validation"],
    github: "https://github.com/codewara/SIGMA-UMKM",
  },
  {
    id: "smart-batik",
    title: "Smart Batik Lens",
    category: "AI & Data",
    role: "ML Engineer & Dataset Curator",
    featured: true,
    tech: ["Python", "YOLOv8", "TFLite", "Flutter", "Computer Vision"],
    tags: ["Computer Vision", "Flutter", "YOLOv8"],
    image: "/batik-detection-app.jpg",
    gridSpan: "tall",
    parallaxSpeed: 0.3,
    context: "Final Project for Computer Vision (IK542) course",
    problem: "Existing batik apps use Image Classification, which fails when the fabric is folded, curved on a body, or has poor lighting.",
    solution: "Shifted from classification to detection using YOLOv8 Nano, allowing the app to localize multiple motifs in a single frame regardless of the object's shape. Quantized the model to INT8 (~6MB, 70% reduction) and integrated into Flutter using tflite_flutter.",
    features: ["Real-time Detection @ 15+ FPS", "INT8 Model Quantization (70% size reduction)", "900+ Geometrically Augmented Images", "Mobile Optimization"],
    github: "https://github.com/beginnener/CompVis_SmartBatikLens",
  },
  // Professional & Commercial Projects
  {
    id: "ailearn",
    title: "AILearn Pancasila",
    category: "Web Eng",
    role: "Full Stack Engineer",
    tech: ["Laravel", "AI Integration", "MySQL", "Server Management"],
    tags: ["EdTech", "AI Chatbot", "Full-Stack"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.25,
    context: "Live commercial project via Xtrahera Innovations (Aug 2025). AI-powered civic education platform strengthening national values.",
    problem: "Students lack instant access to tutors for Pancasila-related questions. Needed an interactive, always-available learning assistant.",
    solution: "Integrated LLM-based chatbot for instant, context-aware responses about Pancasila. Built real-time discussion forums. Managed live server deployment.",
    features: ["AI Chatbot Integration", "Real-time Forums", "Live Server Deployment", "High Availability Setup"],
  },
  {
    id: "cocomm",
    title: "CoComm (PT Rekayasa Industri)",
    category: "Web Eng",
    role: "Frontend Developer",
    tech: ["Laravel (Blade)", "Next.js", "Tailwind CSS", "Figma"],
    tags: ["Enterprise", "Frontend", "BUMN Client"],
    image: "/placeholder.svg",
    gridSpan: "wide",
    parallaxSpeed: 0.25,
    context: "Professional Consultation Project (Prokon) for major State-Owned Enterprise (Mar–May 2025)",
    problem: "Digitizing strict, manual corporate document approval workflows into user-friendly dashboard while adhering to enterprise design standards.",
    solution: "Translated high-fidelity Figma prototypes into pixel-perfect components. Built modular frontend using Next.js/Tailwind CSS. Collaborated in Agile team of 5.",
    features: ["Figma-to-Code Translation", "Modular Architecture", "Enterprise Design Compliance", "Approval Workflow Logic"],
  },
  {
    id: "mayazaskia",
    title: "Mayazaskia (E-Commerce)",
    category: "Web Eng",
    role: "Full Stack Developer",
    tech: ["Laravel", "MySQL", "E-Commerce", "Payment Gateway"],
    tags: ["E-Commerce", "Full-Stack", "Laravel"],
    image: "/ecommerce-store.png",
    gridSpan: "normal",
    parallaxSpeed: 0.35,
    context: "Live commercial project via Xtrahera Innovations (Jun 2025). Beauty e-commerce platform.",
    problem: "Building high-performance beauty e-commerce with focus on mobile conversion and secure checkout.",
    solution: "Optimized mobile responsiveness and streamlined checkout flow to reduce cart abandonment. Built dynamic product CMS for client management.",
    features: ["Mobile Optimized Checkout", "Dynamic Product CMS", "Secure Payment Integration", "Inventory Management"],
  },
  {
    id: "p2m-web",
    title: "Sistem Informasi Kependudukan (P2M)",
    category: "Web Eng",
    role: "Full-Stack Developer",
    tech: ["PHP", "Web Development", "Information Systems", "Database"],
    tags: ["Social Impact", "Web Dev", "Digital Transformation"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Community Development Project - P2M Kemakom UPI at Indragiri Village (Jul 2025)",
    problem: "Village administration system to digitize manual population data management and improve data accessibility.",
    solution: "Built comprehensive web system for managing village population data with user-friendly interface and secure storage. Implemented RBAC security.",
    features: ["Population Database", "Admin Dashboard", "Data Analytics", "Report Generation", "RBAC Security"],
    github: "https://github.com/rayplv/WebKependudukanP2M",
  },
  
  // Experimental & Academic Projects
  {
    id: "xkw",
    title: "XKW (Twitter Clone)",
    category: "Web Eng",
    role: "Full Stack Developer",
    tech: ["Next.js", "MongoDB", "TypeScript", "Mongoose"],
    tags: ["Next.js", "NoSQL", "Scalability"],
    image: "/social-media-app-interface.png",
    gridSpan: "normal",
    parallaxSpeed: 0.35,
    context: "Final Project for Non-Relational Databases (IK380)",
    problem: "Modeling complex social interactions (Nested Replies, Retweets, Follow graphs) which are computationally expensive in traditional SQL.",
    solution: "Utilized MongoDB's flexible schema with the Embedding Pattern for comment threads to optimize read performance. Implemented optimistic UI updates.",
    features: ["Nested Comments Architecture", "Optimistic UI", "Infinite Scroll", "Follow System"],
    github: "https://github.com/hafsahha/xkw",
  },
  {
    id: "doxxer",
    title: "DOXXER Search Engine",
    category: "AI & Data",
    role: "Algorithm Engineer",
    tech: ["Python", "NetworkX", "BFS/DFS", "Graph Theory", "Selenium", "Flask"],
    tags: ["Algorithm", "Graph Theory", "Crawler"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Data Structures & Algorithms project",
    problem: "Understanding and visualizing web node relationships and organizational website dependencies.",
    solution: "Built graph-based search engine implementing BFS/DFS algorithms to crawl and visualize web node relationships. Semantic mapping between URLs.",
    features: ["Web Crawling with Selenium", "Graph Traversal (BFS/DFS)", "Node Visualization", "Route Mapping"],
    github: "https://github.com/hafsahha/DOXXER",
  },
  {
    id: "file-management",
    title: "File Management System (OS Simulator)",
    category: "Web Eng",
    role: "System Programmer",
    tech: ["Electron.js", "Node.js", "JavaScript", "Operating Systems"],
    tags: ["System Programming", "Electron.js"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "OS Simulation Project for Operating Systems (IK380) course",
    problem: "Demonstrating memory allocation and file operations logic in an OS environment with visual feedback.",
    solution: "Built Electron.js GUI simulating OS file management, demonstrating Contiguous, Linked, and Indexed allocation strategies.",
    features: ["Memory Allocation Simulation", "File Operations", "Disk Block Visualization", "Fragmentation Handling"],
    github: "https://github.com/hafsahha/File-Management-System",
  },
  {
    id: "masakio",
    title: "MASAKIO (Culinary App)",
    category: "Web Eng",
    role: "Mobile & Backend Developer",
    tech: ["Flutter", "Node.js", "Express", "REST API"],
    tags: ["Flutter", "Backend", "API Design"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Recipe-sharing mobile application (Apr–Jun 2025)",
    problem: "Creating a seamless recipe discovery and sharing platform with clean architecture.",
    solution: "Built Flutter mobile app with Node.js/Express backend API. Clean separation of concerns with RESTful endpoint design.",
    features: ["Recipe Database", "User Authentication", "Recipe Sharing", "Search & Filter"],
    github: "https://github.com/hafsahha/MASAKIO",
  },
  {
    id: "ecoscha",
    title: "EcoSCha",
    category: "Creative",
    role: "Lead Developer & Product Manager",
    featured: true,
    tech: ["Gamification", "Web Dev", "Research", "UI/UX"],
    tags: ["PKM-RSH", "National Grant", "Gamification"],
    image: "/placeholder.svg",
    gridSpan: "wide",
    parallaxSpeed: 0.2,
    context: "National Grant Awardee (PKM-RSH 2025) - Ethnopedagogy-based environmental game platform",
    problem: "Low youth engagement in environmental conservation. Need to blend local wisdom (Sundanese values) with modern gamification.",
    solution: "Designed gameplay mechanics inspired by 'Werewolf' and 'Quizizz'. Conducted social humanities research to integrate Sundanese environmental values into game logic.",
    features: ["Gamification Mechanics", "Ethnopedagogy Research", "Environmental Awareness", "Community Engagement"],
  },
  {
    id: "forgotten-memory",
    title: "Forgotten Memory (Indie Game)",
    category: "Creative",
    role: "Game Artist & Designer",
    tech: ["Game Art", "Video Editing", "Storyboarding", "2D Graphics"],
    tags: ["Game Dev", "Art Direction", "Indie Game"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "COMPFEST 16 (Indie Game Ignite) - 2D adventure puzzle game (Aug–Sep 2024)",
    problem: "Creating an engaging narrative-driven indie game with original artistic vision.",
    solution: "Designed all original 2D characters and environments. Produced promotional trailer. Focused on atmosphere and emotional storytelling.",
    features: ["Original Character Design", "Environment Art", "Promotional Media", "Puzzle Mechanics"],
  },
  {
    id: "binbuddy",
    title: "BinBuddy",
    category: "Creative",
    role: "UI/UX Designer",
    tech: ["Figma", "UI/UX", "Prototyping", "Gamification"],
    tags: ["UI/UX", "Gamification", "Arkavidia"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Arkavidia Competition - Gamified waste management solution (Apr–May 2025)",
    problem: "Designing a gamified waste management app to increase youth participation in environmental sustainability.",
    solution: "Created high-fidelity Figma prototype focused on gamification mechanics and intuitive UX. Community-driven mission system.",
    features: ["Gamification Elements", "User Engagement Loops", "Visual Design System", "Interactive Prototypes"],
    figma: "https://www.figma.com/proto/pG69gtnWXwdPVW2ayGaShI/BinBuds",
  },
  {
    id: "campink",
    title: "Campink",
    category: "Web Eng",
    role: "Mobile Developer",
    tech: ["Flutter", "Mobile Design", "Dart"],
    tags: ["Flutter", "Mobile", "Marketplace"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Equipment rental mobile marketplace (Mar 2025)",
    problem: "Building a mobile rental platform with intuitive product browsing and cart management.",
    solution: "Developed Flutter app with product catalog, search, filtering, and cart functionality. Clean mobile-first design.",
    features: ["Product Catalog", "Search & Filter", "Shopping Cart", "Mobile Optimization"],
    github: "https://github.com/hafsahha/KELOMPOK67",
  },
  {
    id: "sports-facility",
    title: "Sports Facility Reservation",
    category: "Web Eng",
    role: "Web Developer",
    tech: ["PHP Native", "SQL", "Database Normalization"],
    tags: ["PHP", "Database Design", "Booking System"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Database Management (SBD) course project (May–Jun 2024)",
    problem: "Building a booking system with strict database integrity to manage facility schedules.",
    solution: "Designed highly normalized database schema focusing on referential integrity and avoiding data anomalies.",
    features: ["Facility Booking", "Schedule Management", "Database Normalization", "Conflict Prevention"],
    github: "https://github.com/hafsahha/Tugas-Besar-SBD",
  },
  {
    id: "paham-saham",
    title: "PahamSaham",
    category: "AI & Data",
    role: "Data Engineer",
    tech: ["Apache Airflow", "Docker", "MongoDB", "Pandas", "Python", "FastAPI"],
    tags: ["Data Engineering", "ETL", "Docker"],
    image: "/data-pipeline-dashboard.jpg",
    gridSpan: "wide",
    parallaxSpeed: 0.5,
    context: "Implementation for Data Management (IK575) and Non-Relational Databases (IK380) courses",
    problem: "Manual stock data analysis is inefficient. Needed a centralized, automated source of truth for Indonesian stock market (IDX) data.",
    solution: "Built containerized ETL pipeline using Apache Airflow with Docker. Developed Python scrapers for IDX data extraction, cleaned with Pandas, and stored in MongoDB. Exposed via FastAPI.",
    features: ["Containerized Orchestration (Airflow)", "Automated Daily DAGs", "Data Extraction & Transformation", "MongoDB Storage"],
    github: "https://github.com/hafsahha/PahamSaham",
  },
  {
    id: "pantanizz",
    title: "PantaniZz",
    category: "IoT",
    role: "Backend & IoT Engineer",
    featured: true,
    tech: ["Golang", "MQTT", "C++ (ESP32)", "PostgreSQL", "Flutter"],
    tags: ["IoT", "Golang", "MQTT", "Hardware"],
    image: "/iot-hydroponic-monitoring-dashboard.jpg",
    gridSpan: "tall",
    parallaxSpeed: 0.4,
    context: "End-to-end IoT ecosystem for automated hydroponic farming",
    problem: "Manual hydroponic monitoring is labor-intensive. Need real-time sensor data (pH, TDS, Temperature) aggregation and automated control.",
    solution: "Built Golang backend to handle concurrent sensor streams using Goroutines. Implemented MQTT protocol for low-latency hardware-to-app communication. ESP32 sensors send data to broker.",
    features: ["Goroutine-based Concurrency", "MQTT Protocol Integration", "Real-time Sensor Aggregation", "Automated Actuator Control", "Mobile Dashboard"],
    github: "https://github.com/hafsahha/pantanizz",
  },
  {
    id: "ailearn",
    title: "AILearn Pancasila",
    category: "AI & Data",
    role: "Full-Stack Developer",
    featured: false,
    tech: ["Next.js", "OpenAI API", "MySQL", "Tailwind CSS"],
    tags: ["NLP", "AI Integration", "Next.js"],
    image: "/ai-learning-platform.png",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Live production project via Xtrahera Innovations. Applied Natural Language Processing (IK522) concepts.",
    problem: "Providing instant, context-aware answers to students' questions about national values (Pancasila) without human tutors.",
    solution: "Integrated a Generative AI model via API with specific system prompts to act as a Civic Tutor. Deployed the full-stack application to a live VPS environment.",
    features: ["System Prompt Engineering", "Live VPS Deployment", "Intent Recognition", "Session Management"],
  },
  {
    id: "doxxer",
    title: "DOXXER Search Engine",
    category: "AI & Data",
    role: "Algorithm Engineer",
    tech: ["Python", "NetworkX", "BFS/DFS", "Graph Theory"],
    tags: ["Algorithm", "Python", "Graph Theory"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Data Structures & Algorithms project",
    problem: "Understanding and visualizing web node relationships and dependencies.",
    solution: "Built a graph-based search engine implementing BFS/DFS algorithms to crawl and visualize web node relationships.",
    features: ["Graph Crawling", "Node Visualization", "Pathfinding Algorithms"],
  },
  {
    id: "numerical-integral",
    title: "Numerical Integral Program",
    category: "AI & Data",
    role: "Computational Scientist",
    tech: ["Python", "SciPy", "NumPy", "Calculus"],
    tags: ["Computational Science", "Python"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Advanced Mathematics & Scientific Computing",
    problem: "Computing complex integrals with high precision for real-world applications.",
    solution: "Built a high-precision numerical integration tool using SciPy and NumPy for solving complex calculus problems.",
    features: ["Multiple Integration Methods", "High Precision Computation", "User-friendly Interface"],
  },

  // Web & Software Engineering
  {
    id: "maya-zaskia",
    title: "Maya Zaskia Official Store",
    category: "Web Eng",
    role: "Full-Stack Developer",
    featured: true,
    tech: ["Next.js", "MySQL", "Tailwind CSS", "Payment Gateway"],
    tags: ["E-Commerce", "Full-Stack", "Next.js"],
    image: "/ecommerce-store.png",
    gridSpan: "normal",
    parallaxSpeed: 0.35,
    context: "Live commercial project via Xtrahera Innovations. E-Business (IK430) strategies implementation.",
    problem: "Building a high-performance beauty e-commerce platform with focus on mobile conversion and secure checkout.",
    solution: "Focused on mobile responsiveness and a streamlined checkout flow to reduce cart abandonment. Built a dynamic product management system (CMS) for the client.",
    features: ["Mobile Optimized Checkout", "Dynamic Product CMS", "Secure Payment Integration", "Inventory Management"],
  },
  {
    id: "cocomm",
    title: "CoComm (PT Rekayasa Industri)",
    category: "Web Eng",
    role: "Frontend Developer",
    tech: ["Next.js", "Tailwind CSS", "React", "Figma"],
    tags: ["Enterprise", "Frontend", "Tailwind CSS"],
    image: "/placeholder.svg",
    gridSpan: "wide",
    parallaxSpeed: 0.25,
    context: "Professional Consultation Project (Prokon) for major industrial BUMN client",
    problem: "Digitizing a strict, manual corporate workflow into a user-friendly approval dashboard while adhering to enterprise design standards.",
    solution: "Translated high-fidelity Figma prototypes into pixel-perfect React components. Built a modular frontend using Next.js and Tailwind CSS.",
    features: ["Figma-to-Code Translation", "Modular Architecture", "Enterprise Design", "Approval Workflow"],
  },
  {
    id: "xkw",
    title: "XKW (Twitter Clone)",
    category: "Web Eng",
    role: "Full Stack Developer",
    tech: ["Next.js", "MongoDB", "TypeScript", "Mongoose"],
    tags: ["Next.js", "NoSQL", "Scalability"],
    image: "/social-media-app-interface.png",
    gridSpan: "normal",
    parallaxSpeed: 0.35,
    context: "Final Project for Non-Relational Databases (IK380)",
    problem: "Modeling complex social interactions (Nested Replies, Retweets, Follow graphs) which are computationally expensive in traditional SQL.",
    solution: "Utilized MongoDB's flexible schema with the Embedding Pattern for comment threads to optimize read performance. Implemented optimistic UI updates.",
    features: ["Nested Comments Architecture", "Optimistic UI", "Infinite Scroll", "Follow System"],
  },
  {
    id: "p2m-web",
    title: "P2M Web Kependudukan",
    category: "Web Eng",
    role: "Full-Stack Developer",
    tech: ["Web Development", "Database", "UI/UX"],
    tags: ["Social Impact", "Web Dev"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Community Development Project",
    problem: "Village administration system to digitize manual population data management.",
    solution: "Built a comprehensive web system for managing village population data with user-friendly interface and secure data storage.",
    features: ["Population Database", "Admin Dashboard", "Data Analytics", "Report Generation"],
  },
  {
    id: "file-management",
    title: "File Management System",
    category: "Web Eng",
    role: "System Programmer",
    tech: ["Electron.js", "Node.js", "JavaScript"],
    tags: ["System Programming", "Electron.js"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "OS Simulation Project",
    problem: "Demonstrating memory allocation and file operations logic in an OS environment.",
    solution: "Built an OS simulation demonstrating memory allocation, file management, and process handling.",
    features: ["Memory Allocation Simulation", "File Operations", "Process Management"],
  },

  // Creative, Game & UI/UX
  {
    id: "ecoscha",
    title: "EcoSCha",
    category: "Creative",
    role: "Lead Developer",
    featured: true,
    tech: ["Next.js", "React Context", "Figma", "CSS"],
    tags: ["Game Dev", "Research", "Ethnopedagogy"],
    image: "/educational-game.png",
    gridSpan: "tall",
    parallaxSpeed: 0.25,
    context: "National Grant Winner (PKM-RSH 2025) funded by Kemendikbud Ristek",
    problem: "Designing a game that preserves Sundanese culture while being educational but not boring. Challenge was digitalizing complex social deduction mechanics.",
    solution: "Created a responsive web app acting as the Game Master, guiding players through physical card interactions. Implemented complex game logic (Role assignment, Day/Night phases, Voting).",
    features: ["Hybrid Gameplay Mechanics", "Real-time Game State", "Multimedia Integration", "Cultural Education"],
  },
  {
    id: "forgotten-memory",
    title: "Forgotten Memory",
    category: "Creative",
    role: "Game Artist & Developer",
    tech: ["Game Dev", "2D Graphics", "Unity/Custom"],
    tags: ["Game Art", "2D Puzzle"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Compfest Indie Game Submission",
    problem: "Creating an engaging 2D puzzle game with compelling narrative and artistic visuals.",
    solution: "Designed and developed a indie puzzle game with focus on game assets, character design, and multimedia integration.",
    features: ["Pixel Art Assets", "Puzzle Mechanics", "Story Narrative", "Sound Design"],
  },
  {
    id: "binbuddy",
    title: "BinBuddy",
    category: "Creative",
    role: "UI/UX Designer",
    tech: ["Figma", "UI/UX", "Prototyping", "Interaction Design"],
    tags: ["UI/UX", "Gamification"],
    image: "/placeholder.svg",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Arkavidia Competition - High-Fidelity Prototype",
    problem: "Designing a gamified waste management app to increase youth participation in environmental sustainability.",
    solution: "Created high-fidelity prototype focused on gamification mechanics and intuitive user experience to make waste management engaging.",
    features: ["Gamification Elements", "User Engagement", "Visual Design", "Interactive Prototypes"],
  },
]

function ProjectCard({
  project,
  index,
  onClick,
}: { project: (typeof projectsData)[0]; index: number; onClick: () => void }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * project.parallaxSpeed * (index % 2 === 0 ? 1 : -1)])

  const gridClass =
    project.gridSpan === "tall"
      ? "md:row-span-2"
      : project.gridSpan === "wide"
        ? "md:col-span-2"
        : "md:col-span-1 md:row-span-1"

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "circOut", delay: index * 0.08 }}
      style={{ y }}
      className={`group relative ${gridClass} cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`h-full overflow-hidden rounded-2xl bg-muted glass-panel border-none ${project.gridSpan === "tall" ? "min-h-[500px]" : "min-h-[300px]"}`}
      >
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

        <div className="absolute top-4 left-4">
          {project.featured && (
            <Badge className="bg-primary/90 backdrop-blur-md border-none gap-1 py-1 px-3">
              <Sparkles size={12} /> Featured
            </Badge>
          )}
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold opacity-70">
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="text-2xl font-serif font-bold text-slate-800 dark:text-cyan-100">{project.title}</h4>
            <p className="text-sm text-muted-foreground line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.problem}
            </p>
            <div className="flex gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <button className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors">
                <Github size={18} />
              </button>
              <button className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors">
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectDetailModal({
  project,
  open,
  onClose,
}: { project: (typeof projectsData)[0] | null; open: boolean; onClose: () => void }) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-4xl lg:max-w-6xl h-[90vh] p-0 overflow-hidden glass-panel border-primary/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-foreground/10 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors"
        >
          <X size={20} />
        </button>

        <div className="h-full overflow-y-auto">
          {/* Hero Section */}
          <div className="relative h-[30vh] md:h-[40vh] overflow-hidden">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                {project.featured && (
                  <Badge className="bg-primary/90 backdrop-blur-md border-none gap-1 text-xs">
                    <Sparkles size={12} /> Featured
                  </Badge>
                )}
                <Badge variant="outline" className="bg-background/50 backdrop-blur-md text-xs">
                  {project.category}
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-900 dark:text-amber-50">
                {project.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">{project.role}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 md:p-8 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Context</h3>
              <p className="text-base md:text-lg text-foreground/90">{project.context}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-destructive">The Problem</h3>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{project.problem}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-green-600 dark:text-green-400">
                  The Solution
                </h3>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm md:text-base text-foreground/80">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button className="h-12 px-6 md:px-8 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <Github size={16} /> View Source
              </button>
              <button className="h-12 px-6 md:px-8 rounded-full bg-foreground/5 hover:bg-foreground/10 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2">
                <ExternalLink size={16} /> Live Demo
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const categories = ["All", "AI & Data", "Web Eng", "Creative", "IoT"]

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab || p.category.includes(activeTab))

  const handleProjectClick = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="works" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-primary uppercase tracking-[0.3em] text-xs font-bold">
              <span className="w-12 h-px bg-primary/30" />
              Selected Works
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-amber-900 dark:text-amber-50">
              A Fusion of Logic and Aesthetics
            </h3>
          </div>

          <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="bg-foreground/[0.03] border-none backdrop-blur-md h-auto md:h-12 p-1 rounded-full w-full md:w-auto flex-wrap justify-start">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full px-4 md:px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all uppercase tracking-widest text-[10px] font-bold"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDetailModal project={selectedProject} open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
