import React, { useEffect, useCallback, useRef, useMemo } from 'react'
import * as S from './styles'

import { useCanvas } from 'contexts'

const MicroTiles = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null)
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)
  const { setCanvas } = useCanvas()

  const colors = useMemo(
    () => ['#3494DF', '#38C1AD', '#60079F', '#F32C43', '#f8f32b'],
    []
  )

  const header = 83

  const drawSquare = useCallback(
    (
      ctx: CanvasRenderingContext2D | null,
      x: number,
      y: number,
      side: number
    ) => {
      ctx!.beginPath()
      ctx!.fillStyle = colorRandom(colors)
      ctx!.lineWidth = 1
      ctx!.fillRect(x, y, side, side)
    },
    [colors]
  )

  const colorRandom = (colors: string[]) => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const item = colors[randomIndex]
    return item
  }

  useEffect(() => {
    const width = window.innerWidth > 1480 ? 1480 : window.innerWidth
    const calcHeight = window.innerHeight - header * 3

    const quantityX =
      window.innerWidth >= 1480
        ? 100
        : window.innerWidth >= 1200
        ? 90
        : window.innerWidth >= 1024
        ? 80
        : window.innerWidth >= 768
        ? 70
        : window.innerWidth >= 480
        ? 60
        : 50

    const size =
      window.innerWidth >= 1480
        ? 0.3
        : window.innerWidth >= 1200
        ? 0.35
        : window.innerWidth >= 1024
        ? 0.4
        : window.innerWidth >= 768
        ? 0.45
        : window.innerWidth >= 480
        ? 0.5
        : 0.7

    const padding = 1 - size

    const calcArea = width / quantityX
    const calcMargin = calcArea * padding

    const area = (width - calcMargin) / quantityX
    const side = area * size
    const margin = area * padding

    const quantityY = Math.floor(calcHeight / (margin + side))
    const height = quantityY * (margin + side)

    if (canvasRef.current) {
      canvasRef.current.height = height
      canvasRef.current.width = width - margin

      canvasCtxRef.current = canvasRef.current.getContext('2d')
      let ctx = canvasCtxRef.current

      for (let y = 0; y <= quantityY; y++) {
        for (let x = 0; x <= quantityX; x++) {
          const posX = x === 0 ? margin / 2 : (side + margin) * x + margin / 2
          const posY = y === 0 ? margin / 2 : (side + margin) * y + margin / 2

          if (Math.random() > 0.5) drawSquare(ctx, posX, posY, side)
        }
      }
      setCanvas(canvasRef.current)
    }
  }, [drawSquare, setCanvas])

  return <S.Canvas ref={canvasRef} />
}

export default MicroTiles
