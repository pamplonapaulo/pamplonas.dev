import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { createRandom } from 'utils/random'
import { randomRange, colorRandom, degToRad } from 'utils/canvas'
import { useCanvas } from 'contexts'
import risoColors from 'riso-colors'
import Color from 'canvas-sketch-util/color'

const ClippingMask = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const [animateOn, setAnimateOn] = useState(false)
  const { pick, value } = createRandom()

  let anime = useRef<number>(0)
  const num = 40
  const degrees = -30

  const rects = useMemo(() => [], [])

  const drawSkewdRect = useCallback(
    (current: CanvasRenderingContext2D, w = 600, h = 200, deg = -45) => {
      const angle = degToRad(deg)
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

  const render = useCallback(
    (frameCounter?: number) => {
      if (ctx.current === null) return

      rects.forEach((rect) => {
        const { x, y, w, h, fill, stroke, blend } = rect

        ctx.current.save()
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
        ctx.current.strokeStyle = 'black'
        ctx.current.stroke()

        ctx.current.restore()
      })

      setCanvas(canvas.current)
    },
    [setCanvas, drawSkewdRect, degrees, rects]
  )

  const defineRects = useCallback(() => {
    const rectColors = [pick(risoColors).hex, pick(risoColors).hex]

    for (let i = 0; i < num; i++) {
      let x: number,
        y: number,
        w: number,
        h: number,
        fill: string,
        stroke: string,
        blend: string

      x = randomRange(0, dimensions.w)
      y = randomRange(0, dimensions.h)
      w = randomRange(600, dimensions.w)
      h = randomRange(40, 200)
      // w = randomRange(200, 600)
      // h = randomRange(40, 200)

      fill = colorRandom(rectColors)
      stroke = colorRandom(rectColors)

      blend = value() > 0.5 ? 'overlay' : 'source-over'

      rects.push({ x, y, w, h, fill, stroke, blend })
    }
    render()
  }, [dimensions, rects, render, pick, value])

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
      ctx.current.fillStyle = pick(risoColors).hex
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)
      defineRects()
    }
  }, [dimensions, render, defineRects, pick])

  return <S.Canvas ref={canvas} />
}

export default ClippingMask
