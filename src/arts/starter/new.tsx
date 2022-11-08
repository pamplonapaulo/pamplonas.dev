import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { createRandom } from 'utils/random'
import { colorRandom, mapRange } from 'utils/canvas'
import { useCanvas } from 'contexts'

// type CanvasLineCap = 'butt' | 'round' | 'square'

const New = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const [color, setColor] = useState('')

  let anime = useRef<number>(0)

  const render = useCallback(
    (frameCounter?: number) => {
      if (ctx.current === null) return

      // Clear canvas
      ctx.current.clearRect(0, 0, dimensions.w, dimensions.h)

      // Set color
      ctx.current.fillStyle = color
      ctx.current.strokeStyle = color

      // Set line width
      ctx.current.lineWidth = 10

      // Wall
      ctx.current.strokeRect(frameCounter + 75, 140, 150, 110)

      // Door
      ctx.current.fillRect(frameCounter + 130, 190, 40, 60)

      // Roof
      ctx.current.beginPath()
      ctx.current.moveTo(frameCounter + 50, 140)
      ctx.current.lineTo(frameCounter + 150, 60)
      ctx.current.lineTo(frameCounter + 250, 140)
      ctx.current.closePath()
      ctx.current.stroke()

      setCanvas(canvas.current)
    },
    [color, setCanvas, dimensions]
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
    cancelAnimationFrame(anime.current)
    anime.current = requestAnimationFrame(animate)
  }, [animate])

  useEffect(() => {
    if (canvas.current && dimensions.h > 0) {
      canvas.current.height = dimensions.h
      canvas.current.width = dimensions.w
      ctx.current = canvas.current.getContext('2d')
      render()
    }
  }, [dimensions, render])

  return <S.Canvas ref={canvas} />
}

export default New
