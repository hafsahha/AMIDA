"use client"

import { useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ExternalLink, Github, Sparkles, X } from "lucide-react"

const projectsData = [
  {
    id: "smart-batik",
    title: "Smart Batik Lens",
    category: "AI & Data",
    role: "CV Engineer",
    featured: true,
    tech: ["Python", "YOLOv8", "TFLite", "Flutter"],
    tags: ["CV", "Flutter", "TFLite"],
    image: "/batik-detection-app.jpg",
    gridSpan: "tall",
    parallaxSpeed: 0.3,
    context: "Final Project for Computer Vision & Deep Learning Courses",
    problem: "Traditional classification fails on folded/curved Batik fabrics.",
    solution:
      "Transitioned to Object Detection (YOLOv8 Nano). Trained on geometrically augmented datasets and optimized (Quantized INT8) for real-time mobile inference.",
    features: ["Real-time Bounding Box @ 15FPS", "Custom Flutter Painter", "6MB Model Size"],
  },
  {
    id: "pahamsaham",
    title: "PahamSaham",
    category: "AI & Data",
    role: "Data Engineer",
    tech: ["Airflow", "Docker", "MongoDB", "Pandas"],
    tags: ["Data Eng", "Docker", "MongoDB"],
    image: "/data-pipeline-dashboard.jpg",
    gridSpan: "wide",
    parallaxSpeed: 0.5,
    context: "Data Management & NoSQL Course Implementation",
    problem: "Manual stock data collection is slow and error-prone.",
    solution:
      "Automated ETL pipeline orchestrated by Airflow. Scrapes IDX data daily, cleans via Pandas, and stores in MongoDB.",
    features: ["Dockerized Environment", "Automated DAGs", "Unstructured Data Handling"],
  },
  {
    id: "ecoscha",
    title: "EcoSCha",
    category: "Creative",
    role: "Lead Developer",
    tech: ["Next.js", "React Context", "Figma"],
    tags: ["Game Dev", "Ethnopedagogy"],
    image: "/educational-game.png",
    gridSpan: "tall",
    parallaxSpeed: 0.25,
    context: "National Grant Winner (PKM-RSH 2025)",
    problem: "Declining interest in local culture (Ethnopedagogy).",
    solution:
      "Hybrid board game system where the web app acts as the Game Master, digitizing 'Werewolf' mechanics for Sundanese storytelling.",
    features: ["Complex Game State Logic", "Multimedia Triggers", "Hybrid Gameplay"],
  },
  {
    id: "pantanizz",
    title: "PantaniZz",
    category: "IoT",
    role: "IoT Engineer",
    tech: ["Golang", "MQTT", "ESP32", "Flutter"],
    tags: ["IoT", "Golang"],
    image: "/iot-hydroponic-monitoring-dashboard.jpg",
    gridSpan: "normal",
    parallaxSpeed: 0.4,
    context: "Smart Agriculture Initiative",
    problem: "Hydroponic farming requires constant monitoring.",
    solution: "End-to-end IoT system using Go Routines for concurrency and MQTT for low-latency sensor data streaming.",
    features: ["Real-time WebSocket Charts", "High Concurrency Backend", "Hardware Integration"],
  },
  {
    id: "xkw",
    title: "XKW (Twitter Clone)",
    category: "Web Eng",
    role: "Full Stack Dev",
    tech: ["Next.js", "MongoDB", "TypeScript"],
    tags: ["Next.js", "Scalability"],
    image: "/social-media-app-interface.png",
    gridSpan: "wide",
    parallaxSpeed: 0.35,
    context: "Non-Relational Databases Project",
    problem: "Handling massive scale of nested social interactions.",
    solution:
      "Implemented 'Embedding Pattern' for comments and 'Referencing' for followers to optimize read/write ratios.",
    features: ["Optimistic UI", "Infinite Scroll", "Nested Replies"],
  },
  {
    id: "ailearn",
    title: "AILearn Pancasila",
    category: "AI & Data",
    role: "NLP Engineer",
    tech: ["OpenAI API", "Next.js", "MySQL"],
    tags: ["NLP", "Next.js"],
    image: "/ai-learning-platform.png",
    gridSpan: "normal",
    parallaxSpeed: 0.2,
    context: "Applied NLP Project (Live)",
    problem: "Lack of interactive civic education media.",
    solution: "Context-aware AI Chatbot prompted to answer value-based questions within national ideology boundaries.",
    features: ["System Prompt Engineering", "Live VPS Deployment", "Intent Recognition"],
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
