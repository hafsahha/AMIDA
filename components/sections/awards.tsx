"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, Trophy } from "lucide-react"

const awards = [
  {
    title: "Alibaba Cloud Certified Developer",
    org: "Alibaba Cloud",
    icon: <ShieldCheck className="text-blue-500" />,
  },
  {
    title: "National Grant Awardee (PKM-RSH 2025)",
    org: "Ministry of Education",
    icon: <Trophy className="text-yellow-500" />,
  },
  {
    title: "Top Performer - TechPreneurship Training",
    org: "Innovation Hub",
    icon: <Award className="text-primary" />,
  },
]

export function Awards() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl glass-panel border-none flex flex-col items-center text-center space-y-4 group transition-all hover:translate-y-[-8px]"
          >
            <div className="size-16 rounded-2xl bg-foreground/[0.03] flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
              {award.icon}
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-lg leading-tight text-slate-800 dark:text-cyan-100">
                {award.title}
              </h4>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">{award.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
