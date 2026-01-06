"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, Trophy } from "lucide-react"

const awards = [
  {
    title: "Alibaba Cloud Certified Developer",
    org: "Alibaba Cloud",
    cert: "ID: ACCD0119700100005773",
    icon: <ShieldCheck className="text-blue-500" />,
  },
  {
    title: "National Grant Awardee (PKM-RSH 2025)",
    org: "Ministry of Education & Culture",
    cert: "EcoSCha - Ethnopedagogy Game",
    icon: <Trophy className="text-yellow-500" />,
  },
  {
    title: "1st Consolation Winner - Porseni AMLI",
    org: "E-Sports Competition",
    cert: "2024",
    icon: <Award className="text-primary" />,
  },
  {
    title: "Top Performer - TechPreneurship Training",
    org: "Innovation Hub",
    cert: "Leadership & Entrepreneurship",
    icon: <Award className="text-amber-500" />,
  },
]

export function Awards() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-primary uppercase tracking-[0.3em] text-xs font-bold">
            <span className="w-12 h-px bg-primary/30" />
            Achievements
          </div>
          <h3 className="text-3xl md:text-5xl font-serif text-amber-900 dark:text-amber-50">Awards & Certifications</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-3xl glass-panel border-none flex flex-col items-center text-center space-y-3 group transition-all hover:translate-y-[-8px]"
          >
            <div className="size-14 rounded-2xl bg-foreground/[0.03] flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
              {award.icon}
            </div>
            <div className="space-y-1.5">
              <h4 className="font-serif font-bold text-sm md:text-base leading-tight text-slate-800 dark:text-cyan-100">
                {award.title}
              </h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{award.org}</p>
              <p className="text-[9px] text-muted-foreground/70 pt-1">{award.cert}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
