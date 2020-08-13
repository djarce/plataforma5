let body = document.querySelector("body");
let image = document.querySelector("img");

body.addEventListener("drag", function (event) {
  let x = event.clientX;
  let y = event.clientY;
  image.style.top = y + "px";
  image.style.left = x + "px";
});
