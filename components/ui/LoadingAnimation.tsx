"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import * as THREE from "three"

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const currentRef = canvasRef.current

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    currentRef.appendChild(renderer.domElement)

    // Create loading ring
    const geometry = new THREE.TorusGeometry(0.7, 0.1, 16, 100)
    const material = new THREE.MeshBasicMaterial({
      color: 0x6495ED,
      wireframe: true,
    })
    const torus = new THREE.Mesh(geometry, material)
    scene.add(torus)

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry()
    const count = 200
    const positions = new Float32Array(count * 3)

    for(let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x6495ED,
      transparent: true,
      opacity: 0.8,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    camera.position.z = 2

    const animate = () => {
      requestAnimationFrame(animate)
      torus.rotation.x += 0.01
      torus.rotation.y += 0.005
      particles.rotation.y += 0.002
      renderer.render(scene, camera)
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      currentRef?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <motion.div
      ref={mountRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div ref={canvasRef} className="absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <motion.div
          className="text-3xl font-bold text-primary text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.div>
        <motion.div
          className="text-sm text-muted-foreground mt-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Preparing your experience
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
