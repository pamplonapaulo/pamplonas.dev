import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { createRandom } from 'utils/random'
import { randomRange, colorRandom, degToRad, mapRange } from 'utils/canvas'
import { useCanvas } from 'contexts'

// type CanvasLineCap = 'butt' | 'round' | 'square'

const ClippingMask = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const [color, setColor] = useState('')
  const [animateOn, setAnimateOn] = useState(false)

  let anime = useRef<number>(0)

  const drawSkewdRect = useCallback(
    (
      current: CanvasRenderingContext2D,
      color: string,
      w = 600,
      h = 200,
      deg = -45
    ) => {
      const angle = degToRad(deg)
      const rx = Math.cos(angle) * w
      const ry = Math.sin(angle) * w

      current.strokeStyle = color

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

      const num = 20
      const degrees = -30

      let x: number, y: number, w: number, h: number, rx: number, ry: number

      for (let i = 0; i < num; i++) {
        x = randomRange(0, dimensions.w)
        y = randomRange(0, dimensions.h)
        w = randomRange(200, 600)
        h = randomRange(40, 200)

        ctx.current.save()
        ctx.current.translate(x, y)

        drawSkewdRect(ctx.current, color, w, h, degrees)
        ctx.current.stroke()
        ctx.current.restore()
      }

      setCanvas(canvas.current)
    },
    [color, setCanvas, dimensions, drawSkewdRect]
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

    const color = colorRandom([
      '#3494DF',
      '#38C1AD',
      '#60079F',
      '#F32C43',
      '#f8f32b',
    ])
    setColor(color)
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

      // cover background with black
      ctx.current.fillStyle = '#000'
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      render()
    }
  }, [dimensions, render])

  return <S.Canvas ref={canvas} />
}

export default ClippingMask
