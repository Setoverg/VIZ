"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  size: number
  opacity: number
}

interface ChristmasElement {
  id: number
  type: "santa" | "tree" | "gift" | "star" | "snowman"
  x: number
  y: number
  delay: number
  duration: number
  size: number
}

export function ChristmasAnimations() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])
  const [elements, setElements] = useState<ChristmasElement[]>([])

  useEffect(() => {
    // Generate snowflakes
    const newSnowflakes: Snowflake[] = []
    for (let i = 0; i < 50; i++) {
      newSnowflakes.push({
        id: i,
        x: Math.random() * 100,
        y: -Math.random() * 20,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 7,
        size: 8 + Math.random() * 12,
        opacity: 0.4 + Math.random() * 0.6,
      })
    }
    setSnowflakes(newSnowflakes)

    // Generate Christmas elements
    const newElements: ChristmasElement[] = []
    const types: Array<"santa" | "tree" | "gift" | "star" | "snowman"> = ["santa", "tree", "gift", "star", "snowman"]

    for (let i = 0; i < 12; i++) {
      newElements.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        size: 30 + Math.random() * 25,
      })
    }
    setElements(newElements)
  }, [])

  const getEmoji = (type: "santa" | "tree" | "gift" | "star" | "snowman") => {
    switch (type) {
      case "santa":
        return "🎅"
      case "tree":
        return "🎄"
      case "gift":
        return "🎁"
      case "star":
        return "⭐"
      case "snowman":
        return "⛄"
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {/* Snowflakes falling */}
      {snowflakes.map((snowflake) => (
        <div
          key={`snow-${snowflake.id}`}
          className="absolute animate-snow-fall"
          style={{
            left: `${snowflake.x}%`,
            top: `${snowflake.y}%`,
            animationDelay: `${snowflake.delay}s`,
            animationDuration: `${snowflake.duration}s`,
            fontSize: `${snowflake.size}px`,
            opacity: snowflake.opacity,
          }}
        >
          ❄️
        </div>
      ))}

      {/* Floating Christmas elements */}
      {elements.map((element) => (
        <div
          key={`elem-${element.id}`}
          className="absolute animate-float-christmas"
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

      {/* Christmas light glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-green-500/5 to-transparent animate-pulse-slow pointer-events-none" />
    </div>
  )
}
