//Creá una función que se llame tripler que tome un número como input (osea, como parametro) y retorne el triple de ese valor.
function tripler(x) {
  return x * 3;
}
//Creá una función multiply que tome dos números como parámetros y devuelva el producto de los dos.
function multiply(x, y) {
  return x * y;
}
//Creá una función divide que tome dos números como parámetros y devuelva el resultado de dividir el primero por el segundo.
function divide(x, y) {
  return x / y;
}
//Creá una función reminder que tome dos números como parámetros y devuelva el resultado del módulo del primero sobre el segundo.
function reminder(x, y) {
  return x % y;
}
//Usando solamente las funciones que escribieron arriba, y sin otros operadores, calculen el valor de triplicar 5, luego multiplicar eso por 12, dividir por 12 y encontrar el resto de dividir eso en 3.
console.log(reminder(divide(multiply(tripler(5), 12), 12), 3));
