const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const colors = [
"#b4b2b5",
];

let linePos = 0,
rAF;

canvas.width = innerWidth;
canvas.height = innerHeight;

function texts(color) {
  ctx.setTransform(1, -0.15, 0, 1, 0, -10);
}





function glitch() {
  rAF = window.requestAnimationFrame(glitch);

  texts(colors[Math.floor(Math.random() * 7)]);
  ctx.shadowBlur = 0;
  ctx.shadowColor = "none";
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  for (let i = 0; i < 1000; i++) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
    ctx.fillRect(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight),
    Math.floor(Math.random() * 30) + 1,
    Math.floor(Math.random() * 30) + 1);



  
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 4.1})`;
    ctx.fillRect(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight),
    Math.floor(Math.random() * 25) + 1,
    Math.floor(Math.random() * 25) + 1);

  }

  ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
  ctx.fillRect(
  Math.random() * innerWidth,
  Math.random() * innerHeight,
  Math.random() * innerWidth,
  Math.random() * innerHeight);

  ctx.setTransform(1, 0, 0, .8, .2, 0);

  

}


glitch();

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  
});





/*Page 1*/

function myFunctionStart() {
  rAF = window.requestAnimationFrame(myFunctionStart);

  texts(colors[Math.floor(Math.random() * 7)]);
  ctx.shadowBlur = 0;
  ctx.shadowColor = "none";
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  for (let i = 0; i < 1000; i++) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
    ctx.fillRect(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight),
    Math.floor(Math.random() * 30) + 1,
    Math.floor(Math.random() * 30) + 1);



  
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 4.1})`;
    ctx.fillRect(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight),
    Math.floor(Math.random() * 25) + 1,
    Math.floor(Math.random() * 25) + 1);

  }

  ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
  ctx.fillRect(
  Math.random() * innerWidth,
  Math.random() * innerHeight,
  Math.random() * innerWidth,
  Math.random() * innerHeight);

  ctx.setTransform(1, 0, 0, .8, .2, 0);

  

}







/*Page 2*/

function myFunctionZero() {
  rAF = window.requestAnimationFrame(myFunctionZero);

  texts(colors[Math.floor(Math.random() * 7)]);
  ctx.shadowBlur = 0;
  ctx.shadowColor = "none";
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  for (let i = 0; i < 1000; i++) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
    ctx.fillRect(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight),
    Math.floor(Math.random() * 37) + 1,
    Math.floor(Math.random() * 37) + 1);



  
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 4.1})`;
    ctx.fillRect(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight),
    Math.floor(Math.random() * 25) + 1,
    Math.floor(Math.random() * 25) + 1);

  }

  ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
  ctx.fillRect(
  Math.random() * innerWidth,
  Math.random() * innerHeight,
  Math.random() * innerWidth,
  Math.random() * innerHeight);

  ctx.setTransform(1, 0, 0, .8, .2, 0);

  

}








/*Page 3*/

function myFunctionOne() {
  rAF = window.requestAnimationFrame(myFunctionOne);

  texts(colors[Math.floor(Math.random() * 7)]);
  ctx.shadowBlur = 0;
  ctx.shadowColor = "none";
  ctx.setTransform(1, 0, 0, 1, 20, 20);

  for (let i = 0; i < 1000; i++) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
    ctx.fillRect(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight),
    Math.floor(Math.random() * 82) + 2,
    Math.floor(Math.random() * 70) + 2);



  
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 4.1})`;
    ctx.fillRect(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight),
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 21) + 1);

  }

  ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
  ctx.fillRect(
  Math.random() * innerWidth,
  Math.random() * innerHeight,
  Math.random() * innerWidth,
  Math.random() * innerHeight);

  ctx.setTransform(1, 0, 0, .8, .2, 0);

  

}





/*Page 4*/

function myFunctionTwo() {
  rAF = window.requestAnimationFrame(myFunctionTwo);

  texts(colors[Math.floor(Math.random() * 7)]);
  ctx.shadowBlur = 0;
  ctx.shadowColor = "none";
  ctx.setTransform(1, 0, 0, 1, 20, 20);

  for (let i = 0; i < 1000; i++) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
    ctx.fillRect(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight),
    Math.floor(Math.random() * 162) + 2,
    Math.floor(Math.random() * 142) + 2);



  
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 4.1})`;
    ctx.fillRect(
    Math.floor(Math.random() * innerWidth),
    Math.floor(Math.random() * innerHeight),
    Math.floor(Math.random() * 65) + 1,
    Math.floor(Math.random() * 85) + 1);

  }

  ctx.fillStyle = colors[Math.floor(Math.random() * 45)];
  ctx.fillRect(
  Math.random() * innerWidth,
  Math.random() * innerHeight,
  Math.random() * innerWidth,
  Math.random() * innerHeight);

  ctx.setTransform(4, 2, 1, 2.8, 2.2, 0);

  

}


