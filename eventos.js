const divs=document.querySelectorAll("div");

for (const div of divs) {
div.addEventListener("click", function () {
alert ("Hola! Soy el div");
});

const button = div.querySelectorAll("input=[type='submit']");

button.addEventListener ("click", function (event) {
event.stopPropagation ();
});
}