var video = document.getElementById("myVideo");
function on() {
  document.getElementById("ov").style.display = "block";

if (video.play) {
    video.pause();
  }
}

function off() {
  document.getElementById("ov").style.display = "none";
  document.getElementById("myVideo").style.display = "block";
  document.getElementById("title-main").style.display = "none";

if (video.pause) {
    video.play();
  }
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 5 );
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    video.currentTime = 0;
    btn.innerHTML = "Pause";
  } else {
    video.play();
    video.currentTime = 0;
    btn.innerHTML = "Replay";
  }
}

video = document.getElementById('myVideo');
video.addEventListener('ended',function() {window.location.href = '/web-design.html';})
