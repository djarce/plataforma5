//Imprimí todos los números entre -10 y 19
let number = -10;
while (number <= 19) {
  console.log(number);
  number++;
}
//Imprimí todos los números pares entre 10 y 40
let pares = 10;
while (pares <= 40) {
  if (pares % 2 === 0) {
    console.log(pares);
  }
  pares++;
}
//Imprimí todos los números impares entre 300 y 333
let impares = 300;
while (impares <= 333) {
  if (!(impares % 2 === 0)) {
    console.log(impares);
  }
  impares++;
}
//Imprimí todos los números divisibles por 5 y 3, a la vez, entre 5 y 50
let divisibles = 5;
while (divisibles <= 50) {
  if (divisibles % 5 === 0 && divisibles % 3 === 0) {
    console.log(divisibles);
  }
  divisibles++;
}
