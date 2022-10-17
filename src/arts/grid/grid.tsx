import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { createRandom } from 'utils/random'
import { colorRandom } from 'utils/canvas'

import { useCanvas } from 'contexts'

const Grid = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = React.useRef<CanvasRenderingContext2D | null>(null)
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const { noise2D } = createRandom()

  const colors = useMemo(
    () => ['#3494DF', '#38C1AD', '#60079F', '#F32C43', '#f8f32b', '#1b1b1b'],
    []
  )

  const renderGrid = useCallback(() => {
    ctx.current!.fillRect(0, 0, dimensions.w, dimensions.h)
    ctx.current!.fillStyle = 'yellow'

    const cols = 10 * 2
    const rows = 10 * 2
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

      const n = noise2D(x, y, 0.001)
      const angle = n * Math.PI * 0.2
      const scale = ((n + 1) / 2) * 30
      console.log(scale)
      console.log(scale)
      ctx.current!.save()
      ctx.current!.translate(x, y)
      ctx.current!.translate(marginX, marginY)
      ctx.current!.translate(cellW * 0.5, cellH * 0.5)
      ctx.current!.rotate(angle)

      ctx.current!.lineWidth = scale

      ctx.current!.beginPath()
      ctx.current!.moveTo(w * -0.5, 0)
      ctx.current!.lineTo(w * 0.5, 0)
      ctx.current!.strokeStyle = colorRandom(colors)
      ctx.current!.stroke()

      ctx.current!.restore()
      setCanvas(canvas.current)
    }
  }, [dimensions, colors, noise2D])

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
