//Escribí un programa que imprima en la consola los números del 1 al 100
let numero = 1;
while (numero <= 100) {
  //Ahora para los números que son múltiplos de tres que imprima "Fizz" en lugar de ese número
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("FizzBuzz");
  }
  //En los múltiplos de cinco de que imprima "Buzz" en lugar de ese número.
  else if (numero % 3 === 0) {
    console.log("Fizz");
  }
  // Para los números que son múltiplos de tres y de cinco que imprima "FizzBuzz".
  else if (numero % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(numero);
  }

  numero++;
}
