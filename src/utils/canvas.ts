// reference: https://github.com/mattdesl/canvas-sketch-util

export const degToRad = (deg: number) => (deg / 180) * Math.PI

export const randomRange = (min: number, max: number) =>
  Math.random() * (max - min) + min
