"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"

export function SparklingSphere() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return

    try {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      const raycaster = new THREE.Raycaster()
      const mousePos = new THREE.Vector2()
      const mousePosition3D = new THREE.Vector3()
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)

      // Scene setup
      scene.background = null // Make background transparent
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.5
      mountRef.current.appendChild(renderer.domElement)

      // Camera position and controls
      camera.position.z = 5
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.1
      controls.enableZoom = true
      controls.minDistance = 3
      controls.maxDistance = 8
      controls.zoomSpeed = 0.5
      controls.enablePan = false
      controls.maxPolarAngle = Math.PI * 0.65
      controls.minPolarAngle = Math.PI * 0.35
      controls.enableRotate = true
      controls.rotateSpeed = 0.5

      // Post-processing setup
      const composer = new EffectComposer(renderer)
      const renderPass = new RenderPass(scene, camera)
      composer.addPass(renderPass)

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.8,
        0.3,
        0.1
      )
      composer.addPass(bloomPass)

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x111111)
      scene.add(ambientLight)

      const pointLight = new THREE.PointLight(0x88ccff, 1)
      pointLight.position.set(5, 5, 5)
      scene.add(pointLight)

      // Group for particles
      const group = new THREE.Group()
      scene.add(group)

      // Interactive parameters
      const interactionRadius = 1.2
      const maxGlowIntensity = 3
      const baseGlowIntensity = 0.3
      const dispersalForce = 0.05
      const returnForce = 0.02
      const dampingFactor = 0.95
      const rotationSpeed = 0.0025

      const colorCycle = {
        current: 0,
        progress: 0,
        colors: [
              // Set 1: Core Theme Gradient (Cool Blue to Deep Purple)
          [0xa0d2eb, 0xd0bdf4, 0x8458B3], // Ice Cold -> Medium Purple -> Purple Pain

          // Set 2: Light & Ethereal (Very Light Purple to Icy Blue)
          [0xe5eaf5, 0xd0bdf4, 0xa0d2eb], // Freeze Purple -> Medium Purple -> Ice Cold

          // Set 3: Rich Purples with Muted Tone (Medium Purple to Heavy Purple)
          [0xd0bdf4, 0x8458B3, 0xa28089], // Medium Purple -> Purple Pain -> Heavy Purple

          // Set 4: Contrasting Cool to Warm Purples (Icy Blue through Muted Mauve to Vibrant Purple)
          [0xa0d2eb, 0xa28089, 0x8458B3], // Ice Cold -> Heavy Purple -> Purple Pain

          // Set 5: Bright & Airy to Deeper Cool Tones (Very Light Purple to Icy Blue to Deep Purple)
          [0xe5eaf5, 0xa0d2eb, 0x8458B3]  // Freeze Purple -> Ice Cold -> Purple Pain
        ]
      }

      // Add easing function
      const easeInOutSine = (x: number): number => {
        return -(Math.cos(Math.PI * x) - 1) / 2
      }

      // Create particles
      const createParticles = () => {
        const particles = []
        const count = 1800
        const radius = 2.5

        const geometry = new THREE.SphereGeometry(0.015, 6, 6)
        const colors = colorCycle.colors[0]

        for (let i = 0; i < count; i++) {
          const theta = Math.random() * Math.PI * 2
          const phi = Math.acos(2 * Math.random() - 1)
          const x = radius * Math.sin(phi) * Math.cos(theta)
          const y = radius * Math.sin(phi) * Math.sin(theta)
          const z = radius * Math.cos(phi)

          const position = new THREE.Vector3(x, y, z)
          const baseColor = colors[Math.floor(Math.random() * colors.length)]
          const material = new THREE.MeshStandardMaterial({
            color: baseColor,
            emissive: baseColor,
            emissiveMap: null,
            metalness: 0.5,
            roughness: 0.2,
            toneMapped: false,
          })

          const mesh = new THREE.Mesh(geometry, material)
          mesh.position.copy(position)
          group.add(mesh)

          particles.push({
            mesh,
            position: position.clone(),
            originalPosition: position.clone(),
            velocity: new THREE.Vector3(),
            quaternion: new THREE.Quaternion(),
            baseColor: new THREE.Color(baseColor),
            currentIntensity: baseGlowIntensity,
          })
        }
        return particles
      }

      const particles = createParticles()

      const updateParticles = () => {
        // Increase speed of color transition
        colorCycle.progress += 0.002 // Changed from 0.0005 to 0.002

        if (colorCycle.progress >= 1) {
          colorCycle.progress = 0
          colorCycle.current = (colorCycle.current + 1) % colorCycle.colors.length
        }

        const currentColors = colorCycle.colors[colorCycle.current]
        const nextColors = colorCycle.colors[(colorCycle.current + 1) % colorCycle.colors.length]
        const easedProgress = easeInOutSine(colorCycle.progress)

        particles.forEach((particle, i) => {
          const currentColor = new THREE.Color(currentColors[i % 3])
          const nextColor = new THREE.Color(nextColors[i % 3])
          particle.baseColor = new THREE.Color().lerpColors(
            currentColor,
            nextColor,
            easedProgress
          )
          particle.mesh.material.color = particle.baseColor.clone()
          particle.mesh.material.emissive = particle.baseColor.clone().multiplyScalar(particle.currentIntensity)
        })

        raycaster.setFromCamera(mousePos, camera)
        raycaster.ray.intersectPlane(plane, mousePosition3D)

        particles.forEach((particle) => {
          const distanceToMouse = particle.position.distanceTo(mousePosition3D)
          const isInRange = distanceToMouse < interactionRadius

          if (isInRange) {
            const force = dispersalForce * (1 - distanceToMouse / interactionRadius)
            const repulsionDir = particle.position.clone().sub(mousePosition3D).normalize()
            particle.velocity.add(repulsionDir.multiplyScalar(force))

            const intensity = THREE.MathUtils.lerp(maxGlowIntensity, baseGlowIntensity, distanceToMouse / interactionRadius)
            particle.mesh.material.emissive = particle.baseColor.clone().multiplyScalar(intensity)
          } else {
            particle.mesh.material.emissive = particle.baseColor.clone().multiplyScalar(baseGlowIntensity)
          }

          const returnForceVector = particle.originalPosition.clone()
            .sub(particle.position)
            .normalize()
            .multiplyScalar(returnForce * particle.position.distanceTo(particle.originalPosition))

          particle.velocity.add(returnForceVector)
          particle.velocity.multiplyScalar(dampingFactor)
          particle.position.add(particle.velocity)
          particle.mesh.position.copy(particle.position)
        })

        group.rotation.y += rotationSpeed
      }

      // Store these in refs so they're accessible in cleanup
      const cleanupRefs = {
        renderer,
        handleWindowResize: () => {
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
          composer.setSize(window.innerWidth, window.innerHeight)
        },
        handleMouseMove: (event: MouseEvent) => {
          // Get mouse position relative to canvas
          const rect = renderer.domElement.getBoundingClientRect()
          mousePos.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
          mousePos.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

          // Update raycaster
          raycaster.setFromCamera(mousePos, camera)
          raycaster.ray.intersectPlane(plane, mousePosition3D)
        }
      }

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate)
        updateParticles()
        controls.update()
        composer.render()
      }

      window.addEventListener("resize", cleanupRefs.handleWindowResize)
      window.addEventListener("mousemove", cleanupRefs.handleMouseMove)

      // Start animation
      animate()

      // Store ref value to avoid closure issues
      const mountElement = mountRef.current

      return () => {
        try {
          window.removeEventListener("resize", cleanupRefs.handleWindowResize)
          window.removeEventListener("mousemove", cleanupRefs.handleMouseMove)
          mountElement?.removeChild(cleanupRefs.renderer.domElement)
        } catch (error) {
          console.error('Error cleaning up 3D scene:', error)
        }
      }
    } catch (error) {
      console.error('Error initializing 3D scene:', error)
      setHasError(true)
    }
  }, [hasError])

  if (hasError) {
    return null // Fallback UI or null if sphere fails
  }

  return <div ref={mountRef} className="fixed inset-0 -z-10" />
}
