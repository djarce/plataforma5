/*
n números están viniendo a una fiesta de números. Cuando lleguen presentalos a todos los demás que ya llegaron. Tu output debería ser algo como esto para n = 5:

"welcome 1"
"welcome 2, meet 1"
"welcome 3, meet 1 and 2"
"welcome 4, meet 1, 2 and 3"
"welcome 5, meet 1, 2, 3 and 4"
*/
let n = Number(prompt("Qué número sos?"));
while (isNaN(n) === true) {
  n = Number(prompt("Ese no es un número. Dale; qué número sos?"));
}
let elQueLlega = 1;
let elQueEstaba;
let losDelMedio = "";
let hola = "";
while (elQueLlega <= n) {
  if (elQueLlega === 1) {
    hola += "welcome " + elQueLlega;
    console.log(hola);
    elQueLlega++;
  } else if (elQueLlega === 2) {
    elQueEstaba = elQueLlega - 1;
    hola = "welcome " + elQueLlega + ", meet " + elQueEstaba;
    console.log(hola);
    elQueLlega++;
  } else if (elQueLlega === 3) {
    losDelMedio = losDelMedio + " " + elQueEstaba;
    elQueEstaba = elQueLlega - 1;
    hola = "welcome " + elQueLlega + ", meet" + losDelMedio + " and " + elQueEstaba;
    elQueLlega++;
    console.log(hola);
  } else {
    losDelMedio = losDelMedio + ", " + elQueEstaba;
    elQueEstaba = elQueLlega - 1;
    hola = "welcome " + elQueLlega + ", meet" + losDelMedio + " and " + elQueEstaba;
    elQueLlega++;
    console.log(hola);
  }
}
