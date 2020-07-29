//Elegir un número.
let n = Number(prompt("Por favor elige un número."));
//Calcula el producto de todos los enteros positivos entre 0 y n
let x = 1;
let producto;
let resultado = 1;
while (x <= n) {
  producto = 1 * x;
  resultado = producto * resultado;
  x++;
}
console.log(resultado);
