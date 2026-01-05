"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Scene } from "@/components/scene/liquid-mirror"
import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Portfolio } from "@/components/sections/portfolio"
import { Experience } from "@/components/sections/experience"
import { Awards } from "@/components/sections/awards"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/ui/theme-provider"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MainContent />
    </ThemeProvider>
  )
}

function MainContent() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <main className="relative min-h-screen cursor-none">
      {/* Layer 0: Background */}
      <Scene isDark={isDark} />

      {/* Layer 1: Fixed Overlays */}
      <div className="watermark-character" aria-hidden="true">
        谧
      </div>
      <div className="film-grain" aria-hidden="true" />

      {/* Layer 10: Scrollable Content */}
      <div className="relative z-10 max-w-full overflow-x-hidden">
        <Header />
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Hero />
          <About />
          <Portfolio />
          <Experience />
          <Awards />
        </div>
        <Footer />
      </div>
    </main>
  )
}
