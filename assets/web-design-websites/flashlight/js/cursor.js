let clientX = -1;
let clientY = -1;
const innerCursor = document.querySelector(".cursor-dot");

const initCursor = () => {
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();

let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;


initCanvas();