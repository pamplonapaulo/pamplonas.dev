import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { useCanvas } from 'contexts'
import risoColors from 'riso-colors'
import Color from 'canvas-sketch-util/color'
import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'

const Heart = () => {
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

  random.setSeed('carla & paulo')

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

  const drawHeart = useCallback(
    (
      current: CanvasRenderingContext2D,
      fromx: number,
      fromy: number,
      lw: number,
      hlen: number
    ) => {
      var x = fromx
      var y = fromy
      var width = lw
      var height = hlen

      current.save()
      current.beginPath()
      var topCurveHeight = height * 0.3
      current.moveTo(x, y + topCurveHeight)
      // top left curve
      current.bezierCurveTo(
        x,
        y,
        x - width / 2,
        y,
        x - width / 2,
        y + topCurveHeight
      )

      // bottom left curve
      current.bezierCurveTo(
        x - width / 2,
        y + (height + topCurveHeight) / 2,
        x,
        y + (height + topCurveHeight) / 2,
        x,
        y + height
      )

      // bottom right curve
      current.bezierCurveTo(
        x,
        y + (height + topCurveHeight) / 2,
        x + width / 2,
        y + (height + topCurveHeight) / 2,
        x + width / 2,
        y + topCurveHeight
      )

      // top right curve
      current.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight)

      current.closePath()
      current.restore()
    },
    []
  )
  const render = useCallback(
    (frameCounter?: number) => {
      if (ctx.current === null) return

      ctx.current.save()
      ctx.current.translate(mask.current.x, mask.current.y)

      // drawPolygon(ctx.current, mask.current.radius, mask.current.sides)
      // drawStar(ctx.current, 0, -50, 5, 300, 150)
      drawHeart(ctx.current, 0, -400, 700, 700)

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
        ctx.current.strokeStyle = random.pick(risoColors).hex
        ctx.current.stroke()

        ctx.current.restore()
      })
      ctx.current.restore()

      ctx.current.save()
      ctx.current.translate(mask.current.x, mask.current.y)
      ctx.current.lineWidth = 15

      // drawPolygon(ctx.current, mask.current.radius, mask.current.sides)
      //drawStar(ctx.current, 0, -50, 5, 300, 150)
      drawHeart(ctx.current, 0, -400, 700, 700)

      ctx.current.globalCompositeOperation = 'color-burn'
      //ctx.current.strokeStyle = rectColors[0]
      ctx.current.strokeStyle = 'rgba(0, 0, 0, 0.3)'

      ctx.current.stroke()

      ctx.current.restore()

      setCanvas(canvas.current)
    },
    [setCanvas, drawSkewdRect, degrees, rects, drawHeart]
  )

  const defineRects = useCallback(() => {
    rectColors.push(random.pick(risoColors).hex)
    rectColors.push(random.pick(risoColors).hex)
    rectColors.push(random.pick(risoColors).hex)

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

export default Heart
