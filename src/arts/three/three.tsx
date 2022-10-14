import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { degToRad, randomRange } from 'utils/canvas'

const ArtThree = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = React.useRef<CanvasRenderingContext2D | null>(null)
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })

  const [agents, setAgents] = useState<agent[]>([])
  const [moving, setMoving] = useState<boolean>(false)

  const bubbles = 80

  const colors = useMemo(
    () => ['#3494DF', '#38C1AD', '#60079F', '#F32C43', '#f8f32b', '#1b1b1b'],
    []
  )

  const colorRandom = (colors: string[]) => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const item = colors[randomIndex]
    return item
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
      },
    []
  )

  type vector = {
    x: number
    y: number
  }

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
          this.radius = randomRange(2, 15)
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
          context.save()
          context.translate(this.pos.x, this.pos.y)
          context.lineWidth = 1
          context.fillStyle = this.color
          context.beginPath()
          context.arc(0, 0, this.radius, 0, Math.PI * 2)
          context.fill()
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

    agents.forEach((a: agent) => {
      a.update()
      a.draw(ctx.current!)
      a.bounce(dimensions.w, dimensions.h)
    })
    if (!moving) setMoving(true)
  }, [agents, dimensions, moving])

  useEffect(() => {
    const w = window.innerWidth >= 1480 ? 1480 - 32 : window.innerWidth - 32
    const h = window.innerHeight - 32 - 80

    const arr: agent[] = []
    for (let i = 0; i < bubbles; i++) {
      arr.push(
        new Agent(randomRange(0, w), randomRange(0, h), colorRandom(colors))
      )
    }
    setAgents(arr)
    setDimensions({
      w,
      h,
    })
  }, [Agent, colors])

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

export default ArtThree
