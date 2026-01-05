"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { MeshDistortMaterial, Float, Stars, Environment } from "@react-three/drei"
import * as THREE from "three"

// ClientOnly wrapper to prevent hydration mismatch
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null
  return <>{children}</>
}

function LiquidFloor({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2.1
      meshRef.current.position.y = -2
    }
  })

  return (
    <mesh ref={meshRef} receiveShadow>
      <planeGeometry args={[100, 100, 128, 128]} />
      <MeshDistortMaterial
        color={isDark ? "#0a0a1a" : "#f5f5f0"}
        speed={1.5}
        distort={0.4}
        radius={1}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  )
}

function FloatingStones({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 30

  const dummy = useMemo(() => new THREE.Object3D(), [])

  const positions = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 30,
      y: Math.random() * 5 + 1,
      z: (Math.random() - 0.5) * 30,
      speed: Math.random() * 0.5 + 0.3,
      offset: Math.random() * Math.PI * 2,
    }))
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return

    positions.forEach((pos, i) => {
      const time = state.clock.elapsedTime
      dummy.position.set(pos.x, pos.y + Math.sin(time * pos.speed + pos.offset) * 0.5, pos.z)
      dummy.rotation.x = time * 0.2
      dummy.rotation.y = time * 0.3
      dummy.scale.setScalar(0.8 + Math.sin(time * pos.speed) * 0.2)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.5, 0]} />
      {isDark ? (
        <meshBasicMaterial color="#00ffff" wireframe />
      ) : (
        <meshStandardMaterial color="#8b7355" roughness={0.8} metalness={0.2} />
      )}
    </instancedMesh>
  )
}

function FallingPetals() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 20

  const dummy = useMemo(() => new THREE.Object3D(), [])

  const petals = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 40,
      y: Math.random() * 15 + 10,
      z: (Math.random() - 0.5) * 40,
      speed: Math.random() * 0.3 + 0.1,
      rotSpeed: (Math.random() - 0.5) * 0.5,
    }))
  }, [])

  useFrame((state, delta) => {
    if (!meshRef.current) return

    petals.forEach((petal, i) => {
      petal.y -= petal.speed * delta * 2
      if (petal.y < -2) {
        petal.y = 15
        petal.x = (Math.random() - 0.5) * 40
        petal.z = (Math.random() - 0.5) * 40
      }

      dummy.position.set(petal.x, petal.y, petal.z)
      dummy.rotation.z += petal.rotSpeed * delta
      dummy.rotation.x = Math.sin(state.clock.elapsedTime + i) * 0.3
      dummy.scale.set(0.3, 0.3, 0.05)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="#d4a373" transparent opacity={0.6} side={THREE.DoubleSide} />
    </instancedMesh>
  )
}

function DigitalRain() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 30

  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 40,
      y: Math.random() * 15 - 5,
      z: (Math.random() - 0.5) * 40,
      speed: Math.random() * 0.5 + 0.3,
    }))
  }, [])

  useFrame((state, delta) => {
    if (!meshRef.current) return

    particles.forEach((particle, i) => {
      particle.y += particle.speed * delta * 3
      if (particle.y > 15) {
        particle.y = -5
        particle.x = (Math.random() - 0.5) * 40
        particle.z = (Math.random() - 0.5) * 40
      }

      dummy.position.set(particle.x, particle.y, particle.z)
      dummy.scale.set(0.05, 2, 0.05)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#00ffff" transparent opacity={0.4} />
    </instancedMesh>
  )
}

function Particles({ isDark }: { isDark: boolean }) {
  return isDark ? (
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
  ) : (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[Math.random() * 20 - 10, Math.random() * 10, Math.random() * 20 - 10]}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
        </mesh>
      ))}
    </Float>
  )
}

function CameraController() {
  const { camera } = useThree()

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768
      camera.position.set(0, isMobile ? 4 : 2, isMobile ? 12 : 10)
      camera.fov = isMobile ? 60 : 45
      camera.updateProjectionMatrix()
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [camera])

  return null
}

export function Scene({ isDark }: { isDark: boolean }) {
  return (
    <ClientOnly>
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 2, 10], fov: 45 }}>
          <CameraController />
          <color attach="background" args={[isDark ? "#020205" : "#fdfdfb"]} />
          <fog attach="fog" args={[isDark ? "#020205" : "#fdfdfb", 5, 25]} />

          <ambientLight intensity={isDark ? 0.2 : 0.8} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 1 : 0.5} color={isDark ? "#4444ff" : "#ffffff"} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={isDark ? 2 : 1} castShadow />

          <LiquidFloor isDark={isDark} />
          <Particles isDark={isDark} />

          <FloatingStones isDark={isDark} />
          {!isDark && <FallingPetals />}
          {isDark && <DigitalRain />}

          <Environment preset={isDark ? "night" : "apartment"} />
        </Canvas>
      </div>
    </ClientOnly>
  )
}
