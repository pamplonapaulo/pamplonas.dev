import React, { useEffect, useRef, useMemo } from 'react'
import * as S from './styles'
import { degToRad, randomRange } from 'utils/canvas'
import { useCanvas } from 'contexts'

const WeirdCircle = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = React.useRef<CanvasRenderingContext2D | null>(null)
  const { setCanvas } = useCanvas()

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
    let width, height

    if (window.innerWidth > window.innerHeight) {
      height = window.innerHeight - window.innerHeight * 0.15
      width = height
    } else {
      width = window.innerWidth
      height = width
    }

    if (canvas.current) {
      canvas.current.height = width
      canvas.current.width = height

      ctx.current = canvas.current.getContext('2d')

      ctx.current!.fillStyle = '#000'
      ctx.current!.fillRect(0, 0, width, height)

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

        const color = randomColor

        ctx.current!.fillStyle = color

        x = cx + radius * Math.sin(angle)
        y = cy + radius * Math.cos(angle)

        ctx.current!.save()
        ctx.current!.translate(x, y)
        ctx.current!.rotate(-angle)
        ctx.current!.scale(randomRange(0.1, 2), randomRange(0.2, 0.5))

        ctx.current!.beginPath()
        ctx.current!.rect(-4, randomRange(0, -h * 0.5), w, h)
        ctx.current!.fill()
        ctx.current!.restore()

        ctx.current!.save()
        ctx.current!.translate(cx, cy)
        ctx.current!.rotate(-angle)

        ctx.current!.lineWidth = randomRange(5, 20)

        ctx.current!.beginPath()
        ctx.current!.arc(
          0,
          0,
          radius * randomRange(0.7, 1.3),
          slice * randomRange(1, -8),
          slice * randomRange(0.6, 5)
        )
        ctx.current!.strokeStyle = color
        ctx.current!.stroke()

        ctx.current!.restore()
      }
      setCanvas(canvas.current)
    }
  }, [randomColor, setCanvas])

  return <S.Canvas ref={canvas} />
}

export default WeirdCircle
