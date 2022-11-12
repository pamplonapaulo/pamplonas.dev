import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { useCanvas } from 'contexts'
import risoColors from 'riso-colors'
import Color from 'canvas-sketch-util/color'
import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'

const WorkersPartyStar = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const [animateOn, setAnimateOn] = useState(false)

  let anime = useRef<number>(0)
  const num = 40
  const degrees = -30

  const rects = useMemo(() => [], [])
  const rectColors = useMemo(() => [], [])

  type Mask = {
    radius: number
    sides: number
    x: number
    y: number
  }

  // random.setSeed('red')

  let mask = useRef<Mask | null>(null)

  const drawSkewdRect = useCallback(
    (current: CanvasRenderingContext2D, w = 600, h = 200, deg = -45) => {
      const angle = math.degToRad(deg)

      const rx = Math.cos(angle) * w
      const ry = Math.sin(angle) * w

      current.save()
      current.translate(rx * -0.5, (ry + h) * -0.5)

      current.beginPath()
      current.moveTo(0, 0)
      current.lineTo(rx, ry)
      current.lineTo(rx, ry + h)
      current.lineTo(0, h)
      current.closePath()

      current.restore()
    },
    []
  )

  const drawPolygon = (
    current: CanvasRenderingContext2D,
    radius = 100,
    sides = 3
  ) => {
    const slice = (Math.PI * 2) / sides

    current.beginPath()
    current.moveTo(0, -radius)

    for (let i = 1; i < sides; i++) {
      const theta = i * slice - Math.PI * 0.5
      current.lineTo(Math.cos(theta) * radius, Math.sin(theta) * radius)
    }

    current.closePath()
  }

  const drawStar = (
    current: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number
  ) => {
    var rot = (Math.PI / 2) * 3
    var x = cx
    var y = cy
    var step = Math.PI / spikes

    // current.strokeStyle = '#000'
    current.beginPath()
    current.moveTo(cx, cy - outerRadius)
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius
      y = cy + Math.sin(rot) * outerRadius
      current.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius
      y = cy + Math.sin(rot) * innerRadius
      current.lineTo(x, y)
      rot += step
    }
    current.lineTo(cx, cy - outerRadius)
    current.closePath()
    // current.lineWidth = 5
    // current.strokeStyle = 'blue'
    // current.stroke()
    // current.fillStyle = 'skyblue'
    // current.fill()
  }

  const render = useCallback(
    (frameCounter?: number) => {
      if (ctx.current === null) return

      ctx.current.save()
      ctx.current.translate(mask.current.x, mask.current.y)

      // drawPolygon(ctx.current, mask.current.radius, mask.current.sides)
      drawStar(ctx.current, 0, -50, 5, 300, 150)

      ctx.current.clip()

      rects.forEach((rect) => {
        const { x, y, w, h, fill, stroke, blend } = rect

        ctx.current.save()
        ctx.current.translate(-mask.current.x, -mask.current.y)
        ctx.current.translate(x, y)
        ctx.current.strokeStyle = stroke
        ctx.current.fillStyle = fill
        ctx.current.lineWidth = 10

        ctx.current.globalCompositeOperation = blend

        drawSkewdRect(ctx.current, w, h, degrees)

        let shadowColor = Color.offsetHSL(fill, 0, 0, -20)
        shadowColor.rgba[3] = 0.5

        ctx.current.shadowColor = Color.style(shadowColor.rgba)
        ctx.current.shadowOffsetX = -10
        ctx.current.shadowOffsetY = 20

        ctx.current.fill()

        ctx.current.shadowColor = null
        ctx.current.stroke()

        ctx.current.globalCompositeOperation = 'source-over'

        ctx.current.lineWidth = 2
        ctx.current.strokeStyle = 'red'
        ctx.current.stroke()

        ctx.current.restore()
      })
      ctx.current.restore()

      ctx.current.save()
      ctx.current.translate(mask.current.x, mask.current.y)
      ctx.current.lineWidth = 20

      // drawPolygon(ctx.current, mask.current.radius, mask.current.sides)
      drawStar(ctx.current, 0, -50, 5, 300, 150)

      ctx.current.globalCompositeOperation = 'color-burn'
      //ctx.current.strokeStyle = rectColors[0]
      ctx.current.strokeStyle = 'rgba(0, 0, 0, 0.5)'

      ctx.current.stroke()

      ctx.current.restore()

      setCanvas(canvas.current)
    },
    [setCanvas, drawSkewdRect, degrees, rects, rectColors]
  )

  const defineRects = useCallback(() => {
    // rectColors.push(random.pick(risoColors).hex)
    // rectColors.push(random.pick(risoColors).hex)
    // rectColors.push(random.pick(risoColors).hex)
    // rectColors.push('#0e0000')
    // rectColors.push('#1c0000')

    // rectColors.push('#2a0000')
    // rectColors.push('#380000')
    // rectColors.push('#460000')
    rectColors.push('#530000')
    rectColors.push('#610000')
    rectColors.push('#6f0000')
    rectColors.push('#7d0000')
    rectColors.push('#8b0000')

    for (let i = 0; i < num; i++) {
      let x: number,
        y: number,
        w: number,
        h: number,
        fill: string,
        stroke: string,
        blend: string

      x = random.range(0, dimensions.w)
      y = random.range(0, dimensions.h)
      w = random.range(600, dimensions.w)
      h = random.range(40, 200)

      fill = random.pick(rectColors)
      stroke = random.pick(rectColors)

      blend = random.value() > 0.5 ? 'overlay' : 'source-over'

      rects.push({ x, y, w, h, fill, stroke, blend })
    }

    mask.current = {
      radius: dimensions.w * 0.4,
      sides: 3,
      x: dimensions.w * 0.5,
      y: dimensions.h * 0.58,
    }
    render()
  }, [dimensions, rects, render, rectColors])

  useEffect(() => {
    const h =
      window.innerHeight >= window.innerWidth
        ? window.innerWidth
        : window.innerHeight - 80
    const w = h

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

      // cover canvas background with black
      //ctx.current.fillStyle = '#000'

      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)
      defineRects()
    }
  }, [dimensions, render, defineRects])

  return <S.Canvas ref={canvas} />
}

export default WorkersPartyStar
