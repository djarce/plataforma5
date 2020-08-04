/*Crea la función isUniform que tome un arreglo como argumento y 
devuelva true si todos los elementos del arreglo son idénticos, 
de lo contrario, debería devolver false. Tu función no debería, 
a menos que sea necesario, recorrer todo el arreglo si no es idéntico, 
al momento que encuentra una diferencia debería cortar.*/
function isUniform(array) {
  let i = 1;
  let primerValor = array[0];
  let arrayLength = array.length - 1;
  while (arrayLength > 0) {
    if (array[i] === primerValor) {
      i++;
      arrayLength--;
      console.log(i);
      console.log(arrayLength);
    } else {
      return false;
    }
  }
  return true;
}
