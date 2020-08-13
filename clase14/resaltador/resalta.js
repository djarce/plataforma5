let p5 = document.querySelectorAll("p");

for (let i = 0; i < p5.length; i++) {
  p5[i].addEventListener("click", function () {
    this.classList.toggle("resaltado");
  });
}
