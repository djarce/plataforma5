// Escribí una función que acepte un número n y devuelva el n-ésimo término de la serie de Fibonacci.
function fibonacci(n) {
  let corriente = 1;
  let ultimo;
  let anterior;
  let resuelto;
  let respuesta = "";
  while (corriente <= n) {
    if (corriente === 1) {
      ultimo = corriente - 1;
      respuesta += ultimo;
    } else if (corriente === 2) {
      ultimo = corriente - 1;
      anterior = corriente - ultimo;
      respuesta += "," + anterior;
    } else if (corriente === 3) {
      respuesta = respuesta + "," + ultimo;
    } else {
      resuelto = ultimo + anterior;
      respuesta = respuesta + "," + resuelto;
      ultimo = anterior;
      anterior = resuelto;
    }

    corriente++;
  }
  return respuesta;
}
