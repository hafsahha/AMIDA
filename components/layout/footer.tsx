"use client"

import { motion } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 px-6 md:px-12 border-t border-foreground/5 bg-foreground/[0.01] mb-20 md:mb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-6 md:space-y-8">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-amber-900 dark:text-amber-50">
            Ready to engineer <br /> the <span className="text-primary italic font-normal">future?</span>
          </h3>
          <p className="text-base md:text-xl text-muted-foreground max-w-md">
            Currently looking for new opportunities and collaborations in AI, Data, and Web Engineering.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a
              href="#"
              className="group flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              GitHub{" "}
              <ArrowUpRight className="size-3 md:size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              LinkedIn{" "}
              <ArrowUpRight className="size-3 md:size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="mailto:contact@amida.dev"
              className="group flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              Email{" "}
              <ArrowUpRight className="size-3 md:size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] glass-panel border-none flex flex-col items-center justify-center text-center space-y-4 md:space-y-6"
        >
          <div className="size-20 md:size-24 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="size-6 md:size-8 text-primary" />
          </div>
          <p className="font-serif text-xl md:text-2xl font-bold text-slate-800 dark:text-cyan-100">
            Let's collaborate.
          </p>
          <MagneticButton strength={0.5}>
            <button className="h-12 md:h-14 px-8 md:px-10 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-2xl">
              Send a message
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-6 md:pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        <p>© 2026 Hafsah Hamidah. All Rights Reserved.</p>
        <div className="flex items-center gap-2">
          Designed with <span className="text-primary italic">Tranquility</span> in Indonesia
        </div>
      </div>
    </footer>
  )
}
