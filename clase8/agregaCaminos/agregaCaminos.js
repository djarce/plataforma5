let edad = parseInt(prompt("Cuántos años tenés?"));

if (edad < 18) {
  if (edad % 2 == 0) {
    console.log("No puedes ingresar al bar!");
  } else {
    console.log("Tu edad es impar, además no puedes ingresar al bar!");
  }
} else if (edad < 21) {
  if (edad % 2 == 0) {
    console.log("Puedes ingresar, pero no se te permite consumir alcohol");
  } else {
    console.log("Tu edad es impar, además puedes ingresar, pero no se te permite consumir alcohol");
  }
} else if (edad < 0) {
  console.log("Error: la edad no puede ser negativa.");
} else {
  if (edad % 2 == 0) {
    console.log("Adelante, eres bienvenido! Felicitaciones, puedes empezar a tomar.");
  } else {
    console.log("Adelante, eres bienvenido! Felicitaciones, puedes empezar a tomar. Además, tu edad es impar.");
  }
}
