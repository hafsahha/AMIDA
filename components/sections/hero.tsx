"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Download, ArrowRight } from "lucide-react"

export function Hero() {
  const tickerItems = [
    "Next.js",
    "Python",
    "Deep Learning",
    "Flutter",
    "Docker",
    "YOLOv8",
    "Alibaba Cloud",
    "Next.js",
    "Python",
    "Deep Learning",
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        // <CHANGE> Added significant padding-bottom to prevent button overlap with ticker
        className="max-w-4xl space-y-8 pb-32"
      >
        <h2 className="text-4xl md:text-6xl font-serif leading-tight text-balance text-amber-900 dark:text-amber-50">
          Hi, I'm <span className="font-bold">Hafsah Hamidah</span>. Software Engineer bridging AI, Data, and Creative
          Tech.
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          Drawing from diverse professional and research experience, I build scalable web applications, engineer intelligent data pipelines, and develop real-time AI solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <MagneticButton strength={0.4}>
            <Button size="lg" className="rounded-full px-8 gap-2 group shadow-xl transition-all hover:scale-105">
              View Selected Works <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.4}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 gap-2 glass-panel hover:bg-white/10 dark:hover:bg-black/10 bg-transparent"
            >
              Download Resume <Download className="h-4 w-4" />
            </Button>
          </MagneticButton>
        </div>
      </motion.div>

      {/* <CHANGE> Tech Ticker moved to absolute bottom of screen with fixed positioning */}
      <div className="fixed bottom-0 left-0 right-0 py-8 border-y border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm z-10">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-12 items-center text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground/60 px-6"
          >
            {tickerItems.map((item, i) => (
              <span key={i} className="flex items-center gap-4">
                {item} <span className="text-primary opacity-30">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
