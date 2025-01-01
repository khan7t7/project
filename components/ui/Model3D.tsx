// "use client"

// import { useEffect, useRef } from 'react'
// import * as THREE from 'three'
// import { OrbitControls as OrbitControlsImpl } from 'three/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader as GLTFLoaderImpl } from 'three/examples/jsm/loaders/GLTFLoader.js'

// export function Model3D() {
//   const mountRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!mountRef.current) return

//     // Scene setup
//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

//     renderer.setSize(window.innerWidth, window.innerHeight)
//     renderer.setClearColor(0x000000, 0) // Transparent background
//     mountRef.current.appendChild(renderer.domElement)

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
//     scene.add(ambientLight)
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
//     directionalLight.position.set(5, 5, 5)
//     scene.add(directionalLight)

//     // Camera position
//     camera.position.z = 5
//     camera.position.y = 2

//     // Controls
//     const controls = new OrbitControlsImpl(camera, renderer.domElement)
//     controls.enableDamping = true
//     controls.dampingFactor = 0.05
//     controls.enableZoom = false
//     controls.autoRotate = true
//     controls.autoRotateSpeed = 2

//     // Load 3D model
//     const loader = new GLTFLoaderImpl()
//     loader.load(
//       '/scene.gltf',
//       (gltf: { scene: THREE.Object3D }) => {
//         const model = gltf.scene
//         // Center the model
//         const box = new THREE.Box3().setFromObject(model)
//         const center = box.getCenter(new THREE.Vector3())
//         model.position.sub(center)

//         // Scale the model
//         const scale = 2
//         model.scale.set(scale, scale, scale)

//         scene.add(model)
//       },
//       undefined,
//       (error: unknown) => {
//         console.error('Error loading 3D model:', error instanceof Error ? error.message : error)
//       }
//     )

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate)
//       controls.update()
//       renderer.render(scene, camera)
//     }
//     animate()

//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight
//       camera.updateProjectionMatrix()
//       renderer.setSize(window.innerWidth, window.innerHeight)
//     }
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//       mountRef.current?.removeChild(renderer.domElement)
//     }
//   }, [])

//   return <div ref={mountRef} className="fixed inset-0 -z-10" />
// }
