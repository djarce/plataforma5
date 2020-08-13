let div = document.querySelector("div");

/* div.style.height = "120px";
div.style.width = "120px";
div.style.backgroundColor = "green"; */

div.classList.add("square");

let intervalo = setInterval(() => {
  div.classList.toggle("square");
}, 1000);
