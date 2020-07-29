//Usa prompt para pedirle al usuario que de un número entero n. Usa parseInt(n) para convertir de una string a un número. Mientras que el resultado sea NaN vas a tener que seguir preguntándole.
let n = parseInt(prompt("Dame un numero."));
while (isNaN(n) === true) {
  n = parseInt(prompt("Necesito un número para jugar."));
}
//Generá un número random entre 1 y n.
let m = Math.ceil(Math.random() * n);
//Pedile al usuario que descubra el número. Decile si se pasaron o estuvieron por debajo del número correcto.
let adivina = parseInt(prompt("Adivina el número. Pista: está entre el 1 y el " + n + "."));
//Que repita el proceso hasta que encuentre el número.
let i = 1;
while (!(adivina === m)) {
  if (adivina > m) {
    adivina = parseInt(prompt("El número es menor. Intenta de nuevo:"));
  } else {
    adivina = parseInt(prompt("El número es mayor. Intenta de nuevo:"));
  }
  i++;
}
//Usa un contador para hacerles saber cuantas oportunidades usaron hasta adivinar el número correcto.
alert("Adivinaste! El número era " + m + ". Usaste " + i + " intentos");
