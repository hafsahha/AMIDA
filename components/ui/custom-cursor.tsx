"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })
  const trailIdRef = useRef(0)

  useEffect(() => {
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
  }, [cursorX, cursorY])

  return (
    <>
      {trail.map((pos, i) => (
        <motion.div
          key={pos.id}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9998] hidden md:block"
          style={{
            left: pos.x,
            top: pos.y,
            backgroundColor: "var(--primary)",
            filter: "blur(4px)",
            mixBlendMode: "difference",
          }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "var(--primary)" : "transparent",
          opacity: isHovering ? 0.3 : 1,
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
    </>
  )
}
