let cambia = document.getElementById("color");

document.querySelector("button").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = cambia.value;
});

cambia.addEventListener("keydown", function (event) {
  if (event.keyCode === 8) {
    document.querySelector("body").style.backgroundColor = "white";
  }
});
