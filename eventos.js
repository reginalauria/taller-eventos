const divs=document.querySelectorAll("div");

for (const div of divs) {
div.addEventListener("click", function () {
alert ("Hola! Soy el div");
});    
}