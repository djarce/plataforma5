if (1 < 2) {
  console.log("Siempre voy a ser true.");
}
if (1 > 2) {
  console.log("Siempre voy a ser false.");
}
let triste = "si";
let usuarioTriste = prompt("Estás triste?").toLowerCase();
if (usuarioTriste === triste) {
  console.log("Arriba ese ánimo!!");
}
let secretNumber = 3;
let password = parseInt(prompt("Cuál es el número secreto que le permite ingresar?"));
if (!secretNumber === password) {
  alert("This door is locked from the other side.");
}
let contraseña = "NotEveryoneIsWelcomeHere";
let usuarioIngresa = prompt("Por favor ingrese la contraseña:");
if (contraseña === usuarioIngresa) {
  alert("Bienvenidx!");
} else {
  window.location = "http://www.google.com";
}
