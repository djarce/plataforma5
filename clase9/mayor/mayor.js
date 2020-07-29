/*Escribí un código que le pida a un usuario ingresar un número entero mayor que 0. 
Seguí preguntando por un número hasta que cumpla la condición anterior.*/
let numero = Number(prompt("Dame un número mayor a 0"));
while (numero <= 0) {
  numero = Number(prompt("Dame un número mayor a 0"));
}
