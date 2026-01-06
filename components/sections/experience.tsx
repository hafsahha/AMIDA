"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Code } from "lucide-react"

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Xtrahera Innovations",
    period: "2024-Present",
    desc: "Handling production-ready AI and e-commerce projects (AILearn Pancasila & Maya Zaskia). Architecting scalable solutions with focus on real-time AI integration and payment systems.",
    icon: <Code className="size-5" />,
  },
  {
    role: "Frontend Developer",
    company: "PT Rekayasa Industri",
    period: "Mar-May 2025",
    desc: "Developed digital approval dashboard (CoComm) for BUMN client. Translated high-fidelity prototypes to pixel-perfect React components using Tailwind CSS.",
    icon: <Briefcase className="size-5" />,
  },
  {
    role: "Secretary",
    company: "Competitive Programming Club (CPC) UPI",
    period: "Jan 2025-Present",
    desc: "Managing club operations and coordinating competitive programming training for active members.",
    icon: <Users className="size-5" />,
  },
  {
    role: "Head of Subdivision",
    company: "Dinamik 20 (Dies Natalis KEMAKOM)",
    period: "Jan 2025-Present",
    desc: "Leading subdivision for annual technology festival at UPI, coordinating team of developers and designers.",
    icon: <Users className="size-5" />,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-foreground/[0.01]">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-primary uppercase tracking-[0.3em] text-xs font-bold">
            <span className="w-12 h-px bg-primary/30" />
            Experience & Leadership
          </div>
          <h3 className="text-3xl md:text-5xl font-serif text-amber-900 dark:text-amber-50">A Trajectory of Growth</h3>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                {exp.icon}
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel border-none shadow-xl transition-all hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h4 className="font-serif font-bold text-xl text-slate-800 dark:text-cyan-100">{exp.role}</h4>
                  <Badge variant="outline" className="w-fit bg-primary/5 border-primary/20 text-primary font-bold">
                    {exp.period}
                  </Badge>
                </div>
                <p className="font-medium text-foreground/80 mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
