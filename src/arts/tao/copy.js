var // CHANGE THIS VALUES TO SEE THE ANIM CHANGING :D
  rot_speed = 0.05,
  anim_speed = 0.01,
  COLOR_1 = 'red',
  COLOR_2 = 'orange',
  BACKGROUND = 'black'

var c = document.getElementById('myCanvas')
var x = c.getContext('2d')
var w
var h
var rot = 0

draw_arc()

function draw_arc() {
  var r = Math.min(w / 3, h / 3)
  // calculate the center
  var px = r + (w - 2 * r) / 2
  var py = r + (h - 2 * r) / 2

  // number that animates the vizualization
  var lop = Math.cos((rot % 2) * Math.PI)

  // Main half circle 1
  x.fillStyle = COLOR_1
  x.beginPath()
  x.arc(px, py, r, Math.PI, 2 * Math.PI)
  x.fill()
  // Main half circle 2
  x.fillStyle = COLOR_2
  x.beginPath()
  x.arc(px, py, r, 0, Math.PI)
  x.fill()

  // smaller arc 1
  x.fillStyle = COLOR_1
  x.beginPath()
  x.arc(px - r / 2 - (r / 4) * lop, py, r / 2 - (r / 4) * lop, 0, 2 * Math.PI)
  x.fill()

  // smaller arc 2
  x.fillStyle = COLOR_2
  x.beginPath()
  x.arc(px + r / 2 - (r / 4) * lop, py, r / 2 + (r / 4) * lop, 0, 2 * Math.PI)
  x.fill()

  // litle arc 1
  x.fillStyle = COLOR_2
  x.beginPath()
  x.arc(px - r / 2 - (r / 4) * lop, py, r / 6 - (lop * r) / 10, 0, 2 * Math.PI)
  x.fill()

  // litle arc 2
  x.fillStyle = COLOR_1
  x.beginPath()
  x.arc(px + r / 2 - (r / 4) * lop, py, r / 6 + (lop * r) / 10, 0, 2 * Math.PI)
  x.fill()

  // Rotation + translation trick :D
  rot = rot - anim_speed
  x.translate(px, py)
  x.rotate(-rot_speed)
  x.translate(-px, -py)
}

window.onload = window.onresize = function () {
  w = c.width = document.body.clientWidth
  h = c.height = document.body.clientHeight
  x.fillStyle = BACKGROUND
  x.fillRect(0, 0, w, h)
  draw_arc()
}

window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 30)
    }
  )
})()
;(function animloop() {
  requestAnimFrame(animloop)
  draw_arc()
})()
