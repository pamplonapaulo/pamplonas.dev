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
    side: number
  ) => {
    ctx!.beginPath()
    ctx!.fillStyle = colorLottery(colors)
    ctx!.lineWidth = 1
    ctx!.fillRect(x, y, side, side)
  }

  const colorLottery = (colors: string[]) => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const item = colors[randomIndex]
    return item
  }

  useEffect(() => {
    const width = window.innerWidth > 1480 ? 1480 : window.innerWidth
    const height = window.innerHeight - 83

    const area = width / 13
    const side = area * 0.9
    const margin = area * 0.1

    const quantityX = 13
    console.log('resta:', width % (2 * margin + side))
    console.log('resta:', height % (2 * margin + side))
    let quantityY = height / (2 * margin + side)

    if (canvasRef.current) {
      canvasRef.current.height = height
      canvasRef.current.width = width

      canvasCtxRef.current = canvasRef.current.getContext('2d')
      let ctx = canvasCtxRef.current

      for (let y = 0; y <= quantityY; y++) {
        for (let x = 0; x <= quantityX; x++) {
          drawSquare(ctx, (side + margin) * x, (side + margin) * y, side)
        }
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
