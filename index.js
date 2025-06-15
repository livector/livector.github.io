let windowWidth;
let windowHeight;

function displayDimensions(){
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
document.getElementById("dimensions").innerText = "Window dimensions: "   + windowWidth + " x " + windowHeight;
}


window.addEventListener('resize',displayDimensions);