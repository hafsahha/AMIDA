"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { AnimatePresence } from "framer-motion"
import { Scene } from "@/components/scene/liquid-mirror"
import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Portfolio } from "@/components/sections/portfolio"
import { Experience } from "@/components/sections/experience"
import { Awards } from "@/components/sections/awards"
import { CertificateSlider } from "@/components/sections/certificate-slider"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ChatWidget } from "@/components/ChatWidget"
import { LoadingScreen } from "@/components/LoadingScreen"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <MainContent key="main" />
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

function MainContent() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <>
      {/* Fixed Canvas Container (100svh prevents address bar jank) */}
      <div className="fixed top-0 left-0 w-full h-[100svh] -z-10 pointer-events-none overflow-hidden">
        <Scene isDark={isDark} />
      </div>

      {/* Fixed Overlays */}
      <div className="watermark-character" aria-hidden="true">
        谧
      </div>
      <div className="film-grain" aria-hidden="true" />

      {/* Scrollable Content Layer */}
      <main className="relative z-10 w-full min-h-screen cursor-none overflow-x-hidden">
        <Header />
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Hero />
          <About />
          <Portfolio />
          <Experience />
          <Awards />
        </div>
        <CertificateSlider />
        <Footer />
      </main>

      {/* AI Chat Widget */}
      <ChatWidget />
    </>
  )
}
