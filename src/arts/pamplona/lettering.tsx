import React, { useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { createRandom } from 'utils/random'
import { useCanvas } from 'contexts'

const Pamplona = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const { pick } = createRandom()

  const getGlyph = useCallback(
    (v: number) => {
      if (v < 50) return ''
      if (v < 100) return '.'
      if (v < 150) return '-'
      if (v < 200) return '+'

      const glyphs = '_= /'.split('')

      return pick(glyphs)
    },
    [pick]
  )

  const text = 'Pamplona'

  const renderGrid = useCallback(
    (frameCounter?: number) => {
      if (ctx.current === null) return

      const typeCanvas = document.createElement('canvas')
      const typeContext = typeCanvas.getContext('2d')

      const cell = dimensions.w > 768 ? 10 : 4

      const cols = Math.floor(dimensions.w / cell)
      const rows = Math.floor(dimensions.h / cell)
      const numCells = cols * rows

      typeCanvas.width = cols
      typeCanvas.height = rows

      // typeContext.fillStyle = '#000'
      typeContext.fillRect(0, 0, cols, rows)

      const fontSize = dimensions.w > 768 ? cols * 0.2 : cols * 0.175

      const fontFamily = 'serif'

      typeContext.fillStyle = '#fff'
      typeContext.font = `${fontSize}px ${fontFamily}`
      typeContext.textBaseline = 'top'

      const metrics = typeContext.measureText(text)
      const mx = metrics.actualBoundingBoxLeft * -1
      const my = metrics.actualBoundingBoxAscent * -1
      const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight
      const mh =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent

      const tx = (cols - mw) * 0.5 - mx
      const ty = (rows - mh) * 0.5 - my

      typeContext.save()
      typeContext.translate(tx, ty)
      typeContext.beginPath()
      typeContext.rect(mx, my, mw, mh)
      typeContext.stroke()
      typeContext.fillText(text, 0, 0)
      typeContext.restore()

      const typeData = typeContext.getImageData(0, 0, cols, rows).data
      // ctx.current.fillStyle = '#000'
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      ctx.current.textBaseline = 'middle'
      ctx.current.textAlign = 'center'

      for (let i = 0; i < numCells; i++) {
        const col = i % cols
        const row = Math.floor(i / cols)
        const x = col * cell
        const y = row * cell

        const r = typeData[i * 4 + 0]
        // const g = typeData[i * 4 + 1]
        // const b = typeData[i * 4 + 2]
        // const a = typeData[i * 4 + 3]

        const glyph = getGlyph(r)

        const font = {
          a: dimensions.w > 768 ? 1.4 : 0.9,
          b: dimensions.w > 768 ? 2.5 : 1,
        }
        ctx.current.font = `${cell * font.a}px ${fontFamily}`
        if (Math.random() < 0.1)
          ctx.current.font = `${cell * font.b}px ${fontFamily}`

        ctx.current.fillStyle = '#fff'

        ctx.current.save()
        ctx.current.translate(x, y)
        ctx.current.translate(cell, cell)

        ctx.current.fillText(glyph, 0, 0)
        ctx.current.restore()
      }
      setCanvas(canvas.current)
    },
    [dimensions, text, setCanvas, getGlyph]
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

export default Pamplona
