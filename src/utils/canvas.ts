// reference: https://github.com/mattdesl/canvas-sketch-util

export const degToRad = (deg: number) => (deg / 180) * Math.PI

export const randomRange = (min: number, max: number) => {
  const value = Math.random() * (max - min) + min

  return value
}

export const mapRange = (
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
  clamp?: boolean
) => {
  // Author:
  // https://github.com/mattdesl/canvas-sketch-util/blob/master/math.js
  // Reference:
  // https://openframeworks.cc/documentation/math/ofMath/
  if (Math.abs(inputMin - inputMax) < Number.EPSILON) {
    return outputMin
  } else {
    var outVal =
      ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) +
      outputMin
    if (clamp) {
      if (outputMax < outputMin) {
        if (outVal < outputMax) outVal = outputMax
        else if (outVal > outputMin) outVal = outputMin
      } else {
        if (outVal > outputMax) outVal = outputMax
        else if (outVal < outputMin) outVal = outputMin
      }
    }
    return outVal
  }
}
