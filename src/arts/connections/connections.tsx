import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import * as S from './styles'
import { mapRange, randomRange } from 'utils/canvas'

const Connections = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = React.useRef<CanvasRenderingContext2D | null>(null)
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })

  const [agents, setAgents] = useState<agent[]>([])
  const [moving, setMoving] = useState<boolean>(false)
  const [vertices, setVertices] = useState<number>(30)

  const colors = useMemo(
    () => ['#3494DF', '#38C1AD', '#60079F', '#F32C43', '#f8f32b'],
    []
  )

  const colorRandom = (colors: string[]) => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const item = colors[randomIndex]
    return item
  }

  type vector = {
    x: number
    y: number
    getDistance(v: vector): number
  }

  const Vector = useMemo(
    () =>
      class Vector {
        x: number
        y: number
        constructor(x: number, y: number) {
          this.x = x
          this.y = y
        }
        getDistance(v: vector) {
          const dx = this.x - v.x
          const dy = this.y - v.y
          return Math.sqrt(dx * dx + dy * dy)
        }
      },
    []
  )

  const Agent = useMemo(
    () =>
      class Agent {
        pos: vector
        vel: vector
        radius: number
        color: string
        constructor(x: number, y: number, color: string) {
          this.pos = new Vector(x, y)
          this.vel = new Vector(randomRange(-1, 1), randomRange(-1, 1))
          this.radius = randomRange(4, 8)
          this.color = color
        }
        bounce(w: number, h: number) {
          if (this.pos.x <= 0 || this.pos.x >= w) this.vel.x *= -1
          if (this.pos.y <= 0 || this.pos.y >= h) this.vel.y *= -1
        }
        update() {
          this.pos.x += this.vel.x
          this.pos.y += this.vel.y
        }
        draw(context: CanvasRenderingContext2D) {
          context.fillStyle = '#000'
          context.save()
          context.translate(this.pos.x, this.pos.y)
          context.lineWidth = 1

          context.beginPath()
          context.arc(0, 0, this.radius, 0, Math.PI * 2)
          context.fill()

          context.strokeStyle = this.color
          context.stroke()
          context.restore()
        }
      },
    [Vector]
  )

  type agent = {
    pos: vector
    radius: number
    color: string
    bounce(w: number, h: number): unknown
    update(): unknown
    draw(ctx: CanvasRenderingContext2D): unknown
  }

  const renderFrame = useCallback(() => {
    ctx.current!.fillRect(0, 0, dimensions.w, dimensions.h)

    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i]

      for (let j = i + 1; j < agents.length; j++) {
        const other = agents[j]
        const dist = agent.pos.getDistance(other.pos)

        if (dist > 200) continue

        ctx.current!.lineWidth = mapRange(dist, 0, 200, 6, 1)

        ctx.current!.beginPath()
        ctx.current!.moveTo(agent.pos.x, agent.pos.y)
        ctx.current!.lineTo(other.pos.x, other.pos.y)
        ctx.current!.strokeStyle = '#1b1b1b'

        ctx.current!.stroke()
      }
    }

    agents.forEach((a: agent) => {
      a.update()
      a.draw(ctx.current!)
      a.bounce(dimensions.w, dimensions.h)
    })
    if (!moving) setMoving(true)
  }, [agents, dimensions, moving])

  useEffect(() => {
    const w = window.innerWidth
    const h = window.innerHeight - 80

    if (window.innerWidth > 1024) {
      setVertices(75)
    }

    const arr: agent[] = []
    for (let i = 0; i < vertices; i++) {
      arr.push(
        new Agent(randomRange(0, w), randomRange(0, h), colorRandom(colors))
      )
    }
    setAgents(arr)
    setDimensions({
      w,
      h,
    })
  }, [Agent, colors, setVertices, vertices])

  useEffect(() => {
    if (canvas.current && dimensions.h > 0) {
      canvas.current.height = dimensions.h
      canvas.current.width = dimensions.w
      ctx.current = canvas.current.getContext('2d')

      requestAnimationFrame(renderFrame)
    }
  }, [dimensions, renderFrame])

  useEffect(() => {
    const animate = () => {
      if (moving) {
        renderFrame()
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [moving, renderFrame])

  return <S.Canvas ref={canvas} />
}

export default Connections
