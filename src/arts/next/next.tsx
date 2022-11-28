import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { useCanvas } from 'contexts'
import risoColors from 'riso-colors'
import Color from 'canvas-sketch-util/color'
import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'

const Next = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const [animateOn, setAnimateOn] = useState(true)

  let anime = useRef<number>(0)

  type Mask = {
    x: number
    y: number
  }

  let mask = useRef<Mask | null>(null)

  type point = {
    x: number
    y: number
    control?: boolean
    draw: (ctx: CanvasRenderingContext2D) => void
    hitTest: (x: number, y: number) => boolean
    isDragging?: boolean
  }

  const points = useMemo<point[]>(() => [], [])

  const Point = useMemo(
    () =>
      class Point {
        x: number
        y: number
        control: boolean

        constructor({ x, y, control = false }) {
          this.x = x
          this.y = y
          this.control = control
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.save()
          ctx.translate(this.x, this.y)

          ctx.fillStyle = this.control ? 'red' : 'white'

          ctx.beginPath()
          ctx.arc(0, 0, 10, 0, Math.PI * 2)
          ctx.fill()

          ctx.restore()
        }

        hitTest(x: number, y: number) {
          const dx = this.x - x
          const dy = this.y - y
          const dd = Math.sqrt(dx * dx + dy * dy)
          return dd < 20
        }
      },
    []
  )

  const getCoordinatesOnMobile = (e: any) => {
    const bcr = e.target.getBoundingClientRect()

    const offsetX = e.targetTouches[0].clientX - bcr.x
    const offsetY = e.targetTouches[0].clientY - bcr.y

    const x = (offsetX / canvas.current.offsetWidth) * canvas.current.width
    const y = (offsetY / canvas.current.offsetHeight) * canvas.current.height

    return [x, y]
  }

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      const x = (e.offsetX / canvas.current.offsetWidth) * canvas.current.width
      const y =
        (e.offsetY / canvas.current.offsetHeight) * canvas.current.height
      points.forEach((p: point) => {
        if (p.isDragging) {
          p.x = x
          p.y = y
        }
      })
    },
    [points]
  )

  const onTouchMove = useCallback(
    (e: TouchEvent | React.TouchEvent<HTMLElement>) => {
      const [x, y] = getCoordinatesOnMobile(e)
      points.forEach((p: point) => {
        if (p.isDragging) {
          document.documentElement.style.overflow = 'hidden'
          p.x = x
          p.y = y
        }
      })
    },
    [points]
  )

  const onMouseUp = useCallback(
    (e: MouseEvent) => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    },
    [onMouseMove]
  )

  const onTouchEnd = useCallback(
    (e: TouchEvent) => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    },
    [onTouchMove]
  )

  const isDragging = useCallback(
    (x: number, y: number) => {
      let hit = false
      points.forEach((p: point) => {
        p.isDragging = p.hitTest(x, y)
        if (!hit && p.isDragging) hit = true
      })
      if (!hit) points.push(new Point({ x, y }))
    },
    [Point, points]
  )

  const onTouchStart = useCallback(
    (e: TouchEvent) => {
      window.addEventListener('touchmove', onTouchMove)
      window.addEventListener('touchend', onTouchEnd)

      const [x, y] = getCoordinatesOnMobile(e)

      isDragging(x, y)
    },
    [onTouchEnd, onTouchMove, isDragging]
  )

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)

      const x = (e.offsetX / canvas.current.offsetWidth) * canvas.current.width
      const y =
        (e.offsetY / canvas.current.offsetHeight) * canvas.current.height

      isDragging(x, y)
    },
    [onMouseUp, onMouseMove, isDragging]
  )

  const render = useCallback(
    (frameCounter?: number) => {
      if (ctx.current === null) return

      ctx.current.fillStyle = '#000'
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      ctx.current.lineWidth = 1
      ctx.current.strokeStyle = '#3a3b3c'
      ctx.current.beginPath()
      ctx.current.moveTo(points[0].x, points[0].y)

      for (let i = 1; i < points.length; i++) {
        ctx.current.lineTo(points[i].x, points[i].y)
      }

      ctx.current.stroke()

      ctx.current.beginPath()

      for (let i = 0; i < points.length - 1; i++) {
        const curr = points[i + 0]
        const next = points[i + 1]

        const mx = curr.x + (next.x - curr.x) * 0.5
        const my = curr.y + (next.y - curr.y) * 0.5

        if (i == 0) ctx.current.moveTo(curr.x, curr.y)
        else if (i == points.length - 2)
          ctx.current.quadraticCurveTo(curr.x, curr.y, next.x, next.y)
        else ctx.current.quadraticCurveTo(curr.x, curr.y, mx, my)
      }

      ctx.current.lineWidth = 4
      ctx.current.strokeStyle = '#efd81f'
      ctx.current.stroke()

      points.forEach((p: point) => {
        p.draw(ctx.current)
      })

      if (window.innerWidth >= 1024) {
        canvas.current?.addEventListener('mousedown', onMouseDown)
      } else {
        canvas.current?.addEventListener('touchstart', onTouchStart)
      }

      setCanvas(canvas.current)
    },
    [setCanvas, onMouseDown, onTouchStart, dimensions, points]
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

      mask.current = {
        x: dimensions.w * 0.5,
        y: dimensions.h * 0.5,
      }

      const y = mask.current.y
      const x = dimensions.w

      points.push(new Point({ x: x * 0.275, y }))
      points.push(new Point({ x: x * 0.4, y: y + 175 }))
      points.push(new Point({ x: x * 0.75, y }))
      points.push(new Point({ x: x * 0.55, y: y + 175 }))
      points.push(new Point({ x: x * 0.6, y: y + 400 }))

      render()
    }
  }, [dimensions, render, Point, points])

  return <S.Canvas ref={canvas} />
}

export default Next
