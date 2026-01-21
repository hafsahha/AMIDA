"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function CustomCursor() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [isMounted, setIsMounted] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const trailIdRef = useRef(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const moveCursor = (e: MouseEvent) => {
      trailIdRef.current += 1
      setTrail((prev) => [...prev, { x: e.clientX - 6, y: e.clientY - 6, id: trailIdRef.current }])
    }

    window.addEventListener("mousemove", moveCursor)

    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(-12))
    }, 50)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      clearInterval(interval)
    }
  }, [isMounted])

  if (!isMounted) return null

  // Day: Warm Amber | Night: Bright Cyan
  const trailColor = isDark ? "rgba(34, 211, 238, 0.5)" : "rgba(217, 119, 6, 0.6)"

  return (
    <>
      {/* Trail particles only - main cursor image is handled by CSS */}
      {trail.map((pos) => (
        <motion.div
          key={pos.id}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9998] hidden md:block w-3 h-3 rounded-full"
          style={{
            left: pos.x,
            top: pos.y,
            backgroundColor: trailColor,
            filter: "blur(2px)",
          }}
        />
      ))}
    </>
  )
}
