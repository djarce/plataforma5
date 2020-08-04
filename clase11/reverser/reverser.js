/*Crea la función printReverse, que tome un arreglo como argumento y 
logguee en la consola cada elemento, uno por uno, de ese arreglo en orden inverso
(No tienes que invertir el arreglo).*/
function printReverse(array) {
  let arrayLenght = array.length;
  for (i = arrayLenght - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
/*Ahora crea la función reverser, que tome un arreglo como argumento y
 devuelva un nuevo arreglo invertido.*/
let reverser = (array) => {
  let arrayLenght = array.length;
  let reverserOut = [];
  for (i = arrayLenght - 1; i >= 0; i--) {
    reverserOut.push(array[i]);
  }
  console.log(reverserOut);
};
