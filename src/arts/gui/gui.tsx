import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { createRandom } from 'utils/random'
import { colorRandom, mapRange } from 'utils/canvas'
import { useCanvas } from 'contexts'
import { useTweaks } from 'use-tweaks'

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

const Gui = () => {
  const config = useTweaks<controller>('Controller', {
    cols: { value: 20, min: 1, max: 40, step: 1 },
    rows: { value: 20, min: 1, max: 40, step: 1 },
    scaleMin: { value: 0.01, min: 0.01, max: 100 },
    scaleMax: { value: 30, min: 0.01, max: 100 },
    freq: { value: 0.001, min: -0.01, max: 0.01 },
    amp: { value: 0.2, min: 0, max: 1 },
    frame: { value: 0, min: 0, max: 999 },
    animate: { value: true },
    lineCap: {
      value: 'butt',
      options: {
        butt: 'butt',
        round: 'round',
        square: 'square',
      },
    },
  })

  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = React.useRef<CanvasRenderingContext2D | null>(null)
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()
  const { noise2D, noise3D } = createRandom()
  const [color, setColor] = useState('')

  let anime = useRef<number>(0)

  const renderGrid = useCallback(
    (frameCounter: number = 1) => {
      if (ctx.current === null) return

      ctx.current!.fillRect(0, 0, dimensions.w, dimensions.h)
      ctx.current!.fillStyle = '#000'

      const cols = config.rows
      const rows = config.cols

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

        const f = config.animate ? frameCounter : config.frame

        //const n = noise2D(x + frameCounter * 3, y, config.freq)
        const n = noise3D(x, y, f * 3, config.freq, config.amp)

        const angle = n * Math.PI * config.amp
        // const scale = ((n + 1) / 2) * 30
        const scale = mapRange(n, -1, 1, config.scaleMin, config.scaleMax)

        ctx.current!.save()
        ctx.current!.translate(x, y)
        ctx.current!.translate(marginX, marginY)
        ctx.current!.translate(cellW * 0.5, cellH * 0.5)
        ctx.current!.rotate(angle)

        ctx.current!.lineWidth = scale
        ctx.current!.lineCap = config.lineCap

        ctx.current!.beginPath()
        ctx.current!.moveTo(w * -0.5, 0)
        ctx.current!.lineTo(w * 0.5, 0)
        ctx.current!.strokeStyle = color

        ctx.current!.stroke()
        ctx.current!.restore()
        setCanvas(canvas.current)
      }
    },
    [dimensions, noise3D, setCanvas, color, config]
  )

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

    const gridColor = colorRandom([
      '#3494DF',
      '#38C1AD',
      '#60079F',
      '#F32C43',
      '#f8f32b',
    ])
    setColor(gridColor)
  }, [])

  const animate = useCallback(() => {
    renderGrid(anime.current)
    anime.current = requestAnimationFrame(animate)
  }, [renderGrid])

  useEffect(() => {
    cancelAnimationFrame(anime.current)
    anime.current = requestAnimationFrame(animate)
  }, [config, animate])

  useEffect(() => {
    if (canvas.current && dimensions.h > 0) {
      canvas.current.height = dimensions.h
      canvas.current.width = dimensions.w
      ctx.current = canvas.current.getContext('2d')
    }
  }, [dimensions, renderGrid])

  return <S.Canvas ref={canvas} />
}

export default Gui
