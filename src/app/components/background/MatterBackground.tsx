'use client'

import React, { useEffect, useRef } from 'react'

const MatterBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const shapes: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      type: 'square' | 'hexagon' | 'pentagon' | 'triangle'
      rotation: number
      rotationSpeed: number
    }> = []

    // Create initial shapes
    for (let i = 0; i < 50; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 10,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        type: ['square', 'hexagon', 'pentagon', 'triangle'][Math.floor(Math.random() * 4)] as any,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      })
    }

    // Create dots
    const dots: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }> = []

    for (let i = 0; i < 30; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3
      })
    }

    const drawPolygon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, sides: number, rotation: number) => {
      ctx.beginPath()
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides + rotation
        const pointX = x + size * Math.cos(angle)
        const pointY = y + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(pointX, pointY)
        else ctx.lineTo(pointX, pointY)
      }
      ctx.closePath()
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(17, 17, 17, 0.2)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update shapes
      shapes.forEach((shape) => {
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)
        ctx.fillStyle = 'rgba(40, 40, 40, 0.6)'

        switch (shape.type) {
          case 'square':
            ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
            break
          case 'hexagon':
            drawPolygon(ctx, 0, 0, shape.size / 2, 6, 0)
            ctx.fill()
            break
          case 'pentagon':
            drawPolygon(ctx, 0, 0, shape.size / 2, 5, 0)
            ctx.fill()
            break
          case 'triangle':
            drawPolygon(ctx, 0, 0, shape.size / 2, 3, 0)
            ctx.fill()
            break
        }
        ctx.restore()

        shape.x += shape.speedX
        shape.y += shape.speedY
        shape.rotation += shape.rotationSpeed

        if (shape.x < -shape.size) shape.x = canvas.width + shape.size
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size
      })

      // Draw and update dots
      dots.forEach((dot) => {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(45, 212, 191, 0.5)'
        ctx.fill()

        dot.x += dot.speedX
        dot.y += dot.speedY

        if (dot.x < -dot.size) dot.x = canvas.width + dot.size
        if (dot.x > canvas.width + dot.size) dot.x = -dot.size
        if (dot.y < -dot.size) dot.y = canvas.height + dot.size
        if (dot.y > canvas.height + dot.size) dot.y = -dot.size
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: '#111111' }}
    />
  )
}

export default MatterBackground