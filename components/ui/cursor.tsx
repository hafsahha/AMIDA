"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"
import { useTheme } from "next-themes"

export function Cursor() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const [isMounted, setIsMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for hardware-accelerated cursor position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring config for snappier, more responsive cursor movement
  const springConfig = { damping: 28, stiffness: 500, mass: 0.3 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Ref to track clickable state
  const isClickableRef = useRef(false)

  // Hydration fix
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Helper to detect clickable elements
  const checkClickable = useCallback((target: HTMLElement): boolean => {
    return (
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("button") !== null ||
      target.closest("a") !== null ||
      target.classList.contains("clickable") ||
      target.role === "button"
    )
  }, [])

  // Track mouse movement
  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      // Direct motion value updates - bypasses React render cycle
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Only update React state if hover state changes
      const target = e.target as HTMLElement
      const clickable = checkClickable(target)

      if (clickable !== isClickableRef.current) {
        isClickableRef.current = clickable
        setIsHovered(clickable)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMounted, mouseX, mouseY, checkClickable])

  if (!isMounted) return null

  // Determine theme-based colors (CRITICAL: Uses resolvedTheme for dynamic updates)
  const isDayMode = !isDark

  // Day Mode (Vibrant Brown with Orange - High visibility on light backgrounds)
  const dayBase = "bg-gradient-to-br from-orange-500/20 to-amber-900/10"
  const dayBorder = "border-2 border-orange-600/90"
  const dayFilter = "backdrop-blur-sm"

  // Night Mode (Neon Teal Glow - Keep existing style)
  const nightBase = "bg-teal-400/30"
  const nightBorder = "border-2 border-teal-300"
  const nightGlow = "shadow-[0_0_20px_rgba(45,212,191,0.6)]"

  // Apply theme-specific classes
  const baseClass = isDayMode ? dayBase : nightBase
  const borderClass = isDayMode ? dayBorder : nightBorder
  const filterClass = isDayMode ? dayFilter : ""
  const glowClass = isDayMode ? "" : nightGlow

  // Hover state: scale up to 60px (from 32px base)
  const hoverScale = isHovered ? 1.875 : 1 // 60px / 32px

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-[99999] w-8 h-8 ${baseClass} ${borderClass} ${filterClass} ${glowClass} will-change-transform animate-blob rounded-full`}
      style={{
        x: smoothX,
        y: smoothY,
        mixBlendMode: "screen",
      }}
      animate={{
        scale: hoverScale,
        opacity: 1,
      }}
      transition={{
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.3,
        },
        opacity: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    />
  )
}
