"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function LoadingScreen() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent flash on SSR - return neutral skeleton
  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
        <div className="animate-pulse text-4xl font-serif text-foreground/20">谧</div>
      </div>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -100,
        transition: { 
          duration: 0.8, 
          ease: [0.43, 0.13, 0.23, 0.96] 
        } 
      }}
      className={`fixed inset-0 z-[9999] flex items-center justify-center ${
        isDark 
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" 
          : "bg-gradient-to-br from-amber-50 via-orange-50 to-cyan-50"
      }`}
    >
      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] ${
            isDark ? "bg-cyan-500/20" : "bg-cyan-400/30"
          }`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] ${
            isDark ? "bg-amber-500/20" : "bg-amber-400/40"
          }`}
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute inset-0 rounded-full blur-xl ${
              isDark 
                ? "bg-gradient-to-r from-cyan-500/20 to-amber-500/20" 
                : "bg-gradient-to-r from-cyan-400/30 to-amber-400/40"
            }`}
          />
          <div className={`relative backdrop-blur-md rounded-3xl px-12 py-8 shadow-2xl ${
            isDark 
              ? "bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-white/10" 
              : "bg-gradient-to-br from-white/80 to-amber-50/80 border border-amber-900/10"
          }`}>
            <h1 className={`text-6xl md:text-7xl font-serif font-bold bg-clip-text text-transparent ${
              isDark 
                ? "bg-gradient-to-r from-cyan-200 via-amber-200 to-cyan-300" 
                : "bg-gradient-to-r from-cyan-700 via-amber-600 to-cyan-800"
            }`}>
              AMIDA
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className={`h-0.5 mt-2 ${
                isDark 
                  ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent" 
                  : "bg-gradient-to-r from-transparent via-amber-600 to-transparent"
              }`}
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`flex items-center gap-3 ${
            isDark ? "text-cyan-100/70" : "text-amber-900/70"
          }`}
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles size={20} className={isDark ? "text-cyan-400" : "text-amber-600"} />
          </motion.div>
          <span className="text-sm uppercase tracking-[0.3em] font-bold">
            Loading Context
          </span>
          <motion.span
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ...
          </motion.span>
        </motion.div>

        {/* Character Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`text-8xl font-serif ${
            isDark ? "text-cyan-200/20" : "text-amber-900/15"
          }`}
          aria-hidden="true"
        >
          谧
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className={`absolute inset-0 ${
          isDark ? "opacity-[0.03]" : "opacity-[0.05]"
        }`}
        style={{
          backgroundImage: isDark 
            ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)` 
            : `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </motion.div>
  )
}
