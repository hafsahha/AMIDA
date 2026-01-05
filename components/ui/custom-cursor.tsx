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
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)

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

  const trailColor = isDark ? "rgba(0, 255, 255, 0.6)" : "rgba(180, 83, 9, 0.4)"
  const cursorColor = isDark ? "#00ffff" : "#b45309"
  const glowFilter = isDark ? "drop-shadow(0 0 8px rgba(0, 255, 255, 0.6))" : "none"

  return (
    <>
      {trail.map((pos) => (
        <motion.div
          key={pos.id}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9998] hidden md:block w-4 h-4 rounded-full"
          style={{
            left: pos.x,
            top: pos.y,
            backgroundColor: trailColor,
            filter: "blur(4px)",
          }}
        />
      ))}

      {/* Main cursor - Solid ring/dot with theme-based colors */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          width: 32,
          height: 32,
          left: -16,
          top: -16,
        }}
      >
        {/* Outer ring */}
        <div
          className="absolute w-8 h-8 rounded-full border-2 transition-all duration-300"
          style={{
            borderColor: cursorColor,
            opacity: isHovering ? 0.5 : 1,
            filter: glowFilter,
          }}
        />
        {/* Inner dot */}
        <div
          className="absolute w-2 h-2 rounded-full transition-all duration-300"
          style={{
            backgroundColor: cursorColor,
            opacity: isHovering ? 0.8 : 0.5,
            filter: glowFilter,
            transform: isHovering ? "scale(1.5)" : "scale(1)",
          }}
        />
      </motion.div>
    </>
  )
}
