//crearFrase debería seleccionar aleatoriamente entre dos o más opciones de frases pre-establecidas y devolverla (return). Una buena forma es crear un número aleatorio usando Math.random() y evaluar: si ese número es mayor que cierto valor, la frase es… Si es menor que cierto valor, entonces la frase seria… usando un if.
function crearFrase() {
  let frase = Math.random();
  if (frase < 0.33) {
    frase = "Mar del plata, El Cóndor, Buenos Aires.";
    return frase;
  } else if (frase < 0.66) {
    frase = "Buenos Aires, El Cóndor, Mar del Plata.";
    return frase;
  } else {
    frase = "Hacer una estatua a Norbert Degoas.";
    return frase;
  }
}
/* Invocar crearFrase y guardar el valor retornado en una variable que se llame nuevaFrase
let nuevaFrase = crearFrase();
//Usa alert para mostrar la frase en pantalla.
alert(nuevaFrase); */

//Refactoreá tu código para que no necesite la variable nuevaFrase.
// Usá un while loop para correr crearFrase diez veces seguidas para ver si realmente la selección de oraciones es aleatorio.
let contador = 1;
while (contador <= 10) {
  alert(crearFrase());
  contador++;
}
