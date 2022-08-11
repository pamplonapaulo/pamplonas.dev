import React, { useEffect, useRef } from 'react'
import * as S from './styles'

const Canvas = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null)
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)

  const blue = '#3494DF'
  const green = '#38C1AD'
  const purple = '#60079F'
  const red = '#F32C43'
  const yellow = '#f8f32b'
  const black = '#000000'
  const white = '#fff'

  const colors = [blue, green, purple, red, yellow]

  const drawSquare = (
    ctx: CanvasRenderingContext2D | null,
    x: number,
    y: number,
    size: number
  ) => {
    ctx!.beginPath()
    ctx!.fillStyle = colorLottery(colors)
    ctx!.lineWidth = 1
    ctx!.fillRect(x, y, size, size)
  }

  const colorLottery = (colors: string[]) => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const item = colors[randomIndex]
    return item
  }

  useEffect(() => {
    const width = window.innerWidth > 1480 ? 1480 : window.innerWidth
    const height = window.innerHeight - 83

    let size = width / 15 - 10
    let area = 10

    if (canvasRef.current) {
      canvasRef.current.height = height
      canvasRef.current.width = width

      canvasCtxRef.current = canvasRef.current.getContext('2d')
      let ctx = canvasCtxRef.current

      for (let i = 1; i <= 13; i++) {
        drawSquare(ctx, (size + area) * i, 10, size)
      }

      for (let i = 1; i <= 13; i++) {
        drawSquare(ctx, (size + area) * i, size + area + area, size)
      }

      for (let i = 1; i <= 13; i++) {
        drawSquare(ctx, (size + area) * i, (size + area + area - 5) * 2, size)
      }

      for (let i = 1; i <= 13; i++) {
        drawSquare(ctx, (size + area) * i, (size + area + area - 7.5) * 3, size)
      }

      for (let i = 1; i <= 13; i++) {
        drawSquare(ctx, (size + area) * i, (size + area + area - 8.5) * 4, size)
      }

      for (let i = 1; i <= 13; i++) {
        drawSquare(ctx, (size + area) * i, (size + area + area - 9) * 5, size)
      }
      /*
      ctx!.beginPath()
      ctx!.lineWidth = 1
      ctx!.strokeStyle = blue
      ctx!.rect(10, 120, 100, 100)
      ctx!.stroke()

      ctx!.beginPath()
      ctx!.lineWidth = 1
      ctx!.strokeStyle = purple
      ctx!.rect(120, 120, 100, 100)
      ctx!.stroke()

      ctx!.beginPath()
      ctx!.lineWidth = 1
      ctx!.strokeStyle = red
      ctx!.rect(230, 120, 100, 100)
      ctx!.stroke()

      ctx!.beginPath()
      ctx!.lineWidth = 1
      ctx!.strokeStyle = yellow
      ctx!.rect(340, 120, 100, 100)
      ctx!.stroke()

      ctx!.beginPath()
      ctx!.lineWidth = 1
      ctx!.strokeStyle = green
      ctx!.rect(450, 120, 100, 100)
      ctx!.stroke()
      */

      // ctx!.beginPath()
      // ctx!.arc(300, 300, 100, 0, Math.PI * 2)
      // ctx!.stroke()
    }
  }, [])

  return <S.Canvas ref={canvasRef} />
}

export default Canvas
