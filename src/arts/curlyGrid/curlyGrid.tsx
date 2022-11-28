import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { useCanvas } from 'contexts'
import risoColors from 'riso-colors'
import Color from 'canvas-sketch-util/color'
import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'
import colormap from 'colormap'
import { mapRange, Point2dController } from '@tweakpane/core'

const CurlyGrid = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const [animateOn, setAnimateOn] = useState(false)

  type GridType = {
    cols: number
    rows: number
    numCells: number
    gridWidth: number
    gridHeight: number
    cellWidth: number
    cellHeight: number
    marginX: number
    marginY: number
  }

  const Grid = useMemo(
    () =>
      class Grid {
        cols: number
        rows: number
        numCells: number
        gridWidth: number
        gridHeight: number
        cellWidth: number
        cellHeight: number
        marginX: number
        marginY: number

        constructor({ cols, rows }) {
          this.cols = cols
          this.rows = rows
          this.numCells = cols * rows
          this.gridWidth = dimensions.w * 0.8
          this.gridHeight = dimensions.h * 0.8
          this.cellWidth = this.gridWidth / this.cols
          this.cellHeight = this.gridHeight / this.rows
          this.marginX = (dimensions.w - this.gridWidth) * 0.5
          this.marginY = (dimensions.h - this.gridHeight) * 0.5
        }
      },
    [dimensions]
  )

  let grid = useRef<GridType | null>(null)

  let anime = useRef<number>(0)

  type Mask = {
    x: number
    y: number
  }

  let mask = useRef<Mask | null>(null)

  type point = {
    x: number
    y: number
    lineWidth: number
    color: string
    draw: (ctx: CanvasRenderingContext2D) => void
  }

  const points = useMemo<point[]>(() => [], [])

  const Point = useMemo(
    () =>
      class Point {
        x: number
        y: number
        lineWidth: number
        color: string

        constructor({ x, y, lineWidth, color }) {
          this.x = x
          this.y = y
          this.lineWidth = lineWidth
          this.color = color
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.save()
          ctx.translate(this.x, this.y)

          ctx.fillStyle = '#efd81f'

          ctx.beginPath()
          ctx.arc(0, 0, 3, 0, Math.PI * 2)
          ctx.fill()

          ctx.restore()
        }
      },
    []
  )

  const render = useCallback(
    (frameCounter?: number) => {
      if (ctx.current === null) return

      ctx.current.fillStyle = '#000'
      // ctx.current.fillStyle = '#5d4bae'
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      ctx.current.save()
      ctx.current.translate(grid.current.marginX, grid.current.marginY)

      ctx.current.translate(
        grid.current.cellWidth * 0.5,
        grid.current.cellHeight * 0.5
      )

      ctx.current.strokeStyle = '#efd81f'
      ctx.current.lineWidth = 1

      let lastX, lastY

      // draw curves
      for (let r = 0; r < grid.current.rows; r++) {
        for (let c = 0; c < grid.current.cols - 1; c++) {
          const curr = points[r * grid.current.cols + c + 0]
          const next = points[r * grid.current.cols + c + 1]

          // const mx = curr.x + (next.x - curr.x) * 0.5
          // const my = curr.y + (next.y - curr.y) * 0.5
          const mx = curr.x + (next.x - curr.x) * 0.8
          const my = curr.y + (next.y - curr.y) * 5.5

          if (!c) {
            lastX = curr.x
            lastY = curr.y
          }

          ctx.current.beginPath()
          ctx.current.lineWidth = curr.lineWidth
          ctx.current.strokeStyle = curr.color

          ctx.current.moveTo(lastX, lastY)
          ctx.current.quadraticCurveTo(curr.x, curr.y, mx, my)

          ctx.current.stroke()

          // lastX = mx
          // lastY = my
          // lastX = mx + 250
          // lastY = my
          lastX = mx - (c / grid.current.cols) * 250
          lastY = my - (r / grid.current.rows) * 250
        }
      }

      ctx.current.restore()

      setCanvas(canvas.current)
    },
    [dimensions, setCanvas, grid, points]
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

      grid.current = new Grid({ cols: 72, rows: 4 })

      const freq = 0.002
      const amp = 90

      const colors = colormap({
        colormap: 'spring',
        nshades: amp,
      })

      for (let i = 0; i < grid.current.numCells; i++) {
        let x = (i % grid.current.cols) * grid.current.cellWidth
        let y = Math.floor(i / grid.current.cols) * grid.current.cellHeight

        const n = random.noise2D(x, y, freq, amp)

        x += n
        y += n

        const color = colors[Math.floor(math.mapRange(n, -amp, amp, 0, amp))]
        const lineWidth = math.mapRange(n, -amp, amp, 0, 5)

        points.push(new Point({ x, y, lineWidth, color }))
      }

      render()
    }
  }, [dimensions, render, Point, points, Grid])

  return <S.Canvas ref={canvas} />
}

export default CurlyGrid
