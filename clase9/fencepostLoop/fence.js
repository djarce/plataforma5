//Crea una variable n y asignale un entero.
let n = 5;
//Escribí un while loop que construya un string, compuesto de los números 1 a n, separados por comas.
let x = 0;
let y = 1;
let fence = "";
while (x <= n) {
  if (n === 1) {
    fence = y;
    x++;
  }
  if (x < n) {
    fence += y + ",";
    y++;
  }
  x++;
}
//Asegura que no haya una coma después del último número.
if (x - 1 === n && n != 1) {
  fence = fence.substr(0, fence.length - 1);
}
console.log(fence);
