let seEjecutaEnEvento = function () {
  let body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", "<p>'BEEP'</p>");
  body.classList.toggle("color");
};

document.querySelector("button").addEventListener("click", seEjecutaEnEvento);
