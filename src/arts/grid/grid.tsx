import React, { useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import random from 'canvas-sketch-util/random'

const Grid = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = React.useRef<CanvasRenderingContext2D | null>(null)
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })

  const renderGrid = useCallback(() => {
    ctx.current!.fillRect(0, 0, dimensions.w, dimensions.h)
    ctx.current!.fillStyle = 'yellow'

    const cols = 10
    const rows = 10
    const numCells = cols * rows
    const gridW = dimensions.w * 0.8
    const gridH = dimensions.h * 0.8
    const cellW = gridW / cols
    const cellH = gridH / rows
    const marginX = (dimensions.w - gridW) * 0.5
    const marginY = (dimensions.h - gridH) * 0.5

    for (let i = 0; i < numCells; i++) {
      const col = i % cols
      const row = Math.floor(i / cols)

      const x = col * cellW
      const y = row * cellH
      const w = cellW * 0.8
      const h = cellH * 0.8

      const n = random.noise2D(x, y, 0.0002)
      const angle = n * Math.PI

      ctx.current!.save()
      ctx.current!.translate(x, y)
      ctx.current!.translate(marginX, marginY)
      ctx.current!.translate(cellW * 0.5, cellH * 0.5)
      ctx.current!.rotate(angle)

      ctx.current!.lineWidth = 4

      ctx.current!.beginPath()
      ctx.current!.moveTo(w * -0.5, 0)
      ctx.current!.lineTo(w * 0.5, 0)
      ctx.current!.strokeStyle = 'red'
      ctx.current!.stroke()

      ctx.current!.restore()
    }
  }, [dimensions])

  useEffect(() => {
    const w = window.innerWidth > 1480 ? 1480 : window.innerWidth
    const h =
      window.innerWidth > 1024
        ? window.innerHeight - 80
        : window.innerHeight - 160

    setDimensions({
      w,
      h,
    })
  }, [])

  useEffect(() => {
    if (canvas.current && dimensions.h > 0) {
      canvas.current.height = dimensions.h
      canvas.current.width = dimensions.w
      ctx.current = canvas.current.getContext('2d')

      renderGrid()
    }
  }, [dimensions, renderGrid])

  return <S.Canvas ref={canvas} />
}

export default Grid
