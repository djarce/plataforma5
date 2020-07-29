/*Escribe una función fizzBuzz2 que tome dos strings como argumento y reimplemente el fizzbuzz
pero con esas dos palabras en vez de fizz y buzz. (Escribir los número del 1 al 100. Para múltiplos
de 3 escribir la palabra1, para múltiplos de 5 escribir la palabra2, 
y para múltiplos de 3 y 5 la combinación de ambas palabras)*/
//Mejora la función para que el usuario pueda ingresar un argumento contar_hasta
/*Mejora la función para que el usuario pueda ingresar fizznum y buzznum para que la sustitución
 de palabras ocurra en los números múltiplos de los nuevos argumentos de entrada, en vez de sólo 3 y 5.*/
function fizzBuzz2(contar_hasta, fizznum, buzznum, palabra1, palabra2) {
  let numero = 1;
  let misNumeros = "";
  while (numero <= contar_hasta) {
    if (numero % fizznum === 0 && numero % buzznum === 0) {
      //console.log(palabra1 + palabra2);
      misNumeros = misNumeros + palabra1 + palabra2 + ", ";
    } else if (numero % fizznum === 0) {
      //console.log(palabra1);
      misNumeros = misNumeros + palabra1 + ", ";
    } else if (numero % buzznum === 0) {
      //console.log(palabra2);
      misNumeros = misNumeros + palabra2 + ", ";
    } else {
      //console.log(numero);
      misNumeros = misNumeros + numero + ", ";
    }
    //Asegura que no haya una coma después del último número.
    if (numero === contar_hasta) {
      misNumeros = misNumeros.substr(0, misNumeros.length - 2);
    }
    numero++;
  }
  //Haz que fizzBuzz2 devuelva un string con los números separados por comas.
  return misNumeros;
}
console.log(fizzBuzz2(100, 6, 8, "hola3", "hola5"));
