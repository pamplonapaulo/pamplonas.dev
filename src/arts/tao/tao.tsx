import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { useCanvas } from 'contexts'
import risoColors from 'riso-colors'
import Color from 'canvas-sketch-util/color'
import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'

const QuaraticCurve = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const [animateOn, setAnimateOn] = useState(false)

  let anime = useRef<number>(0)
  const num = 75

  const yinRects = useMemo(() => [], [])
  const yangRects = useMemo(() => [], [])

  const yinColors = useMemo(() => [], [])
  const yangColors = useMemo(() => [], [])

  type Mask = {
    x: number
    y: number
  }

  type Rect = {
    x: number
    y: number
    w: number
    h: number
    fill: string
    stroke: string
    blend: GlobalCompositeOperation
  }

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

  const fillWithRectangles = useCallback(
    (
      current: CanvasRenderingContext2D,
      strokeStyle: string,
      lineWidth: number,
      degrees: number,
      rects: Rect[],
      taoRadius: number,
      isSeed: boolean
    ) => {
      ctx.current.clip()
      rects.forEach((rect) => {
        const { x, y, w, h, fill, stroke, blend } = rect

        current.save()

        if (isSeed) {
          current.translate(mask.current.x, mask.current.y)
          current.translate(x - taoRadius, y - taoRadius)
        } else {
          current.translate(-mask.current.x, -mask.current.y)
          current.translate(x, y)
        }

        current.strokeStyle = stroke
        current.fillStyle = fill
        current.lineWidth = lineWidth
        current.globalCompositeOperation = blend

        drawSkewdRect(current, w, h, degrees)

        let shadowColor = Color.offsetHSL(fill, 0, 0, -20)
        shadowColor.rgba[3] = 0.5

        current.shadowColor = Color.style(shadowColor.rgba)
        current.shadowOffsetX = -10
        current.shadowOffsetY = 20

        current.fill()
        current.shadowColor = null
        current.stroke()
        current.globalCompositeOperation = 'source-over'
        current.lineWidth = 5
        current.strokeStyle = strokeStyle
        current.stroke()

        current.restore()
      })
      current.restore()
    },
    [drawSkewdRect]
  )

  const drawTao = useCallback(
    (current: CanvasRenderingContext2D, color: string, taoRadius: number) => {
      current.save()
      current.beginPath()
      current.strokeStyle = color
      current.lineWidth = taoRadius / 60

      // current.moveTo(0, -300)
      // current.bezierCurveTo(-400, -280, -400, 280, 0, 300)
      // current.bezierCurveTo(-198, 295, -198, 5, 0, 0)
      // current.bezierCurveTo(220, -25, 180, -290, 0, -300)

      current.moveTo(0, -taoRadius)
      current.bezierCurveTo(
        -(taoRadius + taoRadius / 3),
        -(taoRadius - taoRadius / 15),
        -(taoRadius + taoRadius / 3),
        taoRadius - taoRadius / 15,
        0,
        taoRadius
      )
      current.bezierCurveTo(
        -(taoRadius - taoRadius / 3 - taoRadius / 150),
        taoRadius - taoRadius / 60,
        -(taoRadius - taoRadius / 3 - taoRadius / 150),
        taoRadius / 60,
        0,
        0
      )
      current.bezierCurveTo(
        2 * (taoRadius / 3) + taoRadius / 15,
        -taoRadius / 12,
        taoRadius * 0.6,
        -(taoRadius - taoRadius / 30),
        0,
        -taoRadius
      )

      current.closePath()
      current.stroke()
      current.restore()
    },
    []
  )

  const drawSeed = useCallback(
    (
      current: CanvasRenderingContext2D,
      w: number,
      h: number,
      color: string,
      taoRadius: number
    ) => {
      current.restore()
      current.save()
      current.beginPath()
      current.lineWidth = 1

      current.arc(w / 2, h / 2, taoRadius / 6, 0 * Math.PI, 1 * Math.PI)
      current.arc(w / 2, h / 2, taoRadius / 6, 1 * Math.PI, 2 * Math.PI)

      current.fillStyle = color
      current.fill()
      //current.closePath()
      //current.stroke()
      //current.restore()
    },
    []
  )
  const render = useCallback(
    (frameCounter?: number) => {
      if (ctx.current === null) return

      const taoRadius =
        window.innerWidth >= 768 ? 300 : window.innerWidth >= 480 ? 225 : 150

      // draw yin:
      ctx.current.restore()
      ctx.current.save()
      ctx.current.translate(mask.current.x, mask.current.y)
      drawTao(ctx.current, '#62C2B1', taoRadius)
      fillWithRectangles(
        ctx.current,
        '#62C2B1',
        10,
        -20,
        yinRects,
        taoRadius,
        false
      )

      // draw yang:
      ctx.current.restore()
      ctx.current.save()
      ctx.current.translate(mask.current.x, mask.current.y)
      ctx.current.rotate((180 * Math.PI) / 180)
      drawTao(ctx.current, '#F9B411', taoRadius)
      fillWithRectangles(
        ctx.current,
        '#F9B411',
        10,
        20,
        yangRects,
        taoRadius,
        false
      )

      // draw yin seed
      ctx.current.restore()
      ctx.current.save()
      ctx.current.translate(mask.current.x, mask.current.y)

      drawSeed(
        ctx.current,
        dimensions.w,
        dimensions.h + taoRadius,
        '#62C2B1',
        taoRadius
      )
      fillWithRectangles(
        ctx.current,
        'green',
        10,
        -20,
        yinRects,
        taoRadius,
        true
      )

      // draw yang seed
      ctx.current.restore()
      ctx.current.save()
      ctx.current.translate(mask.current.x, mask.current.y)
      drawSeed(
        ctx.current,
        dimensions.w,
        dimensions.h - taoRadius,
        '#F9B411',
        taoRadius
      )
      fillWithRectangles(
        ctx.current,
        'yellow',
        10,
        20,
        yangRects,
        taoRadius,
        true
      )

      setCanvas(canvas.current)
    },
    [
      setCanvas,
      drawTao,
      drawSeed,
      dimensions,
      fillWithRectangles,
      yangRects,
      yinRects,
    ]
  )

  const defineColors = useCallback(
    (type: string) => {
      if (type === 'yin') {
        yinColors.push(risoColors[Math.floor(random.range(35, 40))].hex)
        yinColors.push(risoColors[Math.floor(random.range(35, 40))].hex)
        yinColors.push(risoColors[Math.floor(random.range(35, 40))].hex)
        yinColors.push(risoColors[Math.floor(random.range(35, 40))].hex)
        yinColors.push(risoColors[Math.floor(random.range(35, 40))].hex)
      }

      if (type === 'yang') {
        yangColors.push(risoColors[Math.floor(random.range(53, 58))].hex)
        yangColors.push(risoColors[Math.floor(random.range(53, 58))].hex)
        yangColors.push(risoColors[Math.floor(random.range(53, 58))].hex)
        yangColors.push(risoColors[Math.floor(random.range(53, 58))].hex)
        yangColors.push(risoColors[Math.floor(random.range(53, 58))].hex)
      }
    },
    [yinColors, yangColors]
  )

  const defineRects = useCallback(
    (type: string) => {
      defineColors(type)

      for (let i = 0; i < num; i++) {
        const rect: Rect = {
          x: random.range(0, dimensions.w),
          y: random.range(0, dimensions.h),
          w: random.range(type === 'yin' ? 15 : 60, type === 'yin' ? 100 : 300),
          h: random.range(type === 'yin' ? 80 : 30, type === 'yin' ? 250 : 100),
          fill: random.pick(type === 'yin' ? yinColors : yangColors),
          stroke: random.pick(type === 'yin' ? yinColors : yangColors),
          blend: random.value() > 0.5 ? 'overlay' : 'source-over',
        }

        if (type === 'yin') {
          yinRects.push(rect)
        } else {
          yangRects.push(rect)
        }
      }

      mask.current = {
        x: dimensions.w * 0.5,
        y: dimensions.h * 0.5,
      }
      render()
    },
    [
      dimensions,
      render,
      defineColors,
      yangColors,
      yangRects,
      yinColors,
      yinRects,
    ]
  )

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

      // cover canvas background with black:
      ctx.current.fillStyle = '#000'

      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)
      defineRects('yin')
      defineRects('yang')
    }
  }, [dimensions, render, defineRects])

  return <S.Canvas ref={canvas} />
}

export default QuaraticCurve
