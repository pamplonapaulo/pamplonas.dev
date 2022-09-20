import React, { useEffect, useCallback, useRef, useMemo } from 'react'
import * as S from './styles'
import Image from 'next/image'

const Sketch = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null)
  let buttonRef = useRef<HTMLAnchorElement | null>(null)

  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)

  const colors = useMemo(
    () => ['#3494DF', '#38C1AD', '#60079F', '#F32C43', '#f8f32b'],
    []
  )

  const header = 83

  let eixoX = 0
  let eixoY = 0

  const degToRad = (deg: number) => {
    return (deg / 180) * Math.PI
  }

  const drawStroke = useCallback(
    (
      ctx: CanvasRenderingContext2D | null,
      x: number,
      y: number,
      side: number,
      color: string
    ) => {
      const inner = side / 3.75

      ctx!.beginPath()
      ctx!.rect(x, y, side, side)
      ctx!.lineWidth = 1
      ctx!.stroke()

      ctx!.beginPath()
      ctx!.rect(x + inner / 2, y + inner / 2, side - inner, side - inner)
      ctx!.stroke()
      ctx!.strokeStyle = color
    },
    []
  )

  const drawSquare = useCallback(
    (
      ctx: CanvasRenderingContext2D | null,
      x: number,
      y: number,
      side: number,
      color: string,
      random: number
    ) => {
      ctx!.beginPath()
      ctx!.fillStyle = color
      ctx!.lineWidth = 1
      ctx!.fillRect(x, y, side, side)
    },
    []
  )

  const colorRandom = (colors: string[]) => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const item = colors[randomIndex]
    return item
  }

  // const timer = (seconds: number) => {
  //   let time = seconds * 1000
  //   return new Promise((res) => setTimeout(res, time))
  // }

  const buildDraw = useCallback(
    async (
      ctx: CanvasRenderingContext2D | null,
      quantityX: number,
      quantityY: number,
      margin: number,
      side: number
    ) => {
      for (let y = 0; y <= quantityY; y++) {
        for (let x = 0; x <= quantityX; x++) {
          const posX = x === 0 ? margin / 2 : (side + margin) * x + margin / 2
          const posY = y === 0 ? margin / 2 : (side + margin) * y + margin / 2

          const random = Math.random()

          const color = colorRandom(colors)

          //ctx!.save()
          ctx!.translate(0, 5)
          ctx!.rotate(degToRad(0.1))

          if (random > 0.7) {
            drawSquare(ctx, posX, posY, side, color, random)
          } else if (random < 0.2) {
            drawStroke(ctx, posX, posY, side, color)
          }

          //ctx!.restore()
          //await timer(0.01)
        }
      }
    },
    []
  )

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

    // const quantityX = 100

    // const size =
    //   window.innerWidth >= 1480
    //     ? 0.3
    //     : window.innerWidth >= 1200
    //     ? 0.35
    //     : window.innerWidth >= 1024
    //     ? 0.4
    //     : window.innerWidth >= 768
    //     ? 0.45
    //     : window.innerWidth >= 480
    //     ? 0.5
    //     : 0.7

    const size = 1.5

    //const padding = 1 - size
    const padding = 2 - size

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

      buildDraw(ctx, quantityX, quantityY, margin, side)
    }
  }, [drawSquare, drawStroke, colors, buildDraw])

  const downloadCanvas = () => {
    if (buttonRef && canvasRef.current) {
      const img = canvasRef.current.toDataURL('image/png')
      const downloadImg = img.replace(
        /^data:image\/[^;]/,
        'data:application/octet-stream'
      )
      buttonRef.current!.href = downloadImg
    }
  }

  return (
    <>
      <S.Canvas ref={canvasRef} />
      <S.Anchor
        ref={buttonRef}
        download="canvas.png"
        href="#"
        onClick={downloadCanvas}
      >
        Download Canvas
      </S.Anchor>
    </>
  )
}

export default Sketch
