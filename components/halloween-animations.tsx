"use client"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  type: "ghost" | "bat" | "pumpkin"
  x: number
  y: number
  delay: number
  duration: number
  size: number
}

export function HalloweenAnimations() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const newElements: FloatingElement[] = []
    const types: Array<"ghost" | "bat" | "pumpkin"> = ["ghost", "bat", "pumpkin"]

    for (let i = 0; i < 15; i++) {
      const baseSize = 25 + Math.random() * 30
      newElements.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        size: baseSize,
      })
    }

    setElements(newElements)
  }, [])

  const getEmoji = (type: "ghost" | "bat" | "pumpkin") => {
    switch (type) {
      case "ghost":
        return "👻"
      case "bat":
        return "🦇"
      case "pumpkin":
        return "🎃"
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float-halloween"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            fontSize: `${element.size}px`,
            opacity: 0.7,
          }}
        >
          {getEmoji(element.type)}
        </div>
      ))}

      {/* Spooky fog effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-purple-500/5 to-transparent animate-pulse-slow pointer-events-none" />
    </div>
  )
}
