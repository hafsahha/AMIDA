"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function LoadingScreen() {
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"
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
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-amber-500/20 rounded-full blur-xl"
          />
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-md border border-white/10 rounded-3xl px-12 py-8 shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-serif font-bold bg-gradient-to-r from-cyan-200 via-amber-200 to-cyan-300 bg-clip-text text-transparent">
              AMIDA
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2"
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 text-cyan-100/70"
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
            <Sparkles size={20} className="text-cyan-400" />
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
          className="text-8xl text-cyan-200/20 font-serif"
          aria-hidden="true"
        >
          谧
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </motion.div>
  )
}
