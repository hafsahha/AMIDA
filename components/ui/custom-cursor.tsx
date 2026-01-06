"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring } from "framer-motion"
import { useTheme } from "next-themes"

export function CustomCursor() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })
  const trailIdRef = useRef(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      trailIdRef.current += 1
      setTrail((prev) => [...prev, { x: e.clientX - 8, y: e.clientY - 8, id: trailIdRef.current }])
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("clickable")

      setIsHovering(!!isClickable)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)

    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(-8))
    }, 50)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
      clearInterval(interval)
    }
  }, [isMounted, cursorX, cursorY])

  if (!isMounted) return null

  // Day: Warm Amber (matching text-amber-900) | Night: Bright Cyan (matching text-cyan-400)
  const trailColor = isDark ? "rgba(34, 211, 238, 0.4)" : "rgba(217, 119, 6, 0.5)"
  const cursorColor = isDark ? "#22d3ee" : "#d97706"
  const cursorRingColor = isDark ? "#06b6d4" : "#b45309"
  const glowFilter = isDark ? "drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))" : "drop-shadow(0 0 6px rgba(217, 119, 6, 0.4))"

  return (
    <>
      {/* Trail particles */}
      {trail.map((pos) => (
        <motion.div
          key={pos.id}
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9998] hidden md:block w-3 h-3 rounded-full"
          style={{
            left: pos.x,
            top: pos.y,
            backgroundColor: trailColor,
            filter: "blur(3px)",
          }}
        />
      ))}

      {/* Main cursor - Solid ring/dot with theme-based colors */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          left: 0,
          top: 0,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
          {/* Outer ring */}
          <div
            className="absolute w-7 h-7 rounded-full border-2 transition-all duration-200 ease-out"
            style={{
              borderColor: cursorRingColor,
              opacity: isHovering ? 0.6 : 0.9,
              transform: isHovering ? "scale(1.4)" : "scale(1)",
              filter: glowFilter,
            }}
          />
          {/* Inner dot */}
          <div
            className="absolute w-2 h-2 rounded-full transition-all duration-200 ease-out"
            style={{
              backgroundColor: cursorColor,
              opacity: isHovering ? 1 : 0.7,
              transform: isHovering ? "scale(1.8)" : "scale(1)",
              filter: glowFilter,
            }}
          />
        </div>
      </motion.div>
    </>
  )
}
