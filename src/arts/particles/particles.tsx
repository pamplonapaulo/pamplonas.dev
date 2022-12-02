import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { useCanvas } from 'contexts'
import risoColors from 'riso-colors'
import Color from 'canvas-sketch-util/color'
import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'
import colormap from 'colormap'
import eases from 'eases'
import interpolate from 'color-interpolate'

const Particles = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()

  const [animateOn] = useState(true)
  let anime = useRef<number>(0)

  const colors = colormap({
    colormap: 'viridis',
    nshades: 20,
  })

  type particle = {
    x: number
    y: number
    ax: number
    ay: number
    vx: number
    vy: number
    ix: number
    iy: number
    radius: number
    scale: number
    color: string
    minDist: number
    pushFactor: number
    dampFactor: number
    update: () => void
    draw: (ctx: CanvasRenderingContext2D) => void
  }

  const Particle = useMemo(
    () =>
      class Particles {
        x: number
        y: number
        ax: number
        ay: number
        vx: number
        vy: number
        ix: number
        iy: number
        radius: number
        scale: number
        color: string
        minDist: number
        pushFactor: number
        pullFactor: number
        dampFactor: number

        constructor({ x, y, radius = 10 }) {
          // position
          this.x = x
          this.y = y

          // acceleration
          this.ax = 0
          this.ay = 0

          // velocity
          this.vx = 0
          this.vy = 0

          // initial position
          this.ix = x
          this.iy = y

          this.radius = radius
          this.scale = 1
          this.color = colors[0]

          this.minDist = random.range(100, 200)
          this.pushFactor = random.range(0.01, 0.02)
          this.pullFactor = random.range(0.002, 0.006)
          this.dampFactor = random.range(0.9, 0.95)
        }

        update() {
          let dx: number,
            dy: number,
            dd: number,
            distDelta: number,
            idxColor: number

          // pull force
          dx = this.ix - this.x
          dy = this.iy - this.y
          dd = Math.sqrt(dx * dx + dy * dy)

          this.ax = dx * this.pullFactor
          this.ay = dy * this.pullFactor

          this.scale = math.mapRange(dd, 0, 200, 1, 5)

          idxColor = Math.floor(
            math.mapRange(dd, 0, 200, 0, colors.length - 1, true)
          )

          this.color = colors[idxColor]

          // push force
          dx = this.x - cursor.current.x
          dy = this.y - cursor.current.y
          dd = Math.sqrt(dx * dx + dy * dy)

          distDelta = this.minDist - dd

          if (dd < this.minDist) {
            this.ax += (dx / dd) * distDelta * this.pushFactor
            this.ay += (dy / dd) * distDelta * this.pushFactor
          }

          this.vx += this.ax
          this.vy += this.ay

          this.vx *= this.dampFactor
          this.vy *= this.dampFactor

          this.x += this.vx
          this.y += this.vy
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.save()
          ctx.translate(this.x, this.y)
          ctx.fillStyle = this.color

          ctx.beginPath()
          ctx.arc(0, 0, this.radius * this.scale, 0, Math.PI * 2)
          ctx.fill()

          ctx.restore()
        }
      },
    [colors]
  )

  const particles = useMemo<particle[]>(() => [], [])

  let cursor = useRef<{ x: number; y: number }>({ x: 9999, y: 9999 })

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      const x = (e.offsetX / canvas.current.offsetWidth) * canvas.current.width
      const y =
        (e.offsetY / canvas.current.offsetHeight) * canvas.current.height

      cursor.current.x = x
      cursor.current.y = y
    },
    [cursor]
  )

  const onMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)

    cursor.current.x = 9999
    cursor.current.y = 9999
  }, [onMouseMove])

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)

      onMouseMove(e)
    },
    [onMouseUp, onMouseMove]
  )

  const render = useCallback(
    (frameCounter = 0) => {
      if (ctx.current === null) return

      ctx.current.fillStyle = '#000'
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      particles.sort((a, b) => a.scale - b.scale)

      particles.forEach((p) => {
        p.update()
        p.draw(ctx.current)
      })

      if (window.innerWidth >= 1024) {
        canvas.current?.addEventListener('mousedown', onMouseDown)
      }

      setCanvas(canvas.current)
    },
    [dimensions, setCanvas, particles, onMouseDown]
  )

  useEffect(() => {
    const h = window.innerHeight - 80
    const w = window.innerWidth

    setDimensions({
      w,
      h,
    })
  }, [])

  const animate = useCallback(() => {
    render(anime.current)
    anime.current = requestAnimationFrame(animate)
  }, [render])

  useEffect(() => {
    if (animateOn) {
      cancelAnimationFrame(anime.current)
      anime.current = requestAnimationFrame(animate)
    }
  }, [animate, animateOn])

  useEffect(() => {
    if (canvas.current && dimensions.h > 0) {
      canvas.current.height = dimensions.h
      canvas.current.width = dimensions.w
      ctx.current = canvas.current.getContext('2d')

      ctx.current.fillStyle = '#000'
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      let x: number, y: number
      let pos = []
      const numCircles = 15
      const gapCircle = 2
      const gapDot = 2
      let dotRadius = 12
      let cirRadius = 0
      const fitRadius = dotRadius

      for (let i = 0; i < numCircles; i++) {
        const circumference = Math.PI * 2 * cirRadius
        const numFit = i
          ? Math.floor(circumference / (fitRadius * 2 + gapDot))
          : 1
        const fitSlice = (Math.PI * 2) / numFit

        for (let j = 0; j < numFit; j++) {
          const theta = fitSlice * j

          x = Math.cos(theta) * cirRadius
          y = Math.sin(theta) * cirRadius

          x += dimensions.w * 0.5
          y += dimensions.h * 0.5

          const p = new Particle({ x, y, radius: dotRadius })
          particles.push(p)
        }
        cirRadius += fitRadius * 2 + gapCircle
        dotRadius = (1 - eases.quadOut(i / numCircles)) * fitRadius
      }
      render()
    }
  }, [dimensions, render, Particle, particles])

  return <S.Canvas ref={canvas} />
}

export default Particles
