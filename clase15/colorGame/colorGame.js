let numberOfSquares = 6;
let colors;
let pickedColor;
let square = document.querySelectorAll(".square");
let clickedColor;
let body = document.querySelector("body");
let bodyStyle = window.getComputedStyle(body);
let bodyBackground = bodyStyle.getPropertyValue("background-color");
let message = document.getElementById("message");
let resetBtn = document.getElementById("reset");
let h1 = document.querySelector("h1");
let colorDisplay = document.getElementById("colorDisplay");
let mode = document.querySelectorAll(".mode");

//Inicia el juego
init();

//Selecciona la dificultad del juego
function difficulty() {
  for (let i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
      event.target.textContent === "Easy"
        ? ((numberOfSquares = 3),
          mode[1].classList.remove("selected"),
          mode[i].classList.add("selected"))
        : ((numberOfSquares = 6),
          mode[0].classList.remove("selected"),
          mode[i].classList.add("selected"));
      reset();
    });
  }
}

//Recorre los cuadrados asignandoles un color
function reset() {
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor(numberOfSquares);
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < square.length; i++) {
    if (colors[i] !== undefined) {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
    } else {
      square[i].style.display = "none";
    }
    square[i].addEventListener("click", function () {
      //Si el color es incorrecto asigna el background del body y dice que intentes de nuevo
      clickedColor = this.style.backgroundColor;
      if (clickedColor !== pickedColor) {
        this.style.backgroundColor = bodyBackground;
        message.textContent = "Try Again";
      } else {
        //Si el color es el correcto, te avisa que adivinaste y cambia todos los cuadrados al color adivinado. Además pregunta si querés volver a jugar.
        message.textContent = "Correct!";
        //Mostrar rgb del color a adivinar en el h1
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor);
        resetBtn.textContent = "Play Again?";
        resetBtn.addEventListener("click", function () {
          this.textContent = "New Colors";
          message.textContent = "";
          h1.style.backgroundColor = bodyBackground;
          colorDisplay.textContent = pickedColor;
        });
      }
    });
  }
}

//Cambia el color de los cuadrados al color adivinado
function changeColors(color) {
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}

//Elegir un color al azar
function pickColor(numberOfSquares) {
  let aleatorio = Math.floor(Math.random() * numberOfSquares);
  let chosen = colors[aleatorio];
  return chosen;
}

//Generar colores aleatoriamente
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let newColor = "rgb(" + r + ", " + g + ", " + b + ")";
  return newColor;
}

//Generar arreglo con colores random
function generateRandomColors(numberOfSquares) {
  let nuevoArreglo = [];
  for (let i = 0; i < numberOfSquares; i++) {
    let nuevoColor = randomColor();
    nuevoArreglo[i] = nuevoColor;
  }
  return nuevoArreglo;
}

//Botón reset genera nuevos colores
resetBtn.addEventListener("click", function () {
  reset();
});

//Función de inicio de juego
function init() {
  difficulty();
  reset();
}
