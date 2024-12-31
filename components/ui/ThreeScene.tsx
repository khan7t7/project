"use client"

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Store ref in a variable for cleanup
    const currentRef = mountRef.current;

    // Reduce particle count for mobile
    const isMobile = window.innerWidth < 768;
    const particlesCount = isMobile ? 2000 : 5000;
    const particleSize = isMobile ? 0.008 : 0.005;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentRef.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: particleSize,
      color: new THREE.Color(0x6495ED),
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Floating Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.5, 64, 64);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x6495ED,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Lighting
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Camera positioning
    camera.position.z = 2;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Optimize animation frame rate
    let lastTime = 0;
    const fps = 60;
    const interval = 1000 / fps;

    const animate = (currentTime: number) => {
      requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < interval) return;

      lastTime = currentTime - (deltaTime % interval);

      // Rotate particles
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Animate sphere
      sphere.rotation.y += 0.005;
      sphere.position.y = Math.sin(Date.now() * 0.001) * 0.1;

      // Mouse interaction
      particlesMesh.rotation.x += mouseY * 0.0003;
      particlesMesh.rotation.y += mouseX * 0.0003;
      sphere.rotation.x += mouseY * 0.001;
      sphere.rotation.y += mouseX * 0.001;

      renderer.render(scene, camera);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      currentRef?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}
