import React, { useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'

const Grid = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = React.useRef<CanvasRenderingContext2D | null>(null)
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })

  // const renderGrid = useCallback(() => {
  //   ctx.current!.fillRect(0, 0, dimensions.w, dimensions.h)
  //   ctx.current!.fillStyle = 'yellow'

  // const cols = 4
  // const rows = 3
  // const numCells = cols * rows
  // const gridW = dimensions.w * 0.8
  // const gridH = dimensions.h * 0.8
  // const cellW = gridW / cols
  // const cellH = gridH / rows
  // const marginX = (dimensions.w - gridW) * 0.5
  // const marginY = (dimensions.h - gridH) * 0.5

  // for (let i = 0; i < numCells; i++) {
  //   const col = i % cols
  //   const row = Math.floor(i / cols)

  //   const x = col * cellW
  //   const y = row * cellH
  //   const w = cellW * 0.8
  //   const h = cellH * 0.8

  //   ctx.current!.save()
  //   //ctx.current!.translate(x, y)

  //   ctx.current!.beginPath()
  //   ctx.current!.moveTo(w * -0.5, 0)
  //   ctx.current!.lineTo(w * -0.5, 0)
  //   ctx.current!.strokeStyle = 'red'
  //   ctx.current!.stroke()

  //   ctx.current!.restore()
  // }
  // }, [dimensions])

  // useEffect(() => {
  //   const w = window.innerWidth > 1480 ? 1480 : window.innerWidth
  //   const h =
  //     window.innerWidth > 1024
  //       ? window.innerHeight - 80
  //       : window.innerHeight - 160

  //   setDimensions({
  //     w,
  //     h,
  //   })
  // }, [])

  // useEffect(() => {
  //   if (canvas.current && dimensions.h > 0) {
  //     canvas.current.height = dimensions.h
  //     canvas.current.width = dimensions.w
  //     ctx.current = canvas.current.getContext('2d')

  //     renderGrid()
  //   }
  // }, [dimensions, renderGrid])

  useEffect(() => {
    const w = window.innerWidth > 1480 ? 1480 : window.innerWidth
    const h = window.innerHeight - 80

    if (canvas.current && h > 0) {
      canvas.current.height = h
      canvas.current.width = w
      ctx.current = canvas.current.getContext('2d')
      let context = ctx.current
      context!.fillStyle = 'rgba(255, 255, 255, 0.1)'
      context!.fillRect(0, 0, w, h)

      // context!.save()
      // context!.beginPath()
      // context!.moveTo(w * -0.5, 0)
      // context!.lineTo(w * 0.5, 0)
      // context!.strokeStyle = 'red'
      // context!.stroke()

      const cols = 4
      const rows = 3
      const numCells = cols * rows
      const gridW = w * 0.8
      const gridH = h * 0.8
      const cellW = gridW / cols
      const cellH = gridH / rows
      const marginX = (w - gridW) * 0.5
      const marginY = (h - gridH) * 0.5

      for (let i = 0; i < numCells; i++) {
        const col = i % cols
        const row = Math.floor(i / cols)

        const x = col * cellW
        const y = row * cellH
        const ww = cellW * 0.8
        const hh = cellH * 0.8

        context!.save()
        context!.translate(x, y)

        context!.beginPath()
        context!.moveTo(ww * -0.5, 0)
        context!.lineTo(ww * 0.5, 0)
        context!.strokeStyle = 'white'
        context!.stroke()

        context!.restore()
      }
    }
  }, [])

  return <S.Canvas ref={canvas} />
}

export default Grid
