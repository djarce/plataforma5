/*Crea una función factorial que tome un número como argumento y devuelva el factorial de ese número.
Osea que si hacemos factorial(5) la función debería hacer 5x4x3x2x1, y devolver el resultado, osea 120.
Algo que tenés que tener en cuenta: el factorial de 0 es igual a 1, 
osea que si el usuario ingresa factorial(0) el resultado debería ser 1.*/
function factorial(numero) {
  let resultado = 1;
  let x = 1;
  if (numero < 0) {
    console.log("El número ingresado como parámetro no es un entero positivo.");
  } else {
    while (x <= numero) {
      resultado = resultado * x;
      x++;
    }
    return resultado;
  }
}
console.log(factorial(-15));
