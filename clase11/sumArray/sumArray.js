/*Crea una función sumArray que acepte un arreglo de números y 
devuelva la suma de todos los números del arreglo.*/
function sumArray(array) {
  let arrayLength = array.length;
  let i = 0;
  let sum = 0;
  while (arrayLength > 0) {
    sum = sum + array[i];
    arrayLength--;
    i++;
  }
  return sum;
}
