"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center lg:justify-start order-1 lg:order-1"
        >
          <div className="relative group">
            {/* Liquid Blob Shape using CSS border-radius animation */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-primary/20 transition-all duration-700 group-hover:rounded-[50%_50%_50%_50%] group-hover:border-primary/40">
              <img
                src="/assets/img/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover grayscale-0 dark:grayscale transition-all duration-700"
                draggable="false"
              />
            </div>
            {/* Floating decorative ring */}
            <div className="absolute -inset-4 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] border-2 border-primary/10 -z-10 animate-spin-slow" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 lg:col-span-1 order-2 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 text-primary uppercase tracking-[0.3em] text-xs font-bold">
            <span className="w-12 h-px bg-primary/30" />
            The Scholar
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-amber-900 dark:text-amber-50">
            Academic Excellence Meets Practical Innovation
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I am a final-year Computer Science student at Universitas Pendidikan Indonesia (GPA 3.84/4.00) with a
            passion for turning complex theories into usable software. My approach blends rigorous academic research
            with high-performance engineering.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-background bg-accent flex items-center justify-center font-serif font-bold text-xs"
                >
                  {i === 1 ? "UPI" : i === 2 ? "ABC" : "PKM"}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold">Top Tier Performance</p>
              <p className="text-muted-foreground text-xs md:text-sm">Recognized by Global & National Institutions</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 order-3 lg:order-3"
        >
          <Card className="glass-panel overflow-hidden relative border-none">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <GraduationCap size={120} />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl font-serif">
                <BrainCircuit className="text-primary h-5 w-5 md:h-6 md:w-6" />
                Current Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <p className="text-lg md:text-xl font-medium">Specialization: Advanced AI & Data Engineering</p>
              <p className="text-sm md:text-base text-muted-foreground">
                Currently finalizing an intensive academic track (23 SKS) focused on Deep Learning, CV, NLP, and NoSQL
                strategies to build smarter, data-driven applications.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-3 md:p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-xl md:text-2xl font-bold text-primary">3.84</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">GPA</p>
                </div>
                <div className="p-3 md:p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-xl md:text-2xl font-bold text-primary">23</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
                    Credits Focus
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
