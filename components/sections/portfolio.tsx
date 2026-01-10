"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ExternalLink, Github, Sparkles } from "lucide-react"

// REFACTORED PORTFOLIO SECTION - Single Page, Clean Grid, 5 Smart Categories

// Projects organized by new category system
const projectsData = [
  // BIG 4 - Featured Projects (sorted first)
  {
    id: "sigma-umkm",
    title: "SIGMA-UMKM",
    category: "AI & Data",
    role: "System Architect",
    featured: true,
    displayTech: ["MongoDB", "Cassandra", "Docker"],
    image: "/assets/work/1.png",
    context: "Centralized monitoring ecosystem supporting SDGs 8, tracking the legality of Indonesian MSMEs",
    problem: "Handling distinct data workloads: dynamic geospatial profiles (flexible schema) and high-velocity financial audit trails (time-series data).",
    solution: "Architected a hybrid database system using MongoDB for geospatial flexibility and Apache Cassandra for ultra-fast financial audit trails. Optimized partition keys for sub-millisecond retrieval.",
    features: ["Polyglot Persistence Architecture", "Sub-millisecond Time-Series Queries", "RBAC Security", "Zod API Validation"],
    fullTech: ["Apache Cassandra", "MongoDB", "Docker", "Next.js 16", "TypeScript"],
    github: "https://github.com/codewara/SIGMA-UMKM",
  },
  {
    id: "smart-batik",
    title: "Smart Batik Lens",
    category: "AI & Data",
    role: "ML Engineer",
    featured: true,
    displayTech: ["Python", "YOLOv8", "Flutter"],
    image: "/assets/work/2.png",
    context: "Final Project for Computer Vision (IK542) course - Real-time Batik motif detection on complex surfaces",
    problem: "Existing batik apps use Image Classification, which fails when the fabric is folded, curved on a body, or has poor lighting.",
    solution: "Shifted from classification to detection using YOLOv8 Nano, allowing the app to localize multiple motifs in a single frame regardless of the object's shape. Quantized the model to INT8 (~6MB, 70% reduction) and integrated into Flutter using tflite_flutter.",
    features: ["Real-time Detection @ 15+ FPS", "INT8 Model Quantization (70% size reduction)", "900+ Geometrically Augmented Images", "Mobile Optimization"],
    fullTech: ["Python", "YOLOv8", "TFLite", "Flutter", "Computer Vision"],
    github: "https://github.com/beginnener/CompVis_SmartBatikLens",
  },
  {
    id: "pantanizz",
    title: "PantaniZz",
    category: "IoT & Engineering",
    role: "Backend & IoT Engineer",
    featured: true,
    displayTech: ["Golang", "MQTT", "Flutter"],
    image: "/assets/work/3.png",
    context: "End-to-end IoT ecosystem for automated hydroponic farming with real-time sensor data aggregation",
    problem: "Manual hydroponic monitoring is labor-intensive. Need real-time sensor data (pH, TDS, Temperature) aggregation and automated control.",
    solution: "Built Golang backend to handle concurrent sensor streams using Goroutines. Implemented MQTT protocol for low-latency hardware-to-app communication. ESP32 sensors send data to broker.",
    features: ["Goroutine-based Concurrency", "MQTT Protocol Integration", "Real-time Sensor Aggregation", "Automated Actuator Control", "Mobile Dashboard"],
    fullTech: ["Golang", "MQTT", "C++ (ESP32)", "PostgreSQL", "Flutter"],
    github: "https://github.com/hafsahha/pantanizz",
  },
  {
    id: "paham-saham",
    title: "PahamSaham",
    category: "AI & Data",
    role: "Data Engineer",
    featured: true,
    displayTech: ["Apache Airflow", "Python", "Docker"],
    image: "/assets/work/4.png",
    context: "Automated ETL pipeline ingesting Indonesian stock market data (IDX) for financial analysis",
    problem: "Manual stock data analysis is inefficient. Needed a centralized, automated source of truth for Indonesian stock market (IDX) data.",
    solution: "Built containerized ETL pipeline using Apache Airflow with Docker. Developed Python scrapers for IDX data extraction, cleaned with Pandas, and stored in MongoDB. Exposed via FastAPI.",
    features: ["Containerized Orchestration (Airflow)", "Automated Daily DAGs", "Data Extraction & Transformation", "MongoDB Storage"],
    fullTech: ["Apache Airflow", "Docker", "MongoDB", "Pandas", "Python", "FastAPI"],
    github: "https://github.com/hafsahha/PahamSaham",
  },

  // AI & Data (remaining)
  {
    id: "ailearn",
    title: "AILearn Pancasila",
    category: "AI & Data",
    role: "Full Stack Engineer",
    displayTech: ["Laravel", "Gemini API", "MySQL"],
    image: "/assets/work/6.png",
    context: "Live commercial project via Xtrahera Innovations - AI-powered civic education platform",
    problem: "Providing instant, context-aware answers to students' questions about national values (Pancasila) without human tutors.",
    solution: "Integrated a Generative AI model via API with specific system prompts to act as a Civic Tutor. Deployed the full-stack application to a live VPS environment.",
    features: ["System Prompt Engineering", "Live VPS Deployment", "Intent Recognition", "Session Management"],
    fullTech: ["Next.js", "OpenAI API", "MySQL", "Tailwind CSS"],
    liveWeb: "https://ailearn-pancasila.id",
  },

  // IoT & Engineering
  {
    id: "doxxer",
    title: "DOXXER Search Engine",
    category: "IoT & Engineering",
    role: "Algorithm Engineer",
    displayTech: ["Python", "NetworkX", "Flask"],
    image: "/assets/work/7.png",
    context: "Data Structures & Algorithms project - Graph-based web crawler and visualizer",
    problem: "Understanding and visualizing web node relationships and organizational website dependencies.",
    solution: "Built graph-based search engine implementing BFS/DFS algorithms to crawl and visualize web node relationships. Semantic mapping between URLs.",
    features: ["Web Crawling with Selenium", "Graph Traversal (BFS/DFS)", "Node Visualization", "Route Mapping"],
    fullTech: ["Python", "NetworkX", "BFS/DFS", "Graph Theory", "Selenium", "Flask"],
    github: "https://github.com/hafsahha/DOXXER",
  },
  {
    id: "file-management",
    title: "OS File Manager Simulator",
    category: "IoT & Engineering",
    role: "System Programmer",
    displayTech: ["Electron.js", "Node.js", "JavaScript"],
    image: "/assets/work/8.png",
    context: "OS Simulation Project - Memory allocation and file operations visualization",
    problem: "Demonstrating memory allocation and file operations logic in an OS environment with visual feedback.",
    solution: "Built Electron.js GUI simulating OS file management, demonstrating Contiguous, Linked, and Indexed allocation strategies.",
    features: ["Memory Allocation Simulation", "File Operations", "Disk Block Visualization", "Fragmentation Handling"],
    fullTech: ["Electron.js", "Node.js", "JavaScript", "Operating Systems"],
    github: "https://github.com/hafsahha/File-Management-System",
  },

  // Web & Mobile
  {
    id: "xkw",
    title: "XKW (Twitter Clone)",
    category: "Web & Mobile",
    role: "Full Stack Developer",
    displayTech: ["Next.js", "MongoDB", "TypeScript"],
    image: "/assets/work/9.png",
    context: "Final Project for Non-Relational Databases (IK380) - Scalable social media platform",
    problem: "Modeling complex social interactions (Nested Replies, Retweets, Follow graphs) which are computationally expensive in traditional SQL.",
    solution: "Utilized MongoDB's flexible schema with the Embedding Pattern for comment threads to optimize read performance. Implemented optimistic UI updates.",
    features: ["Nested Comments Architecture", "Optimistic UI", "Infinite Scroll", "Follow System"],
    fullTech: ["Next.js", "MongoDB", "TypeScript", "Mongoose"],
    github: "https://github.com/hafsahha/xkw",
  },
  {
    id: "cocomm",
    title: "CoComm",
    category: "Web & Mobile",
    role: "Full Stack Developer",
    displayTech: ["Laravel", "Tailwind CSS", "Figma"],
    image: "/assets/work/10.png",
    context: "Professional Consultation Project (Prokon) for major State-Owned Enterprise - Enterprise approval dashboard",
    problem: "Digitizing strict, manual corporate document approval workflows into user-friendly dashboard while adhering to enterprise design standards.",
    solution: "Built full-stack solution using Laravel backend with Tailwind CSS frontend. Translated high-fidelity Figma prototypes into responsive components. Collaborated in Agile team of 5 for BUMN client.",
    features: ["Figma-to-Code Translation", "Laravel Backend Architecture", "Enterprise Design Compliance", "Approval Workflow Logic"],
    fullTech: ["Laravel", "PHP", "Tailwind CSS", "Figma", "MySQL"],
    figma: "https://www.figma.com/file/xMLZDfJWqPkKSvnZggxvxg/PROKON-1.2",
  },
  {
    id: "mayazaskia",
    title: "Mayazaskia",
    category: "Web & Mobile",
    role: "Full Stack Developer",
    displayTech: ["Laravel", "MySQL", "Payment Gateway"],
    image: "/assets/work/11.png",
    context: "Live commercial project via Xtrahera Innovations - Beauty e-commerce platform",
    problem: "Building high-performance beauty e-commerce with focus on mobile conversion and secure checkout.",
    solution: "Optimized mobile responsiveness and streamlined checkout flow to reduce cart abandonment. Built dynamic product CMS for client management.",
    features: ["Mobile Optimized Checkout", "Dynamic Product CMS", "Secure Payment Integration", "Inventory Management"],
    fullTech: ["Laravel", "MySQL", "E-Commerce", "Payment Gateway"],
    liveWeb: "https://mayazaskia.com/",
  },
  {
    id: "masakio",
    title: "MASAKIO",
    category: "Web & Mobile",
    role: "Mobile & Backend Developer",
    displayTech: ["Flutter", "Node.js", "Express"],
    image: "/assets/work/12.png",
    context: "Recipe-sharing mobile application - Culinary social platform",
    problem: "Creating a seamless recipe discovery and sharing platform with clean architecture.",
    solution: "Built Flutter mobile app with Node.js/Express backend API. Clean separation of concerns with RESTful endpoint design.",
    features: ["Recipe Database", "User Authentication", "Recipe Sharing", "Search & Filter"],
    fullTech: ["Flutter", "Node.js", "Express", "REST API"],
    github: "https://github.com/hafsahha/MASAKIO",
    githubBackend: "https://github.com/codewara/masakio-backend",
  },
  {
    id: "p2m-web",
    title: "Sistem Informasi Kependudukan",
    category: "Web & Mobile",
    role: "Full-Stack Developer",
    displayTech: ["PHP", "MySQL", "Web Development"],
    image: "/assets/work/13.png",
    context: "Community Development Project - Village administration system digitization",
    problem: "Village administration system to digitize manual population data management and improve data accessibility.",
    solution: "Built comprehensive web system for managing village population data with user-friendly interface and secure storage. Implemented RBAC security.",
    features: ["Population Database", "Admin Dashboard", "Data Analytics", "Report Generation", "RBAC Security"],
    fullTech: ["PHP", "Web Development", "Information Systems", "Database"],
    github: "https://github.com/rayplv/WebKependudukanP2M",
  },
  {
    id: "campink",
    title: "Campink",
    category: "Web & Mobile",
    role: "Mobile Developer",
    displayTech: ["Flutter", "Dart", "Mobile Design"],
    image: "/assets/work/14.png",
    context: "Equipment rental mobile marketplace - Camping gear rental platform",
    problem: "Building a mobile rental platform with intuitive product browsing and cart management.",
    solution: "Developed Flutter app with product catalog, search, filtering, and cart functionality. Clean mobile-first design.",
    features: ["Product Catalog", "Search & Filter", "Shopping Cart", "Mobile Optimization"],
    fullTech: ["Flutter", "Mobile Design", "Dart"],
    github: "https://github.com/hafsahha/KELOMPOK67",
  },
  {
    id: "sports-facility",
    title: "Sports Facility Booking System",
    category: "Web & Mobile",
    role: "Web Developer",
    displayTech: ["PHP", "SQL", "Database Design"],
    image: "/assets/work/15.png",
    context: "Database Management course project - Facility reservation system",
    problem: "Building a booking system with strict database integrity to manage facility schedules.",
    solution: "Designed highly normalized database schema focusing on referential integrity and avoiding data anomalies.",
    features: ["Facility Booking", "Schedule Management", "Database Normalization", "Conflict Prevention"],
    fullTech: ["PHP Native", "SQL", "Database Normalization"],
    github: "https://github.com/hafsahha/Tugas-Besar-SBD",
  },

  // Creative & Research
  {
    id: "ecoscha",
    title: "EcoSCha",
    category: "Creative & Research",
    role: "Lead Developer & PM",
    featured: true,
    displayTech: ["Gamification", "Research", "Web Dev"],
    image: "/assets/work/5.png",
    context: "National Grant Awardee (PKM-RSH 2025) - Ethnopedagogy-based environmental game platform",
    problem: "Low youth engagement in environmental conservation. Need to blend local wisdom (Sundanese values) with modern gamification.",
    solution: "Designed gameplay mechanics inspired by 'Werewolf' and 'Quizizz'. Conducted social humanities research to integrate Sundanese environmental values into game logic.",
    features: ["Gamification Mechanics", "Ethnopedagogy Research", "Environmental Awareness", "Community Engagement"],
    fullTech: ["Gamification", "Web Dev", "Research", "UI/UX"],
    googleDrive: "https://drive.google.com/drive/folders/1etdzlPjVXvu_gdUYdQfeJ9KtQyzv56hn?usp=sharing",
  },
  {
    id: "forgotten-memory",
    title: "Forgotten Memory",
    category: "Creative & Research",
    role: "Game Artist & Designer",
    displayTech: ["Game Art", "2D Graphics", "Storytelling"],
    image: "/assets/work/16.png",
    context: "COMPFEST 16 (Indie Game Ignite) - 2D adventure puzzle game finalist",
    problem: "Creating an engaging narrative-driven indie game with original artistic vision.",
    solution: "Designed all original 2D characters and environments. Produced promotional trailer. Focused on atmosphere and emotional storytelling.",
    features: ["Original Character Design", "Environment Art", "Promotional Media", "Puzzle Mechanics"],
    fullTech: ["Game Art", "Video Editing", "Storyboarding", "2D Graphics"],
    youtube: "https://www.youtube.com/watch?v=ZfVVJnVfcQs",
  },
  {
    id: "binbuddy",
    title: "BinBuddy",
    category: "Creative & Research",
    role: "UI/UX Designer",
    displayTech: ["Figma", "UI/UX", "Prototyping"],
    image: "/assets/work/17.png",
    context: "Arkavidia Competition - Gamified waste management solution",
    problem: "Designing a gamified waste management app to increase youth participation in environmental sustainability.",
    solution: "Created high-fidelity Figma prototype focused on gamification mechanics and intuitive UX. Community-driven mission system.",
    features: ["Gamification Elements", "User Engagement Loops", "Visual Design System", "Interactive Prototypes"],
    fullTech: ["Figma", "UI/UX", "Prototyping", "Gamification"],
    figma: "https://www.figma.com/proto/pG69gtnWXwdPVW2ayGaShI/BinBuds",
  },
]

// ProjectCard component - Clean, consistent card layout
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projectsData)[0]
  index: number
  onClick: () => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "circOut", delay: index * 0.08 }}
      className="group relative cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="h-full overflow-hidden rounded-2xl bg-muted glass-panel backdrop-blur-none md:backdrop-blur-md border-none hover:shadow-xl transition-shadow duration-300">
        {/* Image Container with Aspect Ratio */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary/90 backdrop-blur-md border-none gap-1 py-1 px-3">
                <Sparkles size={12} /> Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Content Container - Positioned Absolutely for Hover Reveal */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="space-y-3">
            {/* Tech Stack as Tags */}
            <div className="flex gap-2 flex-wrap">
              {project.displayTech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] uppercase tracking-widest font-bold opacity-70 text-amber-700/90 dark:text-amber-200/90"
                >
                  {tech}
                </span>
              ))}
              {project.displayTech.length > 3 && (
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-70 text-amber-700/90 dark:text-amber-200/90">
                  +{project.displayTech.length - 3}
                </span>
              )}
            </div>

            {/* Title */}
            <h4 className="text-2xl font-serif font-bold text-slate-50 dark:text-cyan-100">
              {project.title}
            </h4>

            {/* Problem Description - Fades in on Hover */}
            <p className="text-sm text-muted-foreground/90 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.problem}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ProjectDetailModal component
function ProjectDetailModal({
  project,
  open,
  onClose,
}: {
  project: (typeof projectsData)[0] | null
  open: boolean
  onClose: () => void
}) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/80 backdrop-blur-none md:backdrop-blur-md border-white/10">
        {/* Hero Section */}
        <div className="relative h-80 -mx-6 -mt-6 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
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
            <h2 className="text-4xl font-serif font-bold text-amber-900 dark:text-amber-50">
              {project.title}
            </h2>
            <p className="text-base text-muted-foreground">{project.role}</p>
            <div className="flex gap-2 flex-wrap pt-2">
              {project.fullTech.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 text-xs"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Context</h3>
            <p className="text-base text-foreground/90">{project.context}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-destructive">
                The Problem
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-green-600 dark:text-green-400">
                The Solution
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 md:px-8 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <Github size={16} /> View Source
              </a>
            )}
            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 md:px-8 rounded-full bg-primary/80 text-primary-foreground font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <Github size={16} /> Backend
              </a>
            )}
            {project.liveWeb && (
              <a
                href={project.liveWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 md:px-8 rounded-full bg-green-600 text-white font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} /> Live Web
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 md:px-8 rounded-full bg-purple-600 text-white font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} /> View Design
              </a>
            )}
            {project.googleDrive && (
              <a
                href={project.googleDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 md:px-8 rounded-full bg-blue-600 text-white font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} /> View Files
              </a>
            )}
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 md:px-8 rounded-full bg-red-600 text-white font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} /> Watch Video
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Main Portfolio Section Component
export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const categories = [
    "All",
    "AI & Data",
    "IoT & Engineering",
    "Web & Mobile",
    "Creative & Research",
  ]

  // Filter projects with smart sorting (BIG 4 first)
  const filteredProjects =
    activeCategory === "All"
      ? projectsData.sort((a, b) => {
          const aIsFeatured = a.featured ? 0 : 1
          const bIsFeatured = b.featured ? 0 : 1
          return aIsFeatured - bIsFeatured
        })
      : projectsData
          .filter((p) => p.category === activeCategory)
          .sort((a, b) => {
            const aIsFeatured = a.featured ? 0 : 1
            const bIsFeatured = b.featured ? 0 : 1
            return aIsFeatured - bIsFeatured
          })

  const handleProjectClick = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="works" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-primary uppercase tracking-[0.3em] text-xs font-bold">
              <span className="w-12 h-px bg-primary/30" />
              Selected Works
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-amber-900 dark:text-amber-50">
              A Fusion of Logic and Aesthetics
            </h2>
          </div>

          {/* Filter Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="bg-foreground/[0.03] border border-white/10 backdrop-blur-none md:backdrop-blur-md h-auto p-1.5 rounded-full w-full md:w-auto flex-wrap justify-start gap-1">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full px-4 md:px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all uppercase tracking-widest text-[11px] font-bold"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Grid Layout - Clean and Consistent */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
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

      {/* Modal */}
      <ProjectDetailModal project={selectedProject} open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
