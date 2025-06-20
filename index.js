const button = document.getElementById("theme");
var state = true;
const imgTheme = document.getElementById("themes");

gsap.from('.button', {duration: 0.5, x: '-100%', ease: 'sine'});
gsap.from('.socialList', {duration: 1, y: 15, ease: 'sine'});

button.addEventListener("click", changeTheme);

function changeTheme (){
console.log(imgTheme.src);

    if (imgTheme.src.includes("assets/sun.svg")){
    imgTheme.src = "assets/moon.svg";
    document.body.style.backgroundColor = "white";
    document.getElementById("header").style.backgroundColor = "whitesmoke";
    button.style.backgroundColor = "rgb(35,35,46)";
    document.getElementById("nav1").style.color = "rgb(35,35,46)";
    document.getElementById("projects").style.color = "rgb(35,35,46)";
    document.getElementById("about").style.color = "rgb(35,35,46)";
    document.getElementById("work").style.color = "rgb(35,35,46)";
} else {
    imgTheme.src="assets/sun.svg";
    document.body.style.backgroundColor = "rgb(52,52,69)";
    document.getElementById("header").style.backgroundColor = "rgb(35,35,46)";
    button.style.backgroundColor = "azure";
    document.getElementById("projects").style.color = "rgb(255,255,255)";
    document.getElementById("about").style.color = "rgb(255,255,255)";
    document.getElementById("work").style.color = "rgb(255,255,255)";
}
}
 
