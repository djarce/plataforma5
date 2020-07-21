//Definir un número secreto.
let secretNumber = 16;
//Pedirle al usuario que adivine el número.
let adivina = Number(prompt("Adivina el número secreto. Ingresa un número del 0 al 100."));
/*Dejarle saber al usuario si adivinó o no el número. Decirle si el número secreto es más alto
 o más bajo que su número. */
if (adivina === secretNumber) {
  alert("Felicitaciones, adivinaste el número.");
} else {
  if (adivina < secretNumber) {
    alert("No adivinaste, el número secreto es mayor que " + adivina + ".");
  } else {
    alert("No adivinaste, el número secreto es menor que " + adivina + ".");
  }
}
