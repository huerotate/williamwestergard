const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let time = 0;

const color = function (x, y, r, g, b) {
  context.fillStyle = `rgb(${r}, ${g}, ${b})`
  context.fillRect(x, y, 10, 10);
}
const R = function (x, y, time) {
  return (Math.floor(62 + 54 * Math.cos((x * x - y * y) / 300 + time)));
}

const G = function (x, y, time) {
  return (Math.floor(130 + 30 * Math.sin((x * x * Math.cos(time / -5) + y * y * Math.sin(time / 3)) / 300)));
}

const B = function (x, y, time) {
  return (Math.floor(150 + 114 * Math.sin(5 * Math.sin(time / 10) + ((x - 10) * (x - 20) + (y - 30) * (y - 10)) / 300)));
}

const startAnimation = function () {
  for (x = 0; x <= 30; x++) {
    for (y = 0; y <= 30; y++) {
      color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
    }
  }
  time = time + 0.005;
  window.requestAnimationFrame(startAnimation);
}

startAnimation();
