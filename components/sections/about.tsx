"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Philosophy Block - The Architecture of a Name */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24 max-w-5xl mx-auto"
      >
        {/* Decorative Title with Gradient */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center font-serif text-4xl md:text-5xl mb-16 bg-gradient-to-r from-amber-900 via-primary to-cyan-600 dark:from-amber-50 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent"
        >
          The Architecture of a Name
        </motion.h2>

        {/* Main Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Visual Duality */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-bold">
                Brand Philosophy
              </p>
              <div className="space-y-2">
                <p className="font-serif text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-50">
                  AMIDA-MI
                </p>
                <p className="font-serif text-5xl md:text-6xl text-primary dark:text-cyan-400 font-light">
                  谧
                </p>
              </div>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                A linguistic fusion of Identity and Logic.
              </p>
            </div>

            {/* Yin-Yang Style Duality Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Day - Amida Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-yellow-50/40 to-orange-100/30 dark:from-amber-900/20 dark:to-orange-900/10 border border-amber-200/50 dark:border-amber-700/30 backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/20 dark:bg-yellow-500/20 flex items-center justify-center">
                    <span className="text-lg">☀️</span>
                  </div>
                  <p className="font-serif text-xl font-bold text-amber-900 dark:text-amber-100">
                    Amida
                  </p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <span className="italic">Infinite Light</span><br/>
                    Innovation & Chaos
                  </p>
                </div>
              </motion.div>

              {/* Night - Mi Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/20 to-blue-900/20 dark:from-slate-900/40 dark:to-cyan-900/20 border border-slate-400/30 dark:border-cyan-500/30 backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 dark:bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-lg">🌙</span>
                  </div>
                  <p className="font-serif text-xl font-bold text-slate-700 dark:text-cyan-100">
                    Mi (谧)
                  </p>
                  <p className="text-sm text-slate-600 dark:text-cyan-200">
                    <span className="italic">Tranquility</span><br/>
                    Logic & Stability
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Philosophy Details with Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Timeline-style Philosophy Points */}
            {[
              {
                number: "01",
                title: "The Dualism",
                desc: '"Amida" (Infinite Light) is the chaos of innovation and possibility. "Mi" (谧) is the tranquility of deep logic and understanding. Together, they form a complete identity.',
                color: "bg-amber-600 dark:bg-cyan-600",
              },
              {
                number: "02",
                title: "The Origin",
                desc: "Derived from the core of my name: H(amida)h. A linguistic play that weaves identity with philosophical meaning, making the brand deeply personal.",
                color: "bg-amber-600 dark:bg-cyan-600",
              },
              {
                number: "03",
                title: "The Identity",
                desc: '"Amida is Me." Phonetically, "Mi" resonates with "Me"—a declaration that this entire work is a direct, authentic reflection of my values and technical vision.',
                color: "bg-amber-600 dark:bg-cyan-600",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="flex gap-6 group"
              >
                {/* Number Accent */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${item.color} flex items-center justify-center font-serif font-bold text-white text-xl shadow-lg group-hover:shadow-xl transition-shadow`}>
                  {item.number}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 space-y-2">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-r from-primary/5 to-cyan-500/5 dark:from-cyan-950/30 dark:to-blue-950/30 border border-primary/20 dark:border-cyan-500/20 backdrop-blur-sm text-center"
        >
          <p className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
            "Where the <span className="text-primary dark:text-cyan-400">Infinite Light</span> of innovation meets the <span className="text-primary dark:text-cyan-400">Tranquil Depth</span> of logic."
          </p>
        </motion.div>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 mt-8">
        {/* Profile Picture Side */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-primary/20 transition-all duration-700 group-hover:rounded-[50%_50%_50%_50%] group-hover:border-primary/40">
              <img
                src="/assets/img/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-700 grayscale-0 dark:grayscale dark:border-cyan-400 dark:shadow-[0_0_24px_4px_rgba(20,184,166,0.25)]"
                draggable="false"
              />
            </div>
            <div className="absolute -inset-4 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] border-2 border-primary/10 -z-10 animate-spin-slow" />
          </div>
        </div>

        {/* Content Center (The Scholar) */}
        <div className="flex-[2] flex flex-col items-center lg:items-start justify-center gap-8 max-w-xl">
          <div className="space-y-4 w-full">
            <div className="inline-flex items-center gap-2 text-primary uppercase tracking-[0.3em] text-xs font-bold">
              <span className="w-12 h-px bg-primary/30" />
              The Scholar
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-amber-900 dark:text-amber-50">
              Academic Excellence Meets Practical Innovation
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I am a third-year Computer Science student at Universitas Pendidikan Indonesia (GPA 3.84/4.00) with a passion for turning complex theories into usable software. My journey spans from Full-Stack Web Development to pioneering research in Ethnopedagogy.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-4">
                {["UPI", "ABC", "PKM"].map((label, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-background bg-accent flex items-center justify-center font-serif font-bold text-xs"
                  >
                    {label}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold">Top Tier Performance</p>
                <p className="text-muted-foreground text-xs md:text-sm">Recognized by Global & National Institutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Current Focus Side */}
        <div className="flex-1 flex flex-col items-center gap-6 min-w-[220px]">
          {/* <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 w-28 text-center">
            <p className="text-2xl font-bold text-primary">3.84</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">GPA</p>
          </div> */}
          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 w-full text-left">
            <p className="font-semibold text-primary mb-2">Current Focus</p>
            <p className="text-sm text-muted-foreground mb-2">Specialization: Advanced AI & Data Engineering</p>
            <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
              <li><b>Deep Learning & Computer Vision</b> (YOLO, Neural Networks, Image Processing, Model Quantization)</li>
              <li><b>Natural Language Processing</b> (NLP, Text Classification, Intent Recognition, Chatbot Engineering)</li>
              <li><b>Non-Relational Databases</b> (NoSQL, Data Modeling, Real-Time Data Pipelines)</li>
              <li><b>AI Systems & Data Management</b> (Smart Systems, Data Engineering, ETL, Data Cleaning, Data Visualization)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
