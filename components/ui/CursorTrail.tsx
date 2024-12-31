"use client"

import { useEffect, useState } from 'react';

export function CursorTrail() {
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([])
  const maxTrails = 12 // Increased for more particles
  const trailLifetime = 200 // Shorter lifetime for faster updates

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = []
    let trailId = 0
    let lastX = 0
    let lastY = 0
    let lastTimestamp = 0

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      const timeDiff = now - lastTimestamp

      // Calculate velocity
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      const speed = Math.sqrt(dx * dx + dy * dy) / (timeDiff || 1)

      // Only create new trail if moving fast enough or enough time has passed
      if (speed > 0.1 || timeDiff > 32) { // 32ms = roughly 30fps
        trailId++

        // Create multiple trails with slight offset for particle effect
        for (let i = 0; i < 3; i++) {
          const offset = (Math.random() - 0.5) * 10
          const newTrail = {
            x: e.clientX + offset,
            y: e.clientY + offset,
            id: trailId * 3 + i
          }

          setTrails(prev => [...prev, newTrail].slice(-maxTrails))

          const timeout = setTimeout(() => {
            setTrails(prev => prev.filter(trail => trail.id !== newTrail.id))
          }, trailLifetime)

          timeouts.push(timeout)
        }

        lastX = e.clientX
        lastY = e.clientY
        lastTimestamp = now
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      timeouts.forEach(timeout => clearTimeout(timeout))
    }
  }, [])

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            transform: `translate(-50%, -50%) scale(${1 - (index * 0.1)})`,
          }}
        />
      ))}
    </>
  )
}
