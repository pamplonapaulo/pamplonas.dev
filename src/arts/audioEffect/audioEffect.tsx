import React, { useMemo, useEffect, useState, useCallback, useRef } from 'react'
import * as S from './styles'
import { useCanvas } from 'contexts'
import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'
// import colormap from 'colormap'
import eases from 'eases'
import interpolate from 'color-interpolate'

const AudioEffect = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null)
  let ctx = useRef<CanvasRenderingContext2D | null>(null)

  let audio = useRef<HTMLAudioElement | null>(null)
  let audioContext = useRef<AudioContext | null>(null)
  let analyserNode = useRef<AnalyserNode | null>(null)
  let audioData = useRef<Float32Array | null>(null)
  let decibels = useRef<{ min: number; max: number } | null>(null)

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  })
  const { setCanvas } = useCanvas()

  type Circles = {
    circles: number
    slices: number
    slice: number
    lineWidths: number[]
    radius: number
    bins: number[]
  }

  const [circles, setCircles] = useState<Circles>()

  const [animateOn, setAnimateOn] = useState(false)
  let frame = useRef<number>(0)

  const createAudio = useCallback(() => {
    audio.current = document.createElement('audio')
    audio.current.src = '../assets/audio-effect.mp3'

    audioContext.current = new AudioContext()

    const sourceNode = audioContext.current.createMediaElementSource(
      audio.current
    )

    sourceNode.connect(audioContext.current.destination)

    analyserNode.current = audioContext.current.createAnalyser()

    analyserNode.current.fftSize = 512
    analyserNode.current.smoothingTimeConstant = 0.9

    sourceNode.connect(analyserNode.current)

    decibels.current = {
      min: analyserNode.current.minDecibels,
      max: analyserNode.current.maxDecibels,
    }

    audioData.current = new Float32Array(analyserNode.current.frequencyBinCount)
  }, [audio])

  const onMouseUp = useCallback(() => {
    if (!audioContext.current) createAudio()

    if (audio.current.paused) {
      audio.current.play()
      setAnimateOn(true)
    } else {
      audio.current.pause()
      setAnimateOn(false)
    }
  }, [audio, createAudio, setAnimateOn])

  const getAverage = (data: Float32Array) => {
    let sum = 0

    for (let i = 0; i < data.length; i++) {
      sum += data[i]
    }

    return sum / data.length
  }

  const render = useCallback(
    async (frameCounter = 0) => {
      if (ctx.current === null) return

      ctx.current.fillStyle = '#000'

      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      if (window.innerWidth >= 1024) {
        canvas.current?.addEventListener('mouseup', onMouseUp)
      }

      if (!audioContext.current) return

      analyserNode.current.getFloatFrequencyData(audioData.current)

      let cRadius = circles.radius

      ctx.current.save()
      ctx.current.translate(dimensions.w * 0.5, dimensions.h * 0.5)

      for (let i = 0; i < circles.circles; i++) {
        ctx.current.save()

        for (let j = 0; j < circles.slices; j++) {
          ctx.current.rotate(circles.slice)
          ctx.current.lineWidth = circles.lineWidths[i]
          ctx.current.strokeStyle = '#EEEAE0'

          const bin = circles.bins[i * circles.slices + j]
          if (!bin) continue

          const mapped = math.mapRange(
            audioData.current[bin],
            decibels.current.min,
            decibels.current.max,
            0,
            1,
            true
          )

          const lineWidth = circles.lineWidths[i] * mapped
          if (lineWidth < 1) continue
          ctx.current.lineWidth = lineWidth

          ctx.current.beginPath()
          ctx.current.arc(
            0,
            0,
            cRadius + ctx.current.lineWidth * 0.5,
            0,
            circles.slice
          )
          ctx.current.stroke()
        }

        cRadius += circles.lineWidths[i]
        ctx.current.restore()
      }

      ctx.current.restore()

      setCanvas(canvas.current)
    },
    [dimensions, setCanvas, onMouseUp, circles]
  )

  const configCircles = useCallback(({ circles, slices }) => {
    const slice = (Math.PI * 2) / slices
    const radius = 200
    const bins = []

    const lineWidths = []

    for (let i = 0; i < circles; i++) {
      const t = i / (circles - 1)
      const lineWidth = eases.quadIn(t) * 200 + 20
      lineWidths.push(lineWidth)
    }

    for (let i = 0; i < circles * slices; i++) {
      const bin = random.value() > 0.5 ? 0 : random.rangeFloor(4, 64)
      bins.push(bin)
    }

    setCircles({
      circles,
      slices,
      slice,
      lineWidths,
      radius,
      bins,
    })
  }, [])

  useEffect(() => {
    const h =
      window.innerHeight >= window.innerWidth
        ? window.innerWidth
        : window.innerHeight - 80
    //const w = h
    const w = window.innerWidth

    setDimensions({
      w,
      h,
    })

    configCircles({ circles: 5, slices: 9 })
  }, [configCircles])

  const animate = useCallback(() => {
    render(frame.current)
    frame.current = requestAnimationFrame(animate)
  }, [render])

  useEffect(() => {
    if (animateOn) {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(animate)
    } else {
      cancelAnimationFrame(frame.current)
    }
  }, [animate, animateOn])

  useEffect(() => {
    if (canvas.current && dimensions.h > 0) {
      canvas.current.height = dimensions.h
      canvas.current.width = dimensions.w
      ctx.current = canvas.current.getContext('2d')

      ctx.current.fillStyle = '#000'
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h)

      render()
    }
  }, [dimensions, render, createAudio])

  useEffect(() => {
    if (animateOn) {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(animate)
    }
  }, [animate, animateOn])

  return <S.Canvas ref={canvas} />
}

export default AudioEffect
