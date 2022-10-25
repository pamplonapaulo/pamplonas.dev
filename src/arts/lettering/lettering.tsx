import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { createRandom } from 'utils/random'
import { colorRandom, mapRange } from 'utils/canvas'
import { useCanvas } from 'contexts'
// import { useTweaks } from 'use-tweaks'

type CanvasLineCap = 'butt' | 'round' | 'square'

type controller = {
  cols: {
    value: number
    min: number
    max: number
    step: number
  }
  rows: {
    value: number
    min: number
    max: number
    step: number
  }
  scaleMin: {
    value: number
    min: number
    max: number
  }
  scaleMax: {
    value: number
    min: number
    max: number
  }
  freq: {
    value: number
    min: number
    max: number
  }
  amp: {
    value: number
    min: number
    max: number
  }
  frame: {
    value: number
    min: number
    max: number
  }
  animate: {
    value: boolean
  }
  lineCap: {
    value: CanvasLineCap
    options: {
      butt: CanvasLineCap
      round: CanvasLineCap
      square: CanvasLineCap
    }
  }
}

const Lettering = () => {
  // const config = useTweaks<controller>('Controller', {
  //   cols: { value: 20, min: 1, max: 40, step: 1 },
  //   rows: { value: 20, min: 1, max: 40, step: 1 },
  //   scaleMin: { value: 0.01, min: 0.01, max: 100 },
  //   scaleMax: { value: 30, min: 0.01, max: 100 },
  //   freq: { value: 0.001, min: -0.01, max: 0.01 },
  //   amp: { value: 0.2, min: 0, max: 1 },
  //   frame: { value: 0, min: 0, max: 999 },
  //   animate: { value: false },
  //   lineCap: {
  //     value: 'butt',
  //     options: {
  //       butt: 'butt',
  //       round: 'round',
  //       square: 'square',
  //     },
  //   },
  // })

  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const { pick } = createRandom()
  const [color, setColor] = useState('')

  // let anime = useRef<number>(0)

  const getGlyph = useCallback(
    (v: number) => {
      console.log(v)
      if (v < 50) return ''
      if (v < 100) return '.'
      if (v < 150) return '-'
      if (v < 200) return 'dev'

      const glyphs = '_= /'.split('')

      return pick(glyphs)
    },
    [pick]
  )

  const text = 'A'

  const renderGrid = useCallback(
    (frameCounter?: number) => {
      if (ctx.current === null) return

      const typeCanvas = document.createElement('canvas')
      const typeContext = typeCanvas.getContext('2d')

      const cell = 20
      const cols = Math.floor(dimensions.w / cell)
      const rows = Math.floor(dimensions.h / cell)
      const numCells = cols * rows

      typeCanvas.width = cols
      typeCanvas.height = rows

      typeContext.fillStyle = '#000'
      typeContext.fillRect(0, 0, cols, rows)

      const fontSize = cols * 1.2
      const fontFamily = 'serif'

      typeContext.fillStyle = color
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

      ctx.current.fillStyle = '#000'
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      ctx.current.textBaseline = 'middle'
      ctx.current.textAlign = 'center'

      for (let i = 0; i < numCells; i++) {
        const col = i % cols
        const row = Math.floor(i / cols)

        const x = col * cell
        const y = row * cell

        const r = typeData[i * 4 + 0]
        const g = typeData[i * 4 + 1]
        const b = typeData[i * 4 + 2]
        const a = typeData[i * 4 + 3]

        const glyph = getGlyph(r)

        ctx.current.font = `${cell * 2}px ${fontFamily}`
        if (Math.random() < 0.1)
          ctx.current.font = `${cell * 6}px ${fontFamily}`

        //ctx.current.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.current.fillStyle = color

        ctx.current.save()
        ctx.current.translate(x, y)
        ctx.current.translate(cell, cell)

        ctx.current.fillText(glyph, 0, 0)
        ctx.current.restore()
      }
      setCanvas(canvas.current)
    },
    [dimensions, color, text, setCanvas, getGlyph]
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

    const gridColor = colorRandom([
      '#3494DF',
      '#38C1AD',
      '#60079F',
      '#F32C43',
      '#f8f32b',
    ])
    setColor(gridColor)
  }, [])

  // const animate = useCallback(() => {
  //   renderGrid(anime.current)
  //   anime.current = requestAnimationFrame(animate)
  // }, [renderGrid])

  // useEffect(() => {
  //   cancelAnimationFrame(anime.current)
  //   anime.current = requestAnimationFrame(animate)
  // }, [config, animate])

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

export default Lettering
