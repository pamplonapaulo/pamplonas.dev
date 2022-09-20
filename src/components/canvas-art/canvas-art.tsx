import React, { useEffect, useCallback, useRef, useMemo } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { degToRad, randomRange } from 'utils/canvas'

const CanvasArt = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null)
  let buttonRef = useRef<HTMLAnchorElement | null>(null)

  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)

  const colors = useMemo(
    () => ['#3494DF', '#38C1AD', '#60079F', '#F32C43', '#f8f32b', '#1b1b1b'],
    []
  )

  const colorRandom = (colors: string[]) => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const item = colors[randomIndex]
    return item
  }

  const randomColor = colorRandom(colors)

  useEffect(() => {
    const width = 800
    const height = 800

    if (canvasRef.current) {
      canvasRef.current.height = width
      canvasRef.current.width = height

      canvasCtxRef.current = canvasRef.current.getContext('2d')
      let ctx = canvasCtxRef.current

      ctx!.fillStyle = '#000'
      ctx!.fillRect(0, 0, width, height)

      // ctx!.fillStyle = 'blue'

      const cx = width * 0.5
      const cy = height * 0.5
      const w = width * 0.01
      const h = height * 0.1

      let x, y

      //const num = Math.random() * 40
      const num = 40
      const radius = width * 0.3

      for (let i = 0; i < num; i++) {
        const slice = degToRad(360 / num)
        const angle = slice * i

        //const color = colorRandom(colors)
        //const color = '#1b1b1b'
        //const color = colors[5]
        const color = randomColor

        ctx!.fillStyle = color

        x = cx + radius * Math.sin(angle)
        y = cy + radius * Math.cos(angle)

        ctx!.save()
        ctx!.translate(x, y)
        ctx!.rotate(-angle)
        ctx!.scale(randomRange(0.1, 2), randomRange(0.2, 0.5))

        ctx!.beginPath()
        //ctx!.rect(w * 0.5, h * 0.5, w, h)
        ctx!.rect(-4, randomRange(0, -h * 0.5), w, h)
        ctx!.fill()
        ctx!.restore()

        ctx!.save()
        ctx!.translate(cx, cy)
        ctx!.rotate(-angle)

        ctx!.lineWidth = randomRange(5, 20)

        ctx!.beginPath()
        ctx!.arc(
          0,
          0,
          radius * randomRange(0.7, 1.3),
          slice * randomRange(1, -8),
          slice * randomRange(0.6, 5)
        )
        ctx!.strokeStyle = color
        ctx!.stroke()

        ctx!.restore()
      }
    }
  }, [randomColor])

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

export default CanvasArt
