//Ejercicio 1
let numbers = [6, 1, 34, 94, 3, 17];
// CODEA LA SOLUCIÓN
const mul = numbers.reduce((prev, curr) => curr * prev, 1);

console.log(mul); // debería mostrar 977976

//Ejercicio 2
let numeros = [3, 7, 6, "13", 2, 24, 99];
// CODEA LA SOLUCIÓN
let impares = numeros.reduce((modulo, numero) => {
  if (numero % 2 !== 0) {
    modulo.push(numero);
  }
  return modulo;
}, []);

console.log(impares); // [3, 7, 13, 99]

//Ejercicio 3
let num = [5, 4, 1, 9, 2];
// CODEA LA SOLUCIÓN
let max = num.reduce((prev, curr) => {
  return Math.max(prev, curr);
});

console.log(max); // debería mostrar 9

//Ejercicio 4
let join = (arr) => {
  // CODEA LA SOLUCIÓN
  return arr.reduce((prev, curr) => [prev, curr].join(""));
};

console.log(join([1, 2, 3])); // "123"

//Ejercicio 5
let nums = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];
let sinRepetidos =
  // CODEA LA SOLUCIÓN

  nums.reduce(
    (unico, elemento) =>
      unico.includes(elemento) ? unico : [...unico, elemento],
    []
  );

console.log(sinRepetidos); // debería mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]

//Ejercicio 6
let notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal =
  // CODEA LA SOLUCIÓN
  notasDeTPs.reduce((acc, curr) => acc + curr) / notasDeTPs.length;

console.log(notaFinal); // debería mostrar 6.8
