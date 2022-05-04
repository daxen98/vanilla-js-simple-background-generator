var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient()
{
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ", " + color3.value + ", " + color4.value + ")";
    css.textContent = body.style.background + ";";
}

function getRandomColor()
{
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor()
{
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    color3.value = getRandomColor();
    color4.value = getRandomColor();
    setGradient();
}

window.addEventListener(document.onload, setGradient());

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
color4.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColor);