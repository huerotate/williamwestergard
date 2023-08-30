var pos = document.documentElement;
pos.addEventListener('mousemove', e => {
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
})

function turnOn(){
    document.getElementById("flashlight-button").style.display="none";
    document.getElementById("overlay").style.display="none";
    document.getElementById("container").style.display="block";
    document.getElementById("light").style.display="block";
}