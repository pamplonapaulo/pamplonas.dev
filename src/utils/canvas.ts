// reference: https://github.com/mattdesl/canvas-sketch-util

export const degToRad = (deg: number) => (deg / 180) * Math.PI

export const randomRange = (min: number, max: number) => {
  const value = Math.random() * (max - min) + min

  // console.log('min: ' + min, 'max: ' + max, 'value returned: ', value)
  return value
}
//Math.random() * (max - min) + min
