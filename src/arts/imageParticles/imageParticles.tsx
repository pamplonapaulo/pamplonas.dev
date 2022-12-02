import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { useCanvas } from 'contexts'
import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'
// import colormap from 'colormap'
import eases from 'eases'
import interpolate from 'color-interpolate'

const ImageParticles = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  let canvasImageA = useRef<HTMLCanvasElement | null>(null)
  let canvasImageB = useRef<HTMLCanvasElement | null>(null)

  let imgDataA = useRef<Uint8ClampedArray>()
  let imgDataB = useRef<Uint8ClampedArray>()

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()

  const [animateOn] = useState(true)
  let frame = useRef<number>(0)

  let imgData = useRef<Uint8ClampedArray>()

  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)

  // const colors = colormap({
  //   colormap: 'viridis',
  //   nshades: 20,
  // })

  type particle = {
    x: number
    y: number
    ax: number
    ay: number
    vx: number
    vy: number
    ix: number
    iy: number
    radius: number
    scale: number
    color: string
    minDist: number
    pushFactor: number
    dampFactor: number
    update: () => void
    draw: (ctx: CanvasRenderingContext2D) => void
  }

  const Particle = useMemo(
    () =>
      class Particles {
        x: number
        y: number
        ax: number
        ay: number
        vx: number
        vy: number
        ix: number
        iy: number
        radius: number
        scale: number
        color: string
        minDist: number
        pushFactor: number
        pullFactor: number
        dampFactor: number
        colMap: (index: number) => string

        constructor({ x, y, radius = 10, colMap }) {
          // position
          this.x = x
          this.y = y

          // acceleration
          this.ax = 0
          this.ay = 0

          // velocity
          this.vx = 0
          this.vy = 0

          // initial position
          this.ix = x
          this.iy = y

          this.radius = radius
          this.scale = 1
          this.colMap = colMap
          this.color = colMap(0)

          this.minDist = random.range(100, 200)
          this.pushFactor = random.range(0.01, 0.02)
          this.pullFactor = random.range(0.002, 0.006)
          this.dampFactor = random.range(0.9, 0.95)
        }

        update() {
          let dx: number,
            dy: number,
            dd: number,
            distDelta: number,
            idxColor: number

          // pull force
          dx = this.ix - this.x
          dy = this.iy - this.y
          dd = Math.sqrt(dx * dx + dy * dy)

          this.ax = dx * this.pullFactor
          this.ay = dy * this.pullFactor

          this.scale = math.mapRange(dd, 0, 200, 1, 5)

          // idxColor = Math.floor(
          //   math.mapRange(dd, 0, 200, 0, colors.length - 1, true)
          // )
          // this.color = colors[idxColor]
          this.color = this.colMap(math.mapRange(dd, 0, 200, 0, 1, true))

          // push force
          dx = this.x - cursor.current.x
          dy = this.y - cursor.current.y
          dd = Math.sqrt(dx * dx + dy * dy)

          distDelta = this.minDist - dd

          if (dd < this.minDist) {
            this.ax += (dx / dd) * distDelta * this.pushFactor
            this.ay += (dy / dd) * distDelta * this.pushFactor
          }

          this.vx += this.ax
          this.vy += this.ay

          this.vx *= this.dampFactor
          this.vy *= this.dampFactor

          this.x += this.vx
          this.y += this.vy
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.save()
          ctx.translate(this.x, this.y)
          ctx.fillStyle = this.color

          ctx.beginPath()
          ctx.arc(0, 0, this.radius * this.scale, 0, Math.PI * 2)
          ctx.fill()

          ctx.restore()
        }
      },
    []
  )

  const particles = useMemo<particle[]>(() => [], [])

  let cursor = useRef<{ x: number; y: number }>({ x: 9999, y: 9999 })

  const loadImage = async (url: string) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = () => reject()
      img.crossOrigin = 'anonymous'
      img.src = url
    })
  }

  const getImage = useCallback(async () => {
    const imageA = await loadImage('../assets/cup64x64.png')
    const imageB = await loadImage('../assets/flower64x64.png')
    //const imageB = await loadImage('../assets/ronaldo64x64.png')
    // const image = await loadImage('../assets/avatar64x64.png')

    canvasImageA.current = document.createElement('canvas')
    const contextA = canvasImageA.current.getContext('2d')

    canvasImageB.current = document.createElement('canvas')
    const contextB = canvasImageB.current.getContext('2d')

    canvasImageA.current.width = imageA.width
    canvasImageA.current.height = imageA.height

    canvasImageB.current.width = imageB.width
    canvasImageB.current.height = imageB.height

    contextA.drawImage(imageA, 0, 0)
    contextB.drawImage(imageB, 0, 0)

    imgDataA.current = contextA.getImageData(
      0,
      0,
      imageA.width,
      imageA.height
    ).data
    imgDataB.current = contextB.getImageData(
      0,
      0,
      imageB.width,
      imageB.height
    ).data

    setIsImageLoaded(true)
  }, [])

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      const x = (e.offsetX / canvas.current.offsetWidth) * canvas.current.width
      const y =
        (e.offsetY / canvas.current.offsetHeight) * canvas.current.height

      cursor.current.x = x
      cursor.current.y = y
    },
    [cursor]
  )

  const onMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)

    cursor.current.x = 9999
    cursor.current.y = 9999
  }, [onMouseMove])

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)

      onMouseMove(e)
    },
    [onMouseUp, onMouseMove]
  )

  const render = useCallback(
    async (frameCounter = 0) => {
      if (
        ctx.current === null ||
        canvasImageA.current === null ||
        canvasImageB.current === null
      )
        return

      ctx.current.fillStyle = '#000'
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      particles.sort((a, b) => a.scale - b.scale)

      particles.forEach((p) => {
        p.update()
        p.draw(ctx.current)
      })

      if (window.innerWidth >= 1024) {
        canvas.current?.addEventListener('mousedown', onMouseDown)
      }

      setCanvas(canvas.current)
    },
    [dimensions, setCanvas, particles, onMouseDown]
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
    getImage()
  }, [getImage])

  const animate = useCallback(() => {
    render(frame.current)
    frame.current = requestAnimationFrame(animate)
  }, [render])

  useEffect(() => {
    if (animateOn) {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(animate)
    }
  }, [animate, animateOn])

  useEffect(() => {
    if (canvas.current && dimensions.h > 0 && isImageLoaded) {
      canvas.current.height = dimensions.h
      canvas.current.width = dimensions.w
      ctx.current = canvas.current.getContext('2d')

      ctx.current.fillStyle = '#000'
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      let x: number,
        y: number,
        ix: number,
        iy: number,
        idx: number,
        r: number,
        g: number,
        b: number,
        colA: string,
        colB: string,
        colMap: number,
        radius: number
      let pos = []
      const numCircles = 30
      const gapCircle = 2
      const gapDot = 2
      let dotRadius = 12
      let cirRadius = 0
      const fitRadius = dotRadius

      for (let i = 0; i < numCircles; i++) {
        const circumference = Math.PI * 2 * cirRadius
        const numFit = i
          ? Math.floor(circumference / (fitRadius * 2 + gapDot))
          : 1
        const fitSlice = (Math.PI * 2) / numFit

        for (let j = 0; j < numFit; j++) {
          const theta = fitSlice * j

          x = Math.cos(theta) * cirRadius
          y = Math.sin(theta) * cirRadius

          x += dimensions.w * 0.5
          y += dimensions.h * 0.5

          ix = Math.floor((x / dimensions.w) * canvasImageA.current.width)
          iy = Math.floor((y / dimensions.h) * canvasImageA.current.height)
          idx = (iy * canvasImageA.current.width + ix) * 4

          r = imgDataA.current[idx + 0]
          g = imgDataA.current[idx + 1]
          b = imgDataA.current[idx + 2]
          colA = `rgb(${r}, ${g}, ${b})`

          //radius = dotRadius
          radius = math.mapRange(r, 0, 255, 1, 12)

          r = imgDataB.current[idx + 0]
          g = imgDataB.current[idx + 1]
          b = imgDataB.current[idx + 2]
          colB = `rgb(${r}, ${g}, ${b})`

          const colMap = interpolate([colA, colB])

          const p = new Particle({ x, y, radius, colMap })
          particles.push(p)
        }
        cirRadius += fitRadius * 2 + gapCircle
        dotRadius = (1 - eases.quadOut(i / numCircles)) * fitRadius
      }
      render()
    }
  }, [dimensions, render, Particle, particles, isImageLoaded])

  useEffect(() => {
    if (animateOn) {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(animate)
    }
  }, [animate, animateOn])

  return <S.Canvas ref={canvas} />
}

export default ImageParticles
